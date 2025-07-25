# Search.tsx

## Purpose
Provides a search bar for files, displaying results as the user types and allowing navigation to file details.

## Hooks Used
- **useState**: Manages search query, results, and dropdown open state.
- **useEffect**: Fetches files when the debounced query changes and resets query on search param change.
- **useDebounce**: Debounces the search query to reduce API calls.
- **useRouter**: Navigates to file details or filtered views.
- **usePathname**: Gets the current route for search context.
- **useSearchParams**: Reads query parameters from the URL.

## Functions
- **fetchFiles**: Fetches files matching the search query.
- **handleClickItem**: Handles navigation when a search result is clicked.

## Important Imports
- `Input`: UI component for search input.
- `Thumbnail`, `FormattedDateTime`: Components for displaying file results.
- `getFiles`: Backend action to fetch files.

## Usage
Used in the header to allow users to search for files and quickly access results.
