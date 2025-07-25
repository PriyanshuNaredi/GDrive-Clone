# MobileNavigation.tsx

## Purpose
Provides a mobile-friendly navigation header, including user info, navigation links, file upload, and logout actions.

## Hooks Used
- **useState**: Manages the open/close state of the navigation sheet.
- **usePathname**: Gets the current route for navigation context.

## Functions
- **MobileNavigation (component)**: Accepts user props and renders navigation, file upload, and logout functionality.
- **signOutUser** (imported): Handles user sign-out when the button is clicked.

## Important Imports
- `Sheet`, `SheetContent`, `SheetTrigger`, `SheetTitle`: UI components for mobile navigation drawer.
- `FileUploader`: Component for uploading files.
- `Button`: UI button for logout.
- `Image`: Displays logo and icons.
- `navItems`: List of navigation items.

## Props
- `$id`: User's unique ID.
- `accountId`: User's account ID.
- `fullName`: User's full name.
- `avatar`: User's avatar URL.
- `email`: User's email address.

## Usage
Used in the main layout for mobile devices to provide navigation, file upload, and logout actions for authenticated users.
