# CapeLaunch Local Development Setup Guide

## �️ Languages & Technologies Used

### **Primary Languages:**

#### **JavaScript (ES6+)** - Main Programming Language
- **React components** with modern JavaScript features
- **Async/await** for API calls and data fetching
- **Arrow functions** and destructuring syntax
- **Template literals** for dynamic strings
- **Modern DOM manipulation**

#### **JSX (JavaScript XML)** - React Component Syntax
- **React component markup** that looks like HTML but is JavaScript
- **Component composition** and props passing
- **Event handling** and state management
- **Conditional rendering** based on data

#### **CSS3** - Styling and Design
- **Modern CSS features** (Grid, Flexbox, Custom Properties)
- **CSS Variables** for consistent theming and brand colors
- **Media queries** for responsive mobile/desktop design
- **CSS animations** and smooth transitions
- **Glass morphism** effects with backdrop-filter

#### **HTML5** - Document Structure
- **Semantic HTML** elements for accessibility
- **Modern HTML features** and standards
- **Single-page application** structure

### **Configuration Languages:**
- **JSON** - package.json, VS Code settings, configuration files
- **Markdown** - All documentation files (.md)

### **JavaScript Features We Use:**

#### **ES6+ Modern Syntax:**
```javascript
// Arrow functions
const fetchData = async () => { ... }

// Destructuring
const { name, rocket } = launch;

// Template literals
const message = `Launch in ${days} days`;

// Async/await for API calls
const response = await fetch(apiUrl);

// Spread operator
setLaunches([...launches, newLaunch]);
```

#### **React Hooks:**
```javascript
// State management
const [launches, setLaunches] = useState([]);

// Side effects and lifecycle
useEffect(() => {
  fetchLaunchData();
}, []);

// Real-time countdown updates
setInterval(() => {
  setTimeLeft(calculateTimeLeft(targetDate));
}, 1000);
```

### **CSS Features We Use:**

```css
/* CSS Grid for responsive layouts */
.launch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

/* CSS Custom Properties (Variables) */
:root {
  --brand-orange: #f77f00;
  --brand-blue: #0E182A;
}

/* Glass Morphism Effects */
.launch-card {
  backdrop-filter: blur(10px);
  background: rgba(14, 24, 42, 0.9);
}

/* Smooth Animations */
.launch-card:hover {
  transform: translateY(-8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### **What We DON'T Need:**
✅ **No TypeScript** - Keeping it simple for MVP  
✅ **No SASS/SCSS** - Vanilla CSS is sufficient  
✅ **No server-side languages** - Client-side only  
✅ **No database languages** - API provides all data  
✅ **No complex build tools** - Vite handles everything  

### **Skill Level Required:**

#### **Beginner Friendly:**
- **HTML/CSS** - Standard web development skills
- **Basic JavaScript** - Variables, functions, objects, arrays
- **React basics** - Components, props, state management

#### **Intermediate Features:**
- **Modern JavaScript** - ES6+ features like async/await
- **CSS Grid/Flexbox** - Modern responsive layout techniques
- **API integration** - Fetch calls and JSON data handling
- **React Hooks** - useState, useEffect for state and lifecycle

### **Browser Compatibility:**
All features work in modern browsers:
- **Chrome 88+** (January 2021+)
- **Firefox 85+** (January 2021+)
- **Safari 14+** (September 2020+)
- **Edge 88+** (January 2021+)

### **Why These Language Choices:**

1. **JavaScript + React** - Industry standard for modern web applications
   - Large community and ecosystem
   - Excellent tooling and debugging support
   - Component-based architecture scales well

2. **Vanilla CSS** - No build complexity, full control over styling
   - Modern CSS features are powerful enough for our needs
   - No learning curve for additional preprocessors
   - Direct browser support without compilation

3. **ES6+ Features** - Modern, clean code that's readable and maintainable
   - Arrow functions improve code readability
   - Async/await makes API calls cleaner than callbacks
   - Template literals make string formatting elegant

4. **No TypeScript** - Faster development for MVP, less setup complexity
   - JavaScript is sufficient for this project size
   - Reduces build complexity and compilation time
   - Easier for beginners to understand and modify

5. **Single-page app** - No backend languages needed
   - Client-side only architecture
   - Fast user experience with no page reloads
   - Simple deployment (just static files)

The beauty of this stack is **modern but simple** - you get all the power of current web development without overwhelming complexity!

---

## �📋 Complete Setup Instructions for Your Laptop

### 1. **Prerequisites Installation**

#### Install Node.js (Required)
```bash
# Check if already installed
node --version
npm --version

# If not installed:
# Visit https://nodejs.org and download LTS version (18.0.0 or higher)
# Follow installer instructions for your operating system
```

#### Install Git (Usually pre-installed on Mac/Linux)
```bash
# Check if installed
git --version

# If not installed on Windows:
# Visit https://git-scm.com/downloads
```

#### Install VS Code
```bash
# Download from: https://code.visualstudio.com
# Follow installer for your operating system
```

### 2. **Clone and Setup CapeLaunch Project**

```bash
# Clone your fork of the repository
git clone https://github.com/algarces_microsoft/prompt-to-prototype-challenge.git

# Navigate to project directory
cd prompt-to-prototype-challenge

# Install all dependencies
npm install

# Start development server
npm run dev

# Open browser to: http://localhost:5173
```

### 3. **VS Code Configuration Setup**

#### Create VS Code Settings File
Create `.vscode/settings.json` in your project root:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "files.eol": "\n",
  "editor.wordWrap": "on",
  "editor.minimap.enabled": true,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false
}
```

#### Create Extensions Recommendations File
Create `.vscode/extensions.json` in your project root:

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "dsznajder.es7-react-js-snippets",
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "formulahendry.auto-rename-tag",
    "christian-kohler.bracket-pair-colorizer",
    "ms-vscode.vscode-css-peek",
    "zignd.html-css-class-completion",
    "ms-vscode.live-server",
    "eamodio.gitlens"
  ]
}
```

### 4. **Essential VS Code Extensions to Install**

Open VS Code and install these extensions:

#### Core React Development:
- **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`)
- **Prettier - Code formatter** (`esbenp.prettier-vscode`)
- **ESLint** (`dbaeumer.vscode-eslint`)

#### HTML/CSS Enhancement:
- **Auto Rename Tag** (`formulahendry.auto-rename-tag`)
- **Bracket Pair Colorizer** (`christian-kohler.bracket-pair-colorizer`)
- **CSS Peek** (`ms-vscode.vscode-css-peek`)

#### Git Integration:
- **GitLens** (`eamodio.gitlens`)

#### Install Command (copy/paste in VS Code terminal):
```bash
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension formulahendry.auto-rename-tag
code --install-extension christian-kohler.bracket-pair-colorizer
code --install-extension eamodio.gitlens
```

### 5. **Development Workflow Commands**

#### Daily Development:
```bash
# Start development server (hot reload enabled)
npm run dev

# Build for production testing
npm run build

# Preview production build
npm run preview

# Install new dependencies (if needed)
npm install package-name
```

#### Git Workflow:
```bash
# Check status
git status

# Create feature branch
git checkout -b feature/your-feature-name

# Add changes
git add .

# Commit with message
git commit -m "Description of changes"

# Push to your fork
git push origin feature/your-feature-name

# Switch back to main
git checkout main
```

### 6. **Project Structure Reference**

```
prompt-to-prototype-challenge/
├── src/
│   ├── App.jsx          # Main React component
│   ├── App.css          # All styling
│   ├── main.jsx         # React entry point
│   └── assets/
│       └── CapeLaunch-Logo1.png
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies & scripts
├── vite.config.js       # Vite configuration
├── README.md            # Main documentation
├── PROJECT_DOCUMENTATION.md     # Complete project docs
├── DEVELOPMENT_SESSION_LOG.md   # Development history
├── TECHNICAL_SPECIFICATION.md  # Technical details
└── QUICK_REFERENCE.md           # Developer reference
```

### 7. **Testing Your Setup**

#### Verification Checklist:
- [ ] Node.js version 18+ installed (`node --version`)
- [ ] Project cloned and dependencies installed (`npm install`)
- [ ] Development server starts (`npm run dev`)
- [ ] CapeLaunch opens in browser at `http://localhost:5173`
- [ ] VS Code opens project correctly
- [ ] Extensions installed and working
- [ ] Hot reload works (save a file, see changes instantly)

#### Test Hot Reload:
1. Start `npm run dev`
2. Open `src/App.jsx` in VS Code
3. Change the title text: `CapeLaunch` → `CapeLaunch Test`
4. Save file (Ctrl/Cmd + S)
5. See instant change in browser

### 8. **Mobile Development Testing**

#### Test on Phone/Tablet:
```bash
# Start server accessible on network
npm run dev -- --host

# Find your laptop's IP address:
# Windows: ipconfig
# Mac/Linux: ifconfig

# Access from phone: http://YOUR_IP_ADDRESS:5173
# Example: http://192.168.1.100:5173
```

### 9. **Debugging Setup**

#### VS Code Debug Configuration
Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome against localhost",
      "request": "launch",
      "type": "chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

### 10. **Common Development Commands**

#### Package Management:
```bash
# Check outdated packages
npm outdated

# Update packages
npm update

# Add new dependency
npm install package-name

# Add dev dependency
npm install --save-dev package-name

# Remove package
npm uninstall package-name
```

#### Build & Deploy:
```bash
# Create production build
npm run build

# Test production build locally
npm run preview

# Check bundle size
npm run build && ls -la dist/
```

### 11. **Troubleshooting Common Issues**

#### Port Already in Use:
```bash
# Kill process on port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F

# Mac/Linux:
lsof -ti:5173 | xargs kill -9
```

#### Node Modules Issues:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Git Issues:
```bash
# Reset to last commit
git reset --hard HEAD

# Pull latest changes
git pull origin main
```

### 12. **Learning Resources by Language**

#### **JavaScript (ES6+):**
- **MDN Web Docs - JavaScript**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **JavaScript.info**: https://javascript.info (comprehensive modern JS guide)
- **You Don't Know JS**: https://github.com/getify/You-Dont-Know-JS (deep dive series)

#### **JSX/React:**
- **React.dev**: https://react.dev (official documentation)
- **React Tutorial**: https://react.dev/learn/tutorial-tic-tac-toe
- **React Hooks Guide**: https://react.dev/reference/react

#### **Modern CSS:**
- **CSS Grid Guide**: https://css-tricks.com/snippets/css/complete-guide-grid/
- **Flexbox Guide**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **MDN CSS**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **CSS Variables Guide**: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

#### **API Integration:**
- **Fetch API Guide**: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- **Launch Library API**: https://ll.thespacedevs.com/docs
- **JSON Guide**: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

### 13. **File Structure by Language**

```
Project Languages Breakdown:
├── src/App.jsx          → JavaScript + JSX (React components)
├── src/App.css          → CSS3 with modern features
├── src/main.jsx         → JavaScript + JSX (React entry point)
├── index.html           → HTML5 (SPA template)
├── package.json         → JSON (dependencies & scripts)
├── vite.config.js       → JavaScript (build configuration)
├── *.md files           → Markdown (documentation)
└── .vscode/*.json       → JSON (VS Code configuration)
```

### 14. **Development Best Practices**

#### Code Organization:
- Keep components in `src/App.jsx` for now (MVP approach)
- All styles in `src/App.css`
- Use meaningful commit messages
- Test on mobile regularly

#### Performance Tips:
- Use React DevTools browser extension
- Monitor bundle size with `npm run build`
- Test countdown timer performance
- Check for memory leaks in long sessions

### 15. **Language-Specific Development Tips**

#### **JavaScript/React Debugging:**
```javascript
// Use console.log for debugging API calls
console.log('Launch data:', launches);

// React DevTools in browser (install extension)
// Inspect component state and props

// Debug countdown timer
console.log('Time left:', timeLeft);

// Check for errors in useEffect
useEffect(() => {
  fetchLaunchData().catch(err => console.error('API Error:', err));
}, []);
```

#### **CSS Debugging:**
```css
/* Use browser DevTools to inspect styles */
/* Add temporary borders to debug layout */
.debug {
  border: 2px solid red;
}

/* Check responsive design with DevTools device emulation */
/* Test CSS Grid/Flexbox with Firefox Grid Inspector */
```

#### **API Integration Tips:**
```javascript
// Always handle API errors gracefully
const fetchLaunchData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('API request failed');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch launch data:', error);
    return mockData; // Fallback to mock data
  }
};

// Test API calls in browser Network tab
// Use Thunder Client VS Code extension for API testing
```

### 16. **Performance Optimization by Language**

#### **JavaScript Performance:**
- **Avoid unnecessary re-renders** with proper useEffect dependencies
- **Clean up timers** to prevent memory leaks
- **Use const/let instead of var** for better scope management
- **Minimize API calls** with caching strategies

#### **CSS Performance:**
- **Use CSS transforms** for animations (hardware accelerated)
- **Minimize repaints** with efficient selectors
- **Optimize images** and use appropriate formats
- **Use CSS Grid/Flexbox** instead of float layouts

#### **React Performance:**
- **Use React.memo()** for expensive components (future enhancement)
- **Optimize useState** calls to minimize state updates
- **Profile with React DevTools** Profiler tab

### 17. **Next Steps for Enhancement**

#### Immediate Improvements:
```javascript
// Add these features to App.jsx:
// 1. Auto-refresh API data every 5 minutes
// 2. User preferences for favorite launch types
// 3. Enhanced error handling
// 4. Loading skeleton screens
```

#### File Structure for Scaling:
```
src/
├── components/
│   ├── LaunchCard.jsx
│   ├── CountdownTimer.jsx
│   └── Header.jsx
├── hooks/
│   └── useLaunches.js
├── utils/
│   └── api.js
└── styles/
    └── components/
```

---

## 🚀 Quick Start Summary

1. **Install**: Node.js 18+, Git, VS Code
2. **Clone**: `git clone https://github.com/algarces_microsoft/prompt-to-prototype-challenge.git`
3. **Setup**: `cd prompt-to-prototype-challenge && npm install`
4. **Run**: `npm run dev`
5. **Open**: `http://localhost:5173`
6. **Code**: Open in VS Code, install recommended extensions
7. **Develop**: Make changes, see instant updates!

## 📞 Getting Help

- **React Documentation**: https://react.dev
- **Vite Documentation**: https://vitejs.dev
- **VS Code Tips**: https://code.visualstudio.com/docs
- **Launch Library API**: https://ll.thespacedevs.com/docs
- **Project Documentation**: See `PROJECT_DOCUMENTATION.md` in your project

---

*This setup guide contains everything you need to continue developing CapeLaunch on your own laptop. Happy coding! 🚀*
