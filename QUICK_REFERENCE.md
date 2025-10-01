# CapeLaunch - Quick Reference

## 🚀 Essential Commands

```bash
# Start development server
npm run dev

# Build for production  
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install
```

## 📁 Key Files

- **`src/App.jsx`** - Main React component with all functionality
- **`src/App.css`** - Complete styling system
- **`src/assets/CapeLaunch-Logo1.png`** - Brand logo (160px × 160px)
- **`index.html`** - HTML template
- **`package.json`** - Dependencies and scripts

## 🌐 API Details

- **Endpoint**: https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=20&offset=0
- **Type**: Public API, no authentication required
- **Rate Limits**: Standard rate limiting applies
- **Filtering**: Client-side filtering for Florida launches only

## 🎨 Brand Colors

```css
--brand-orange: #f77f00;     /* Primary accent color */
--brand-blue: #0E182A;       /* Logo blue for info blocks */
--status-scheduled: #4CAF50; /* Green for scheduled launches */
--status-delayed: #FF9800;   /* Yellow for delayed launches */
--status-completed: #f44336; /* Red for completed launches */
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

## 🔧 Component Structure

```
App
├── Header (Logo + Title)
├── LaunchGrid
│   └── LaunchCard (1-8 cards)
│       ├── CountdownTimer
│       ├── Mission Info
│       └── Expandable Description
└── Loading/Error States
```

## 📊 Performance Targets

- **Bundle Size**: < 500KB compressed
- **Initial Load**: < 2 seconds
- **Countdown Updates**: 60fps smooth
- **Memory Usage**: < 50MB heap

## 🎯 Key Features Implemented

✅ Live countdown timers (1-second updates)  
✅ Real Launch Library API integration  
✅ Florida-only launch filtering  
✅ Responsive design (mobile + desktop)  
✅ Glass morphism cosmic theme  
✅ Special indicators (nighttime 🌙, sonic boom 💥)  
✅ Expandable launch descriptions  
✅ Brand-consistent color scheme  
✅ Error handling with mock data fallback  

## 🌟 Special Indicators

- 🌙 **Nighttime Launch** - Launches between 6 PM and 6 AM
- 💥 **Sonic Boom** - Falcon Heavy and other powerful rockets
- 🟢 **Go for Launch** - Scheduled status
- 🟡 **Hold/Delay** - Delayed status  
- 🔴 **Completed** - Past launches

## 📚 Documentation Files

- **`PROJECT_DOCUMENTATION.md`** - Complete project overview
- **`DEVELOPMENT_SESSION_LOG.md`** - Development process history
- **`TECHNICAL_SPECIFICATION.md`** - Technical implementation details
- **`README.md`** - Main project documentation

## 🔍 Troubleshooting

### Common Issues
1. **API not loading**: Check network connection, API may be temporarily down
2. **Timers not updating**: Check for JavaScript errors in console
3. **Mobile layout broken**: Clear browser cache and test responsive breakpoints
4. **Logo not displaying**: Verify asset path and image file exists

### Debug Commands
```bash
# Check for errors
npm run dev  # Look for console errors

# Verify build
npm run build && npm run preview

# Check dependencies
npm list
```

## 🚀 Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview` 
- [ ] Verify all images load correctly
- [ ] Test responsive design on multiple devices
- [ ] Check countdown timers are accurate
- [ ] Confirm API integration working
- [ ] Validate all launch cards display properly

## ⚡ Quick Development Tips

1. **Hot Reload**: Save files to see instant changes
2. **Mobile Testing**: Use browser dev tools device emulation
3. **API Testing**: Check network tab for API response details
4. **Color Matching**: Use browser dev tools color picker
5. **Performance**: Use Lighthouse for performance auditing

---

*This is a quick reference for the CapeLaunch project. For complete details, see the full documentation files.*
