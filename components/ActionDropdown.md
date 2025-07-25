# ActionDropdown.tsx

## Purpose
Provides a dropdown menu for file actions (rename, delete, share, download) and manages related modals for user interaction.

## Hooks Used
- **useState**: Manages modal open/close state, dropdown state, selected action, file name, loading state, and email list for sharing.
- **usePathname**: Gets the current route for context when performing actions.

## Functions
- **closeAllModals**: Closes all modals and resets the selected action.
- **deleteFile, renameFile, updateFileUsers** (imported): Perform file operations (delete, rename, share) via backend actions.
- **constructDownloadUrl** (imported): Constructs the download URL for a file.

## Important Imports
- UI components: `Dialog`, `DropdownMenu`, `Input`, `Button` for modal and dropdown UI.
- `FileDetails`, `ShareInput`: Modal content components for file details and sharing.
- `actionsDropdownItems`: List of available actions for the dropdown.

## Props
- `file`: The file object containing metadata and used for all actions.

## Usage
Used in file cards to provide quick access to file actions and manage user interactions for file operations.
