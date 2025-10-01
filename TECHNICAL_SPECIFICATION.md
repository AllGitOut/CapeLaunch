# CapeLaunch Technical Specification

## System Overview
CapeLaunch is a React-based single-page application that displays upcoming rocket launches from Cape Canaveral with real-time countdown timers. The application integrates with the Launch Library API to provide live launch data with a fallback to mock data for reliability.

**Version**: 1.0.0  
**Last Updated**: September 4, 2025  
**Tech Stack**: React 18, Vite 5, Vanilla CSS  
**Browser Support**: Modern browsers (ES6+)  

## Architecture Specification

### Component Architecture
```
App (Root Component)
├── Header Section
│   ├── CapeLaunch Logo (160px desktop, 120px mobile)
│   └── Hero Title
├── Launch Grid Container
│   └── LaunchCard Components (1-8 cards)
│       ├── CountdownTimer (real-time updates)
│       ├── Mission Information Block
│       ├── Launch Details Block
│       └── Expandable Description
└── Loading/Error States
```

### Data Flow Architecture
```
Launch Library API
    ↓ (HTTP GET)
App.fetchLaunchData()
    ↓ (client-side filter)
Florida-only Launches
    ↓ (React setState)
LaunchCard Components
    ↓ (1-second intervals)
CountdownTimer Updates
```

## API Integration Specification

### Primary API: Launch Library
- **Endpoint**: `https://ll.thespacedevs.com/2.2.0/launch/upcoming/`
- **Method**: GET
- **Parameters**: `?limit=20&offset=0`
- **Rate Limiting**: No authentication required, standard rate limits apply
- **Response Format**: JSON with nested objects

### API Response Structure
```json
{
  "results": [
    {
      "id": "string",
      "name": "string",
      "net": "2025-09-15T10:30:00Z",
      "rocket": {
        "configuration": {
          "name": "Falcon 9"
        }
      },
      "pad": {
        "name": "Launch Complex 39A",
        "location": {
          "name": "Kennedy Space Center, FL, USA",
          "country_code": "USA"
        }
      },
      "status": {
        "name": "Go for Launch"
      },
      "mission": {
        "description": "Commercial crew mission..."
      }
    }
  ]
}
```

### Data Transformation Pipeline
1. **API Response**: Raw Launch Library API data
2. **Location Filtering**: Filter for Florida launches only
3. **Data Mapping**: Transform API structure to component props
4. **Status Normalization**: Map API status to color-coded indicators
5. **Date Processing**: Convert ISO strings to local display format

### Florida Launch Filter Logic
```javascript
const floridaLaunches = data.results.filter(launch => {
  const locationName = launch.pad?.location?.name || '';
  return locationName.includes('Cape Canaveral') || 
         locationName.includes('Kennedy Space Center') ||
         locationName.includes('Florida') || 
         locationName.includes('FL');
});
```

## Component Specifications

### App Component
**File**: `/src/App.jsx`  
**Type**: Functional component with hooks  
**State Management**: React useState  
**Side Effects**: useEffect for API calls  

#### State Schema
```javascript
const [launches, setLaunches] = useState([]); // Array<LaunchObject>
const [loading, setLoading] = useState(true); // boolean
const [error, setError] = useState(null);     // string | null
```

#### Key Methods
- `fetchLaunchData()`: Async function for API integration
- `formatDateTime()`: Date formatting utility
- `getStatusColor()`: Status-to-color mapping function

### CountdownTimer Component
**Purpose**: Real-time countdown display  
**Update Frequency**: 1 second intervals  
**Memory Management**: Cleanup timers on unmount  

#### Timer Logic
```javascript
const calculateTimeLeft = (targetDate) => {
  const now = new Date();
  const target = new Date(targetDate);
  const difference = target - now;
  
  if (difference <= 0) return null;
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};
```

### LaunchCard Component
**Purpose**: Individual launch display with expand functionality  
**Interaction**: Click to expand/collapse description  
**State**: Local expanded state per card  

#### Information Hierarchy
1. **Primary**: Launch date/time (top position)
2. **Secondary**: Mission name and rocket type
3. **Tertiary**: Launch pad and status
4. **Quaternary**: Expandable mission description

## Styling Specification

### Design System

#### Color Palette
```css
/* Brand Colors */
--brand-orange: #f77f00;     /* Primary accent */
--brand-blue: #0E182A;       /* Logo blue for info blocks */

/* Status Colors */
--status-scheduled: #4CAF50; /* Green */
--status-delayed: #FF9800;   /* Yellow */
--status-completed: #f44336; /* Red */

/* Background Gradient */
--bg-gradient: linear-gradient(135deg, #0a0a2e 0%, #16213e 50%, #0f3460 100%);

/* Glass Morphism */
--glass-bg: rgba(14, 24, 42, 0.9);
--glass-border: rgba(255, 255, 255, 0.1);
--glass-backdrop: blur(10px);
```

#### Typography Scale
```css
/* Header Typography */
h1: 2.5rem (40px) desktop, 2rem (32px) mobile
h2: 1.5rem (24px) all devices
h3: 1.25rem (20px) all devices

/* Body Typography */
body: 1rem (16px) base size
small: 0.875rem (14px) for secondary info
```

### Layout Specification

#### Responsive Grid System
```css
/* Desktop (1024px+) */
.launch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  max-width: 1200px;
}

/* Tablet (768px - 1023px) */
@media (max-width: 1023px) {
  .launch-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 15px;
  }
}

/* Mobile (320px - 767px) */
@media (max-width: 767px) {
  .launch-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}
```

#### Component Sizing Standards
- **Logo**: 160px × 160px (desktop), 120px × 120px (mobile)
- **Launch Cards**: Min 350px width, flexible height
- **Touch Targets**: Minimum 44px × 44px for mobile interaction
- **Margins**: 20px standard, 15px mobile, 10px compact

### Animation Specifications

#### Hover Effects
```css
.launch-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.launch-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

#### Expand/Collapse Animation
```css
.launch-description {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.launch-description.expanded {
  max-height: 200px;
}
```

## Performance Specifications

### Loading Performance
- **Initial Load**: < 2 seconds on standard broadband
- **API Response**: < 1 second typical response time
- **Bundle Size**: < 500KB compressed JavaScript
- **Image Assets**: < 100KB total (logo optimization)

### Runtime Performance
- **Countdown Updates**: 60 FPS smooth updates across all timers
- **Memory Usage**: < 50MB heap size in modern browsers  
- **CPU Usage**: < 5% on modern devices during normal operation
- **Network Usage**: Single API call per session, ~50KB response

### Optimization Strategies
1. **Timer Efficiency**: Single setInterval per countdown component
2. **Re-render Optimization**: Minimal state updates, proper dependencies
3. **CSS Performance**: Hardware-accelerated transforms
4. **Asset Loading**: Optimized image formats and sizes

## Security Specifications

### Data Security
- **API Integration**: Read-only public API, no authentication required
- **Client-side Only**: No server-side data storage or processing
- **No User Data**: No personal information collected or stored
- **XSS Protection**: React's built-in JSX sanitization

### Network Security
- **HTTPS**: All API calls over secure connections
- **CORS**: Handled by Launch Library API CORS policy
- **No Third-party Tracking**: No analytics or tracking scripts
- **Content Security**: No inline scripts or unsafe content

## Browser Compatibility

### Supported Browsers
- **Chrome**: Version 88+ (January 2021+)
- **Firefox**: Version 85+ (January 2021+)
- **Safari**: Version 14+ (September 2020+)
- **Edge**: Version 88+ (January 2021+)

### Required Features
- **ES6+ Support**: Arrow functions, async/await, destructuring
- **CSS Grid**: Full grid layout support
- **Fetch API**: Native fetch for API calls
- **CSS Custom Properties**: CSS variables support
- **Backdrop Filter**: For glass morphism effects

### Polyfill Strategy
No polyfills required - graceful degradation for unsupported features:
- Glass morphism effects degrade to solid backgrounds
- Grid layout falls back to flexbox on older browsers
- Modern CSS features have fallback values

## Testing Specifications

### Manual Testing Checklist
- [ ] **Responsive Design**: Test 320px, 768px, 1024px, 1920px widths
- [ ] **API Integration**: Verify data loading and error states
- [ ] **Countdown Accuracy**: Confirm timers update correctly
- [ ] **Cross-browser**: Test Chrome, Firefox, Safari, Edge
- [ ] **Performance**: Check smooth scrolling and animations
- [ ] **Accessibility**: Keyboard navigation and screen reader compatibility

### Performance Testing
- [ ] **Lighthouse Score**: Aim for 90+ in all categories
- [ ] **Memory Leaks**: Check timer cleanup on component unmount
- [ ] **Network Usage**: Verify single API call per session
- [ ] **Bundle Analysis**: Confirm optimized asset sizes

### User Acceptance Testing
- [ ] **Launch Information**: All essential details visible
- [ ] **Countdown Accuracy**: Timers match actual launch times
- [ ] **Visual Appeal**: Professional space theme execution
- [ ] **Mobile Usability**: Smooth interaction on touch devices
- [ ] **Loading States**: Clear feedback during data loading

## Deployment Specifications

### Build Configuration
```bash
# Development
npm run dev         # Start development server on localhost:5173

# Production Build
npm run build       # Generate optimized build in /dist

# Preview Production
npm run preview     # Test production build locally
```

### Production Assets
```
dist/
├── index.html                 # Main HTML file
├── assets/
│   ├── index-[hash].css      # Compiled styles
│   ├── index-[hash].js       # Compiled JavaScript
│   └── CapeLaunch-Logo1-[hash].png  # Optimized logo
└── vite.svg                  # Vite favicon
```

### Environment Requirements
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher
- **Memory**: 512MB RAM minimum for build process
- **Disk Space**: 100MB for node_modules, 5MB for build output

### Hosting Requirements
- **Static Hosting**: Any static file server (Netlify, Vercel, GitHub Pages)
- **CDN**: Recommended for production deployments
- **HTTPS**: Required for production (API calls require secure context)
- **Bandwidth**: ~2MB per user session (including assets and API calls)

## Monitoring and Maintenance

### Health Monitoring
- **API Availability**: Monitor Launch Library API uptime
- **Error Tracking**: Log JavaScript errors and API failures
- **Performance Metrics**: Track page load times and user interactions
- **Usage Analytics**: Monitor user engagement with countdown timers

### Maintenance Tasks
- **Dependency Updates**: Monthly npm package updates
- **API Compatibility**: Monitor Launch Library API changes
- **Browser Support**: Test new browser versions quarterly
- **Performance Review**: Quarterly performance audit

### Backup and Recovery
- **Source Code**: Git repository with full history
- **Assets**: Logo and static files in version control
- **Configuration**: All build and deployment configs in repository
- **Documentation**: Complete specs and setup instructions

---

**Document Version**: 1.0.0  
**Last Updated**: September 4, 2025  
**Next Review Date**: October 4, 2025
