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

Timeline interactions are written to browser local storage during app use. The app clears this storage on initialization, so reload starts with fresh timeline and chart state.

## Browser Reloads

Reloading the browser on any page (including a user details page) keeps you on the same route. Timeline interaction storage is reset on app initialization, so timeline and chart data both start fresh after reload.

## Timeline Behavior

- Filter timeline by interaction type: All, Call, Text, Video
- New check-ins are inserted at the top immediately so the latest interaction is visible first

## React Router

Uses React Router for navigation between pages. Includes routes for home, user details, timeline, and stats with automatic scroll-to-top.
