# KeenKeeper

A personal relationship management app to track and nurture meaningful connections with friends.

## Technologies Used

- **React** - Frontend framework for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Router** - Client-side routing for navigation
- **Recharts** - Chart library for data visualization
- **Axios** - HTTP client for API requests

## Key Features

- **Friend Management** - View and organize your friends with status tracking
- **Timeline Tracking** - Record interactions and check-ins with friends
- **Statistics Dashboard** - Visual charts showing relationship insights

## Error Page

Custom 404 error page that handles invalid routes. Shows a friendly message and redirects users back to home.

## Local Storage

Timeline interactions are saved in browser's local storage. Data persists between sessions but clears when browser storage is manually cleared.

## Browser Reloads

Browser reload clears all timeline data. Local storage is cleared on app initialization for fresh sessions.

## React Router

Uses React Router for navigation between pages. Includes routes for home, user details, timeline, and stats with automatic scroll-to-top.
