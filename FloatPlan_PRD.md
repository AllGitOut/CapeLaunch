# FloatPlan – Product Requirements Document (PRD)
*Optimized for 1-Hour Vibe Coding MVP*

## 🎯 Purpose Statement
**Build a simple web app that shows water sports enthusiasts in Brevard County the best days for their sport over the next 5 days.**

**Core User Action**: Select a sport → See which days are recommended → Get actionable advice.

---

## 🚀 MVP Scope (1-Hour Build)
**Single Goal**: Answer "When should I go out this week?" for surfers, wing-foilers, and rowers.

### Core Features (Must-Have)
1. **Sport Selector** - Simple dropdown/buttons (Surfing, Wing-foiling, Rowing)
2. **5-Day Weather Cards** - Show date, conditions, and sport-specific recommendation
3. **Smart Recommendations** - Color-coded days (🟢 Great, 🟡 OK, 🔴 Skip) with simple logic
4. **Quick Advice** - 1-2 sentence explanation per day

### Technical Approach
- **No API calls initially** - Use mock weather data to prove the concept
- **Pure client-side** - React + Vite, no backend
- **Responsive design** - Works on mobile (where users check conditions)
- **No external dependencies** - Native fetch, CSS, and React state only

---

## 👤 User Flows

### Primary Flow (Core MVP)
1. User lands on app
2. Selects sport from 3 options
3. Sees 5 weather cards with recommendations
4. Clicks on a day for more details (stretch)

### Sample User Stories (Refined)
- **Surfer**: "Show me which days have good waves (2-4ft) and offshore winds"
- **Wing-foiler**: "Tell me when wind is 15-25mph and consistent direction" 
- **Rower**: "Highlight calm days with minimal wind and chop"

---

## 🏗️ Implementation Plan

### Hour 1: Core MVP
1. **Setup** (5 min) - Vite React app with basic routing
2. **UI Layout** (20 min) - Sport selector + 5-day grid layout
3. **Mock Data** (15 min) - Hardcoded weather conditions for 5 days
4. **Logic** (15 min) - Simple scoring algorithm per sport
5. **Styling** (5 min) - Clean, mobile-first CSS

### Mock Data Structure
```javascript
const mockWeather = [
  {
    date: "Mon 8/28",
    wind: { speed: 12, direction: "E" },
    waves: { height: 3, period: 8 },
    temp: { air: 85, water: 82 }
  },
  // ... 4 more days
]
```

### Sport Logic (Simple Rules)
- **Surfing**: Good = waves 4-6ft + offshore winds < 15mph
- **Wing-foiling**: Good = winds 15-25mph + consistent direction
- **Rowing**: Good = winds < 8mph + waves < 1ft

---

## 🎨 UI Mockup (Text-Based)

```
FloatPlan 🌊

Select your sport: [Surfing] [Wing-foiling] [Rowing]

📅 This Week for Surfing:

MON 8/28    🟢 GREAT     3ft waves, 8mph E wind
TUE 8/29    🟡 OK        2ft waves, 15mph SE wind  
WED 8/30    🔴 SKIP      1ft waves, 20mph onshore
THU 8/31    🟢 GREAT     4ft waves, 5mph offshore
FRI 9/1     🟡 OK        3ft waves, 18mph variable

Best day this week: Thursday! 🏄‍♂️
```

---

## ✅ Success Criteria (MVP)

### Functional Requirements
- [ ] App loads without errors in Chrome/Safari mobile
- [ ] All 3 sports show different recommendations 
- [ ] Color coding is consistent and intuitive
- [ ] Weather data displays correctly formatted
- [ ] Responsive design works on phone screens

### Quality Bar
- **Performance**: Loads in < 2 seconds
- **Usability**: New user understands purpose in < 10 seconds
- **Visual**: Clean, not cluttered, easy to scan

---

## 🚧 Technical Constraints

### MVP Limitations (Acceptable)
- **No real weather API** - Mock data is fine for proof of concept
- **No user persistence** - Settings reset on refresh
- **Basic styling** - Focus on functionality over polish
- **No error handling** - Happy path only for MVP

### Browser Support
- Modern mobile browsers (iOS Safari, Chrome Android)
- Desktop secondary (Chrome, Firefox, Safari)

---

## 🎯 Next Steps (Post-MVP)

### Immediate Improvements (Hour 2-3)
1. **Real weather API** - Integrate OpenWeather or similar
2. **Location detection** - Auto-detect or let user set location
3. **Better recommendations** - Refine sport-specific algorithms

### Future Enhancements
- **7-day forecast** - Extend planning horizon
- **Spot-specific data** - Multiple beaches/launch sites
- **User preferences** - Save favorite sport, skill level
- **Share feature** - Send recommendations to friends

---

## 📊 Analytics (Simple)

### Key Questions to Answer
1. Which sport is most popular? (track selector clicks)
2. Do users return? (check if same browser visits multiple times)
3. What days get the most attention? (track day card clicks)

### Implementation
- Simple event tracking with `console.log` for MVP
- Google Analytics for production version

---

*This PRD is designed for rapid prototyping. Start coding immediately after reading this document.*
