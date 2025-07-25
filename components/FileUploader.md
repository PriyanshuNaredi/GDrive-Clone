# FileUploader.tsx

## Purpose
Provides a drag-and-drop interface for uploading files. Handles file size validation, triggers uploads, and displays notifications.

## Hooks Used
- **useState**: Manages the list of files being uploaded.
- **useCallback**: Memoizes the file drop handler for performance.
- **useDropzone**: Handles drag-and-drop file selection and triggers `onDrop`.
- **useToast**: Custom hook for showing toast notifications when upload fails or succeeds.
- **usePathname**: Gets the current route for upload context.

## Functions
- **onDrop**: Handles dropped files, validates size, triggers upload, and shows notifications.
- **uploadFile** (imported): Uploads files to the backend.

## Important Imports
- `MAX_FILE_SIZE` from constants: Used for file size validation.
- `Thumbnail`, `Button`: UI components for file preview and upload button.
- `convertFileToUrl`, `getFileType`, `cn`: Utility functions for file handling and styling.

## Props
- `ownerId`: ID of the file owner.
- `accountId`: Account ID for upload context.
- `className`: Optional CSS class for styling.

## Usage
Used in the header and navigation to allow users to upload files to their drive.
