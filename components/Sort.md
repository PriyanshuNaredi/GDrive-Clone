# Sort.tsx

## Purpose
Provides a dropdown for sorting files by different criteria (e.g., date, name, size).

## Hooks Used
- **useRouter**: Navigates to the sorted view when a sort option is selected.
- **usePathname**: Gets the current route for sorting context.

## Functions
- **handleSort**: Handles sort option changes and updates the route with the selected sort parameter.

## Important Imports
- `Select`, `SelectContent`, `SelectItem`, `SelectTrigger`, `SelectValue`: UI components for the dropdown menu.
- `sortTypes`: List of available sort options.

## Usage
Used in file listing pages to allow users to sort files by different criteria.
