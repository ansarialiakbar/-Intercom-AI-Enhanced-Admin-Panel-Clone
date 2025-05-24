##          Intercom AI-Enhanced Admin Panel Clone

## Overview
This project is a clone of Intercom's AI-enhanced admin panel interface, built as part of an internship assignment for Educase India. It replicates the UI/UX of Intercom's chat system, including a main chat window, sidebar, notes section, and action dropdowns, with a focus on responsiveness, animations, and modern web development practices. The project is developed using React, Vite, Tailwind CSS, and additional libraries for animations and notifications.

## Features

**Real-Time Chat**: Send messages and receive simulated AI responses with a typing indicator.

**Responsive Design**: Fully responsive layout for both desktop and mobile devices, with a collapsible sidebar on mobile.

**Dark Mode**: Toggle between light and dark themes for better user experience.

**Animations**: Smooth transitions for messages, dropdowns, and sidebar using Framer Motion.

**Notifications**: Toast notifications for AI responses and waiting time alerts using react-toastify.

**File Uploads**: Upload files (e.g., proof of purchase) directly in the chat.

**Keyboard Shortcuts**: Quick access to features like toggling the sidebar (Ctrl+B) and theme (Ctrl+T).

**Performance Optimization**: Components are memoized to prevent unnecessary re-renders.

## Project Structure
intercom-clone/
├── public/
│   └── assets/
│       └── (optional static assets)
├── src/
│   ├── assets/
│   │   └── RIMG.jpg              # Image for sidebar assignee
│   ├── components/
│   │   ├── ChatHeader.jsx        # Header with user info and action buttons
│   │   ├── ChatMessage.jsx       # Individual chat message component
│   │   ├── Sidebar.jsx           # Right sidebar with details
│   │   ├── NoteSection.jsx       # Notes and summary section
│   │   ├── ActionDropdown.jsx    # Dropdown for actions
│   │   └── ChatFooter.jsx        # Message input and footer icons
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # Custom CSS for scrollbar styling
│   ├── index.css                 # Tailwind CSS directives
│   ├── main.jsx                  # Entry point for React
│   └── tailwind.config.js        # Tailwind CSS configuration
├── package.json                  # Project dependencies and scripts
├── vite.config.js                # Vite configuration
└── README.md                     # Project documentation

## Prerequisites

Node.js: Version 16 or higher.

npm: Node package manager (comes with Node.js).

## Installation and Setup

**Clone the Repository**:
```
git clone git remote add origin https://github.com/ansarialiakbar/-Intercom-AI-Enhanced-Admin-Panel-Clone.git

cd intercom-clone
```


**Install Dependencies**:
```
npm install
```


**Set Up Tailwind CSS**:Ensure tailwind.config.js and index.css are configured as shown in the project structure. Tailwind CSS is already set up in this project.

**Run the Development Server**:

npm run dev

Open http://localhost:5173 in your browser to view the app.

**Build for Production**:
```
npm run build
```

The production-ready files will be generated in the dist folder.


## Dependencies

The project uses the following dependencies:

react and react-dom: Core libraries for building the UI.

vite: Build tool and development server.

tailwindcss, postcss, autoprefixer: For styling with Tailwind CSS.

react-icons: For icons in buttons and UI elements.

framer-motion: For animations and transitions.

react-toastify: For toast notifications.

Install them using:

npm install react react-dom vite tailwindcss postcss autoprefixer react-icons framer-motion react-toastify


## Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes.

## License

This project is licensed under the MIT License.
Contact

