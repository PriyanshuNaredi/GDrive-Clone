# Thumbnail.tsx

## Purpose
Displays a thumbnail image for a file. If the file is an image (except SVG), it shows the actual image; otherwise, it displays an icon representing the file type and extension.

## Hooks Used
- **None**: This component is stateless and does not use any React hooks.

## Functions
- **Thumbnail (component)**: Accepts `type`, `extension`, `url`, `imageClassName`, and `className` as props. Determines if the file is an image and renders the appropriate thumbnail or icon.

## Important Imports
- `Image` from `next/image`: For optimized image rendering.
- `cn` from `@/lib/utils`: Utility for conditional class names.
- `getFileIcon` from `@/lib/utils`: Returns the correct icon for a file type/extension.

## Props
- `type`: File type (e.g., image, document).
- `extension`: File extension (e.g., jpg, pdf).
- `url`: Optional URL for the file/image.
- `imageClassName`, `className`: Optional CSS classes for styling.

## Usage
Used in file listing and card components to visually represent files in the UI.
