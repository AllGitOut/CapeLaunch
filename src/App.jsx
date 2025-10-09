import React, { useState, useEffect } from 'react'
import './App.css'
import capeLaunchLogo from './assets/CapeLaunch-Logo1.png'

// API endpoint for Launch Library - Florida launches only (Cape Canaveral and Kennedy Space Center)
const LAUNCH_API_URL = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=50&pad__location__country_code=USA&pad__name__icontains=LC-'

// Function to fetch real launch data
async function fetchLaunchData() {
  try {
    const response = await fetch(LAUNCH_API_URL)
    const data = await response.json()
    
    // Filter for only Cape Canaveral and Kennedy Space Center launches
    const floridaLaunches = data.results.filter(launch => {
      const location = launch.pad?.location?.name?.toLowerCase() || ''
      const padName = launch.pad?.name?.toLowerCase() || ''
      
      return (
        location.includes('kennedy space center') || 
        location.includes('cape canaveral') ||
        padName.includes('lc-') ||
        padName.includes('slc-')
      ) && launch.pad?.location?.country_code === 'USA'
    })
    
    // Transform API data to our format
    return floridaLaunches.map(launch => {
      const launchDate = new Date(launch.net)
      const hour = launchDate.getHours()
      const isNighttime = hour >= 22 || hour <= 5
      
      return {
        id: launch.id.toString(),
        missionName: launch.name,
        launchDate: launchDate,
        rocket: launch.rocket?.configuration?.full_name || 'Unknown Rocket',
        launchPad: launch.pad?.name || 'Unknown Pad',
        location: launch.pad?.location?.name || 'Kennedy Space Center, FL',
        status: launch.status?.name === 'Go for Launch' ? 'scheduled' : 
                launch.status?.name === 'TBD' ? 'delayed' : 'scheduled',
        description: launch.mission?.description || 'Mission details not available',
        firstStageLanding: launch.rocket?.configuration?.reusable || false,
        isNighttime: isNighttime
      }
    })
  } catch (error) {
    console.error('Failed to fetch launch data:', error)
    return getMockData() // Fallback to mock data
  }
}

// Mock data as fallback
function getMockData() {
  return [
    {
      id: '1',
      missionName: 'Artemis III',
      launchDate: new Date('2025-09-10T14:30:00'),
      rocket: 'NASA SLS Block 1',
      launchPad: 'LC-39A',
      location: 'Kennedy Space Center, FL',
      status: 'scheduled',
      description: 'First crewed lunar landing mission since Apollo 17',
      firstStageLanding: false,
      isNighttime: false
    },
    {
      id: '2',
      missionName: 'Starlink Group 8-7',
      launchDate: new Date('2025-09-06T08:15:00'),
      rocket: 'SpaceX Falcon 9',
      launchPad: 'LC-40',
      location: 'Cape Canaveral Space Force Station, FL',
      status: 'scheduled',
      description: 'Deployment of 23 Starlink satellites to LEO',
      firstStageLanding: true,
      isNighttime: false
    },
    {
      id: '3',
      missionName: 'Europa Clipper',
      launchDate: new Date('2025-09-08T02:45:00'),
      rocket: 'SpaceX Falcon Heavy',
      launchPad: 'LC-39A',
      location: 'Kennedy Space Center, FL',
      status: 'scheduled',
      description: 'NASA mission to study Jupiter\'s moon Europa',
      firstStageLanding: false,
      isNighttime: true
    },
    {
      id: '4',
      missionName: 'Crew-9',
      launchDate: new Date('2025-09-12T23:20:00'),
      rocket: 'SpaceX Falcon 9',
      launchPad: 'LC-39A',
      location: 'Kennedy Space Center, FL',
      status: 'delayed',
      description: 'NASA Commercial Crew mission to the ISS',
      firstStageLanding: true,
      isNighttime: true
    },
    {
      id: '5',
      missionName: 'USSF-52',
      launchDate: new Date('2025-08-30T16:00:00'),
      rocket: 'ULA Atlas V',
      launchPad: 'SLC-41',
      location: 'Cape Canaveral Space Force Station, FL',
      status: 'completed',
      description: 'US Space Force classified payload mission',
      firstStageLanding: false,
      isNighttime: false
    },
    {
      id: '6',
      missionName: 'Starlink Group 8-8',
      launchDate: new Date('2025-09-14T04:30:00'),
      rocket: 'SpaceX Falcon 9',
      launchPad: 'LC-40',
      location: 'Cape Canaveral Space Force Station, FL',
      status: 'scheduled',
      description: 'Deployment of 23 Starlink satellites to LEO',
      firstStageLanding: true,
      isNighttime: true
    }
  ]
}

// Countdown Timer Component
function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const difference = target - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        if (days > 0) {
          setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
        } else {
          setTimeLeft(`${hours}h ${minutes}m ${seconds}s`)
        }
      } else {
        setTimeLeft('LAUNCHED')
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return <div className="countdown">{timeLeft}</div>
}

// Launch Card Component
function LaunchCard({ launch, isNext = false }) {
  const [expanded, setExpanded] = useState(false)
  
  const statusColors = {
    scheduled: '#f77f00',
    delayed: '#fcbf49',
    completed: '#415a77'
  }

  const formatDateTime = (date) => {
    const dateStr = new Date(date).toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
    const timeStr = new Date(date).toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    })
    return `${dateStr}, ${timeStr}`
  }

  return (
    <div 
      className={`launch-card ${isNext ? 'next-launch' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="launch-header">
        <div className="mission-info">
          <p className="launch-datetime">{formatDateTime(launch.launchDate)}</p>
          
          <h3>{launch.missionName}</h3>
          <p className="launch-details">
            {launch.launchPad}
          </p>
          <p className="launch-location">{launch.location}</p>
          
          {/* Special indicators with enhanced styling */}
          <div className="launch-indicators">
            {launch.isNighttime && (
              <span className="indicator nighttime-indicator">
                🌙 Late Night Launch
              </span>
            )}
            {launch.firstStageLanding && (
              <span className="indicator sonic-boom-indicator">
                🔥 Booster Landing - Sonic Booms Expected
              </span>
            )}
          </div>
        </div>
        
        <div className="launch-meta">
          <span 
            className="status-badge" 
            style={{ backgroundColor: statusColors[launch.status] }}
          >
            {launch.status.toUpperCase()}
          </span>
          {launch.status === 'scheduled' && (
            <CountdownTimer targetDate={launch.launchDate} />
          )}
        </div>
      </div>
      
      {expanded && (
        <div className="launch-description">
          <p>{launch.description}</p>
          {launch.isNighttime && (
            <div className="warning-note nighttime-warning">
              ⚠️ <strong>Nighttime Launch:</strong> This launch occurs between 10pm and 5am. Plan accordingly for visibility and travel.
            </div>
          )}
          {launch.firstStageLanding && (
            <div className="warning-note sonic-boom-warning">
              🔊 <strong>Sonic Boom Expected:</strong> The first stage will land back at Cape Canaveral, creating sonic booms approximately 8-10 minutes after liftoff.
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [launches, setLaunches] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch launch data on component mount
  useEffect(() => {
    const loadLaunches = async () => {
      try {
        setLoading(true)
        const launchData = await fetchLaunchData()
        setLaunches(launchData)
        setError(null)
      } catch (err) {
        setError('Failed to load launch data')
        console.error('Error loading launches:', err)
      } finally {
        setLoading(false)
      }
    }

    loadLaunches()
  }, [])

  // Sort launches: scheduled first, then by date
  const sortedLaunches = launches
    .filter(launch => launch.status !== 'completed')
    .sort((a, b) => new Date(a.launchDate) - new Date(b.launchDate))
  
  const nextLaunch = sortedLaunches[0]
  const upcomingLaunches = sortedLaunches.slice(1)

  if (loading) {
    return (
      <div className="app">
        <header className="hero">
          <div className="hero-content">
            <div className="hero-header">
              <img src={capeLaunchLogo} alt="CapeLaunch" className="hero-logo" />
              <div className="hero-text">
                <h1>CapeLaunch</h1>
                <p>Your gateway to Cape Canaveral rocket launches</p>
              </div>
            </div>
          </div>
        </header>
        <div className="loading-state">
          <h2>🚀 Loading launch data...</h2>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app">
        <header className="hero">
          <div className="hero-content">
            <div className="hero-header">
              <img src={capeLaunchLogo} alt="CapeLaunch" className="hero-logo" />
              <div className="hero-text">
                <h1>CapeLaunch</h1>
                <p>Your gateway to Cape Canaveral rocket launches</p>
              </div>
            </div>
          </div>
        </header>
        <div className="error-state">
          <h2>⚠️ {error}</h2>
          <p>Using fallback data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="hero">
        <img src={capeLaunchLogo} alt="CapeLaunch" className="hero-logo-large" />
        <p className="hero-tagline">Cape Canaveral Rocket Launches</p>
      </header>

      {nextLaunch && (
        <section className="next-launch-section">
          <h2>Next Launch</h2>
          <LaunchCard launch={nextLaunch} isNext={true} />
        </section>
      )}

      <section className="upcoming-launches">
        <h2>Upcoming Launches</h2>
        <div className="launches-grid">
          {upcomingLaunches.map(launch => (
            <LaunchCard key={launch.id} launch={launch} />
          ))}
        </div>
      </section>

      <footer>
        <p>Cape Canaveral Launch Schedule • Data from Launch Library API</p>
        <p><a href="https://allgitout.github.io/CapeMoon/" target="_blank" rel="noopener noreferrer" className="footer-link">View Moon Phase Calendar »</a></p>
      </footer>
    </div>
  )
}
