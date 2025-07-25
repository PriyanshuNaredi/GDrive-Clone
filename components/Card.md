# Card.tsx

## Purpose
Displays a file's details in a card format, including thumbnail, name, size, owner, and actions. Each card links to the file's URL and provides quick access to file actions.

## Hooks Used
- **None**: This component is stateless and does not use any React hooks.

## Functions
- **Card (component)**: Accepts a `file` object and renders its details, including thumbnail, name, size, creation date, owner, and an action dropdown for file operations.

## Important Imports
- `Thumbnail`: Displays the file's thumbnail or icon.
- `ActionDropdown`: Provides file actions (rename, delete, share, download).
- `FormattedDateTime`: Formats and displays the file's creation date.
- `convertFileSize` from utils: Converts file size to a readable format.
- `Link` from next/link: Makes the card clickable and links to the file URL.

## Props
- `file`: The file object containing metadata such as name, type, extension, size, owner, and URL.

## Usage
Used in file listing pages to visually represent each file and provide quick access to file actions.
