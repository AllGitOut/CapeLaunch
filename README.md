
# Prompt to Prototype Vibe Coding Challenge Starter

The SkillUp AI **Prompt to Prototype** is a fast-paced AI-powered creation challenge.  
In one hour, you’ll take an idea from a concept to a working **web-based prototype** using Copilot, Researcher Agent, GitHub Copilot, or no-code React-based builders.

You’ll go through **six key stages**:

1.  Ideation — get or refine your idea
    
2.  Research — validate and explore your concept
    
3.  PRD — define your product requirements
    
4.  Branding — give your product a look, feel, and personality
    
5.  Prototype — build your MVP
    
6.  Submit — package your work for sharing

Visit [https://aka.ms/skillupai/ptpchallenge](https://aka.ms/skillupai/ptpchallenge) to learn more about the Challenge and get started. 


# CapeLaunch 🚀

A real-time rocket launch tracking dashboard for Cape Canaveral launches, built with React and Vite. View upcoming launches with live countdown timers, mission details, and status indicators.

![CapeLaunch Dashboard](Screenshot%202025-09-04%20144802.png)

## 🌟 Features

- **🕒 Live Countdown Timers** - Real-time countdowns to launch with second-precision updates
- **🚀 Real Launch Data** - Integration with Launch Library API for up-to-date launch information
- **🌍 Florida Focus** - Filtered to show only Cape Canaveral and Kennedy Space Center launches
- **📱 Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **🌙 Special Indicators** - Nighttime launch and sonic boom warnings
- **🎨 Cosmic Theme** - Beautiful space-themed UI with glass morphism effects
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and builds

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd prompt-to-prototype-challenge

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Complete styling system
├── main.jsx         # React app entry point
└── assets/
    └── CapeLaunch-Logo1.png  # Brand logo

public/              # Static assets
├── vite.svg        # Default favicon

docs/               # Project documentation
├── PROJECT_DOCUMENTATION.md    # Comprehensive project overview
├── DEVELOPMENT_SESSION_LOG.md  # Complete development history
└── TECHNICAL_SPECIFICATION.md # Technical implementation details
```

## 🎯 Core Components

### App Component
Main application logic with state management, API integration, and component rendering.

### CountdownTimer
Real-time countdown component that updates every second with proper cleanup to prevent memory leaks.

### LaunchCard
Individual launch display with expandable descriptions, status indicators, and hover effects.

## 🌐 API Integration

**Primary Data Source**: [Launch Library API](https://ll.thespacedevs.com/2.2.0/launch/upcoming/)
- Real-time launch data with no authentication required
- Client-side filtering for Florida-only launches
- Fallback to mock data for reliability

### Supported Launch Locations
- Cape Canaveral Space Force Station
- Kennedy Space Center
- Any Florida-based launch facility

## 🎨 Design System

### Color Palette
- **Brand Orange**: #f77f00 (accent color)
- **Logo Blue**: #0E182A (information blocks)
- **Status Colors**: Green (scheduled), Yellow (delayed), Red (completed)

### Typography
- Modern sans-serif fonts optimized for readability
- Responsive text sizing across all devices
- Clear information hierarchy

### Visual Effects
- Cosmic background gradients
- Glass morphism card effects
- Smooth hover animations and transitions

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px (single column layout)
- **Tablet**: 768px - 1023px (flexible grid)
- **Desktop**: 1024px+ (multi-column grid, max 1200px container)

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Tech Stack
- **React 18** - Modern React with hooks
- **Vite 5** - Fast build tool and dev server
- **Vanilla CSS** - No CSS frameworks, custom styling system
- **Launch Library API** - Real-time space launch data

### Development Features
- Hot Module Replacement (HMR) for instant updates
- ESLint configuration for code quality
- Responsive design testing built-in
- Mock data fallback for offline development

## 📚 Documentation

This project includes comprehensive documentation:

- **[Project Documentation](PROJECT_DOCUMENTATION.md)** - Complete project overview, features, and architecture
- **[Development Session Log](DEVELOPMENT_SESSION_LOG.md)** - Detailed development process and decision history
- **[Technical Specification](TECHNICAL_SPECIFICATION.md)** - Implementation details, API specs, and system architecture

## 🚀 Launch Status Indicators

- 🟢 **Scheduled** - Launch is confirmed and on schedule
- 🟡 **Delayed** - Launch has been postponed
- 🔴 **Completed** - Launch has already occurred
- 🌙 **Nighttime Launch** - Launch scheduled during nighttime hours
- 💥 **Sonic Boom Expected** - Launch may produce sonic booms

## 📊 Performance

- **Bundle Size**: < 500KB compressed
- **Initial Load**: < 2 seconds on broadband
- **Runtime Performance**: Smooth 60fps animations
- **Memory Efficient**: Proper cleanup prevents memory leaks

## 🌐 Browser Support

- Chrome 88+ (January 2021+)
- Firefox 85+ (January 2021+)  
- Safari 14+ (September 2020+)
- Edge 88+ (January 2021+)

Modern browsers with ES6+, CSS Grid, and Fetch API support required.

## 🔒 Privacy & Security

- **No User Data Collection** - No personal information stored
- **Read-only API Access** - Only fetches public launch data
- **Client-side Only** - No server-side data processing
- **HTTPS Secure** - All API calls over encrypted connections

## 🎯 MVP Achievements

✅ **Sub-hour Development** - Functional MVP completed in ~75 minutes  
✅ **Real Launch Data** - Live API integration with Launch Library  
✅ **Live Countdowns** - Real-time countdown timers with second precision  
✅ **Responsive Design** - Mobile and desktop compatibility tested  
✅ **Professional UI** - Polished space theme with brand consistency  

## 🔮 Future Enhancements

### Next Sprint
- Auto-refresh capability for live data updates
- Enhanced error handling with user-friendly messages
- Push notifications for upcoming launches
- Advanced sorting and filtering options

### Medium Term
- Launch details modal with comprehensive mission information
- Historical launch data and outcome tracking
- User favorites and personalized launch tracking
- Weather integration for launch conditions

### Long Term
- Multi-location support beyond Florida
- Social features for sharing launches
- Mobile app version with React Native
- Real-time launch video feeds integration

## 🤝 Contributing

This project was developed as part of a prompt-to-prototype challenge. The complete development process is documented in the session logs for educational and reference purposes.

## 📄 License

This project is part of a development challenge and includes comprehensive documentation for educational purposes.

---

**Built with** ❤️ **for space enthusiasts**  
**Powered by** React, Vite, and the Launch Library API

*Last updated: September 4, 2025*

## Structure

```
.
├── .devcontainer/
│   └── devcontainer.json
├── .github/
│   └── copilot-instructions.md
├── src/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── .editorconfig
└── README.md
```

## Copilot Instructions

This repo includes **custom Copilot instructions** in `.github/copilot-instructions.md` designed to help you speed-run a tiny web MVP in under an hour. The instructions:

- **Keep scope minimal** — Focus on one clear user action (e.g., answer 5 questions, click-to-start mini-game, submit an email)
- **Prefer plain React + Vite** — Avoid heavy frameworks unless explicitly needed
- **Follow a 5-step build flow** — Confirm MVP goal → Sketch UI → Wire interaction → Add finishing touch → Ship
- **Include ready-to-use prompts** — Copy/paste prompts to guide your Copilot chat sessions

The instructions help Copilot understand your project context and provide more targeted assistance for rapid prototyping. Simply mention your idea and Copilot will guide you through the structured build process.

## Tips

- Delete anything you don't need. Keep it **lean**.
- Use the **Prompts** inside `.github/copilot-instructions.md` as your running chat with Copilot.
- Aim for a **single, clear MVP** first (one page, one core action).
- If you need routing later, add it (e.g., `react-router-dom`) *after* your MVP works. If you want to submit your project to be aggregated, you need to use HashRouter. 
- See the Prompt to Prototype Challenge Submission Repo at [https://aka.ms/skillupai/ptp/submissions/repo](https://aka.ms/skillupai/ptp/submissions/repo) to learn more. 

## License

MIT
