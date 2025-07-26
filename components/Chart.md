# Chart.tsx

This file contains the `Chart` component, a client-side React component for visualizing storage usage in a radial bar chart format. It is used to display the percentage of storage used by the user in a visually appealing way.

## Main Features
- **RadialBarChart**: Uses the `recharts` library to render a radial bar chart showing the percentage of storage used.
- **Dynamic Label**: Displays the percentage of space used and a label inside the chart.
- **Card Layout**: Wraps the chart in a styled card with a header showing the available storage in a human-readable format.

## Hooks and Functions Used
- **calculatePercentage**: Calculates the percentage of storage used based on the input value.
- **convertFileSize**: Converts the used storage value to a human-readable string (e.g., MB, GB).

## Components Used
- **Card, CardContent, CardHeader, CardTitle, CardDescription**: UI components for layout and styling.
- **ChartContainer**: Provides configuration and layout for the chart.

## Props
- `used` (number): The amount of storage used (in bytes).

## Usage
This component is typically used on the dashboard page to give users a quick overview of their storage consumption.

---

# file.action.ts

This file contains server-side actions for managing files in the application, including uploading, renaming, sharing, deleting, and retrieving files, as well as calculating total storage usage.

## Main Functions
- **uploadFile**: Handles file upload to Appwrite storage and creates a corresponding document in the database.
- **renameFile**: Renames a file document in the database.
- **updateFileUsers**: Updates the list of users who have access to a file (for sharing functionality).
- **deleteFile**: Deletes a file document and the associated file from storage.
- **getFiles**: Retrieves files for the current user, with support for filtering, searching, sorting, and limiting results.
- **getTotalSize**: Calculates the total storage used by the user, broken down by file type, and returns usage statistics.

## Helper Functions
- **handelError**: Logs and throws errors with a custom message.
- **createQueries**: Constructs Appwrite database queries based on user, file types, search text, sort order, and limit.

## Hooks and Utilities Used
- **createAdminClient**: Initializes Appwrite client for server-side operations.
- **getCurrentUser**: Retrieves the currently authenticated user.
- **constructFileUrl, getFileType, parseStringify**: Utility functions for file metadata and formatting.
- **revalidatePath**: Triggers Next.js cache revalidation for a given path after mutations.

## Usage
These actions are used throughout the application for file management features, including uploading, renaming, sharing, deleting, and displaying files and storage statistics.

## Error Handling
All actions use `handelError` to log and throw errors, ensuring consistent error reporting and handling.

