# (root)/page.tsx

This file is the main dashboard page for the root route of the application. It is a React Server Component that displays the user's storage usage, file type summaries, and a list of recently uploaded files.

## Main Features
- **Chart**: Uses the `Chart` component to visualize the percentage of storage used.
- **File Type Summaries**: Shows a summary card for each file type (image, document, video, audio, other) with the total size and latest upload date.
- **Recent Files**: Lists the most recently uploaded files with their details and actions.

## Hooks and Functions Used
- **getFiles**: Fetches the latest files for the user.
- **getTotalSize**: Retrieves the total storage used and breakdown by file type.
- **convertFileSize**: Converts file sizes to a human-readable format.
- **getUsageSummary**: Processes the total space data into a summary for display.

## Components Used
- **Chart**: Displays a radial bar chart of storage usage.
- **FormattedDateTime**: Formats and displays dates.
- **Thumbnail**: Shows a preview or icon for each file.
- **ActionDropdown**: Provides actions (rename, delete, share) for each file.
- **Separator**: UI separator for summary cards.

## Data Flow
1. Fetches files and storage usage in parallel.
2. Renders the storage chart and file type summaries.
3. Displays a list of recent files with actions.

---

# (root)/page.md

This file is a placeholder for the documentation or description of the root dashboard page. You can add details about the dashboard's purpose, features, and usage here.

