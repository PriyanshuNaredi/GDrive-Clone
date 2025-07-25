# file.action.ts

## Purpose
Handles all file-related backend actions, including uploading, deleting, renaming, sharing, and fetching files from the database and storage.

## Hooks Used
- **None**: This file only contains server-side functions.

## Functions
- **uploadFile**: Uploads a file to Appwrite storage and creates a database document with metadata.
- **deleteFile**: Deletes a file from storage and removes its document from the database.
- **renameFile**: Renames a file and updates its document in the database.
- **updateFileUsers**: Updates the list of users who have access to a file.
- **getFiles**: Fetches files from the database based on type, search query, and sort order.
- **handelError**: Handles and logs errors for file actions.

## Important Imports
- `createAdminClient`: Initializes Appwrite client for server actions.
- `appWriteConfig`: Configuration for Appwrite endpoints and IDs.
- `InputFile`, `ID`, `Models`, `Query`: Appwrite SDK utilities.
- `constructFileUrl`, `getFileType`, `parseStringify`: Utility functions for file handling.
- `revalidatePath`: Revalidates Next.js cache after file changes.

## Usage
Used by frontend components and pages to perform file operations such as upload, delete, rename, share, and fetch files.
