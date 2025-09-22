# Lab1 React IronHack

A modern React application built with Vite and React Router DOM for client-side routing.

![Application Screenshot](https://github.com/user-attachments/assets/6aec5d3e-656c-40c9-a913-7ba62a9e9382)

## Features

- ⚡ **Vite** - Fast development and build tooling
- ⚛️ **React 19** - Modern React with the latest features
- 🛣️ **React Router DOM** - Client-side routing for navigation
- 🎨 **Responsive Design** - Mobile-friendly layout
- 🔧 **ESLint** - Code quality and consistency

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── Navigation.jsx  # Navigation bar with routing
│   └── Navigation.css
├── pages/             # Page components
│   ├── Home.jsx       # Home page
│   ├── About.jsx      # About page
│   ├── Contact.jsx    # Contact page
│   └── Page.css       # Shared page styles
├── App.jsx            # Main app component with routing
├── App.css
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FelixRodriguezG/Lab1-React-IronHack.git
   cd Lab1-React-IronHack
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Routing

The application includes three main routes:

- `/` - Home page with project overview
- `/about` - About page with learning objectives
- `/contact` - Contact page with form and information

Navigation is handled by React Router DOM with a responsive navigation bar that highlights the current active route.

## Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **CSS3** - Styling and responsive design
- **ESLint** - Code linting and quality assurance

## Development

This project was created as part of Lab1 for IronHack to demonstrate:

- Setting up a React project with Vite
- Implementing client-side routing with React Router DOM
- Creating reusable components
- Modern React development practices
- Responsive web design

## Browser Support

This application supports all modern browsers that support ES6+ features.
