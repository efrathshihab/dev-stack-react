# 🚀 Dev Stack Builder

Dev Stack Builder is a responsive React application where users can explore popular development technologies and create their own personalized technology stack.

The project was developed as part of Programming Hero Assignment 05 and focuses on practicing core React concepts such as Components, Props, State, `useState`, `useEffect`, Event Handling, Conditional Rendering, Array Methods, and JSON Data Handling.

---

## 🌐 Live Website

### Vercel
https://dev-stack-react.vercel.app/

### GitHub Pages
https://efrathshihab.github.io/dev-stack-react/

---

## 💻 GitHub Repository

https://github.com/efrathshihab/dev-stack-react

---

## ✨ Features

- Responsive Navbar with mobile hamburger menu
- Modern responsive Hero section
- Technology data loaded from a JSON file
- Technology cards generated dynamically using `.map()`
- Responsive technology grid
- Add technologies to a personal stack
- Prevent duplicate technologies from being added
- Disable the button after a technology is selected
- Display selected technology count
- Remove individual technologies from the stack
- Remove all selected technologies at once
- Conditional empty-state display
- Responsive layout for desktop, tablet, and mobile
- Deployed on both Vercel and GitHub Pages

---

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- JSON

---

## ⚛️ React Concepts Used

### Components

The website is divided into reusable React components such as:

- `Nav`
- `Banner`
- `Technologies`
- `TechnologyCard`
- `YourStack`
- `StackItem`
- `Footer`

### Props

Props are used to pass technology information and selected stack data between components.

### State

React state is used to manage:

- Technology data
- Selected technologies
- Mobile navigation menu

### useState

`useState` is used to store and update dynamic data such as the selected technologies and mobile menu state.

### useEffect

`useEffect` is used to load technology information from the JSON file when the Technology component loads.

### Event Handling

Event handlers are used for:

- Opening and closing the mobile menu
- Adding a technology
- Removing a technology
- Removing all technologies

### Conditional Rendering

Conditional rendering is used to display different UI states, such as:

- Empty stack message
- Selected technology list
- Added button state
- Mobile navigation menu

### Array Methods

The project uses JavaScript array methods including:

- `.map()` for rendering technology cards
- `.filter()` for removing technologies
- `.some()` / `.find()` for checking duplicate technologies

---

## 📂 Project Structure

```text
dev-stack-react/
│
├── public/
│   └── data.json
│
├── src/
│   ├── assets/
│   │   ├── banner-stack.png
│   │   └── logo-text.png
│   │
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Banner.tsx
│   │   ├── Footer.tsx
│   │   │
│   │   └── technologies/
│   │       ├── Technologies.tsx
│   │       ├── TechnologyCard.tsx
│   │       ├── YourStack.tsx
│   │       └── StackItem.tsx
│   │
│   ├── types/
│   │   └── technology.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.ts
└── README.md