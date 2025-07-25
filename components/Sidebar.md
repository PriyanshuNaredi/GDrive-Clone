# Sidebar.tsx

## Purpose
Renders the sidebar navigation for authenticated users, displaying navigation links and user info.

## Hooks Used
- **usePathname**: Gets the current route to highlight the active navigation item.

## Functions
- **Sidebar (component)**: Accepts user props and renders navigation links and user info.

## Important Imports
- `Link`: For navigation between pages.
- `Image`: Displays logos and user avatar.
- `navItems`: List of navigation items.
- `avatarPlaceholderUrl`: Default avatar image if none is provided.
- `cn`: Utility for conditional class names.

## Props
- `fullName`: User's full name.
- `avatar`: User's avatar URL.
- `email`: User's email address.

## Usage
Used in the main layout to provide navigation and user info for authenticated users.
