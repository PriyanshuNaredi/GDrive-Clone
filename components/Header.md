# Header.tsx

## Purpose
Renders the top header for authenticated pages, including a search bar, file uploader, and sign-out button.

## Hooks Used
- **None**: This component is stateless and does not use any React hooks.

## Functions
- **Header (component)**: Accepts `userId` and `accountId` props, renders search, file upload, and sign-out functionality.
- **signOutUser** (imported): Handles user sign-out when the button is clicked.

## Important Imports
- `Search`: Search bar component for files.
- `FileUploader`: Component for uploading files.
- `Button`: UI button for sign-out.
- `Image`: Displays the logout icon.

## Props
- `userId`: The user's unique ID.
- `accountId`: The user's account ID.

## Usage
Used in the main layout to provide navigation, file upload, and sign-out actions for authenticated users.
