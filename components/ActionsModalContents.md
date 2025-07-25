# ActionsModalContents.tsx

## Purpose
Provides modal content components for displaying file details and sharing files with other users.

## Hooks Used
- **None**: This file only contains stateless components.

## Functions
- **ImageThumbnail**: Renders a file's thumbnail, name, and creation date.
- **DetailRow**: Displays a label-value pair for file metadata.
- **FileDetails**: Shows detailed information about a file (format, size, owner, last edit).
- **ShareInput**: Allows input of email addresses to share the file with other users.

## Important Imports
- `Thumbnail`, `FormattedDateTime`: Components for file preview and date formatting.
- `convertFileSize`, `formatDateTime`: Utility functions for formatting file size and date.
- `Input`, `Button`: UI components for user input and actions.

## Props
- `file`: The file object containing metadata.
- `onInputChange`, `onRemove` (ShareInput): Functions to manage email input and removal.

## Usage
Used in modals for file actions (details, sharing) triggered from file cards or dropdowns.
