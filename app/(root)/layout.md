# layout.tsx

## Purpose
Defines the main layout for authenticated pages, including sidebar, header, mobile navigation, and notification toaster. Checks if a user is logged in and redirects to the sign-in page if not.

## Hooks Used
- **None (async server component)**: Uses async/await for user authentication check.

## Functions
- **Layout**: Main layout component that renders sidebar, header, mobile navigation, and children content. Redirects to sign-in if user is not authenticated.
- **getCurrentUser** (imported): Fetches the current user for authentication.
- **redirect** (imported): Redirects to the sign-in page if not authenticated.

## Important Imports
- `Sidebar`, `MobileNavigation`, `Header`: UI components for navigation and user info.
- `Toaster`: Notification component for toast messages.

## Usage
Used as the main layout for authenticated pages, ensuring navigation, user info, and notifications are consistently available.
