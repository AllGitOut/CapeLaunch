# CapeLaunch – Product Requirements Document (PRD)
*Optimized for Vibe Coding: One-Hour Web MVP*

## 1. Purpose & Goal
**One-sentence objective:** Build a simple web dashboard showing upcoming Cape Canaveral rocket launches with basic details and countdown timers.

**Target user:** Space enthusiasts who want quick access to launch schedules without navigating complex NASA websites.

## 2. Core MVP Features (1-Hour Scope)
### Primary User Action: View Next Launch
- **Launch List Display**: Show 3-5 upcoming launches in a clean card layout
- **Essential Info**: Mission name, date/time, rocket type, launch pad
- **Live Countdown**: Real-time countdown to next launch (hours:minutes:seconds)
- **Status Indicators**: Simple color coding (Scheduled/Delayed/Completed)

### Data Strategy (Client-Side Only)
- Use **mock data** initially (hardcoded array of launches)
- Structure for easy API swap later
- No backend required for MVP

## 3. Simple User Flow
1. **Landing Page**: User sees hero section with "Next Launch" prominent
2. **Launch Cards**: Scrollable list of upcoming launches below
3. **Countdown Focus**: Largest launch shows live countdown timer
4. **One-Click Details**: Click card to expand mission details inline

## 4. Technical Constraints (Vibe Coding Optimized)
- **React + Vite** single-page app
- **No external dependencies** except React (use native fetch if API needed)
- **Responsive design** with CSS Grid/Flexbox
- **Local state only** (useState for countdown, card expansion)
- **Buildable in <60 minutes** with `npm run dev` working

## 5. Out of Scope (Post-MVP)
- SMS notifications
- User accounts
- Real API integration
- Calendar integration
- Map views
- Backend services

## 6. Success Criteria
- **Functional**: App loads, shows launches, countdown updates every second
- **Clean**: No console errors, responsive on mobile
- **Focused**: One clear user action (view launch schedule)
- **Extensible**: Easy to add API later, clean component structure

## 7. Development Checklist
- [ ] Create launch data mock (5-10 launches)
- [ ] Build LaunchCard component
- [ ] Implement countdown timer hook
- [ ] Style with simple CSS (cards, colors, typography)
- [ ] Test responsive layout
- [ ] Add loading states for better UX

## 8. Next Steps (Post-MVP)
1. Integrate real launch API (SpaceX API or Launch Library)
2. Add notification system
3. Implement launch filtering/search
4. Add mission detail pages
