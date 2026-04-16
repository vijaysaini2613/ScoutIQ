# ScoutIQ — Athlete Discovery App

A cross-platform React Native (Expo) app built as part of the ScoutIQ React Native Intern assignment. The app allows scouts to browse athletes, view detailed profiles, and maintain a persistent shortlist.

---

## 🚀 Features

### 1. Athlete Discovery Feed

* Scrollable list using FlatList
* Athlete cards with name, sport, position, age, and computed score
* Filter by sport (Cricket, Football, Basketball)
* Real-time search with 300ms debounce
* Result count display
* Empty state handling

### 2. Athlete Profile Screen

* Detailed stats (speed, stamina, accuracy)
* Custom-built readiness score progress bar
* Add/Remove from shortlist (live state)
* Clean navigation with parameter handling

### 3. Shortlist Screen

* Persistent shortlist using AsyncStorage
* Remove athletes from shortlist
* Displays total count and average score
* Empty state UI

### 4. Navigation

* Bottom Tab Navigation (Discover, Shortlist)
* Stack navigation for Profile screen using Expo Router

---

## 🛠️ Tech Stack

* React Native (Expo)
* TypeScript
* Expo Router (file-based navigation)
* AsyncStorage (data persistence)
* StyleSheet (no UI libraries used as per constraints)

---

## 📦 Project Structure

/app → Navigation (Expo Router)
/src → Business logic & UI
/components → Reusable UI components
/screens → Screen-level components
/context → Global state (Shortlist)
/data → Mock athlete data
/utils → Helper functions

---

## ⚙️ How to Run

1. Clone the repository

```bash
git clone https://github.com/vijaysaini2613/ScoutIQ.git
cd scoutiq
```

2. Install dependencies

```bash
npm install
```

3. Start the app

```bash
npx expo start
```

4. Run on device

* Scan QR using Expo Go (Android/iOS)
* Or run on emulator

---

## 🧠 Key Decisions

* Used Expo Router for clean file-based navigation instead of manual navigation setup
* Centralized shortlist state using Context API for global access
* Implemented debounce manually for search to improve performance
* Derived athlete score dynamically instead of storing it
* Maintained clean separation between routing (/app) and logic (/src)

---

## ⚠️ What’s Incomplete / Trade-offs

* UI is minimal and functional (focused more on clarity than design complexity)
* Swipe-to-delete not implemented (used button instead for simplicity)
* No backend integration (as per assignment constraint)

---

## 🔮 What I’d Improve with More Time

* Add animations and transitions for better UX
* Implement swipe gestures for shortlist removal
* Improve visual design system (typography, spacing scale)
* Add unit tests for core logic (filtering, scoring)
* Introduce image optimization and caching

---

## 🤖 AI Usage

Used AI tools (ChatGPT) for guidance in architecture decisions, debugging, and improving code structure.

---

## 📱 Platforms

Tested on:

* Android (Expo Go)
* iOS (Expo Go)

---

## 👤 Author

Vijay Saini
