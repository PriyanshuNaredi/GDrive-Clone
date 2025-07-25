# FormattedDateTime.tsx

## Purpose
Displays a formatted date and time string using utility functions for formatting and styling.

## Hooks Used
- **None**: This component is stateless and does not use any React hooks.

## Functions
- **FormattedDateTime (component)**: Accepts a `date` string and optional `className`, formats the date using `formatDateTime`, and renders it with styling.

## Important Imports
- `cn` from utils: Utility for conditional class names.
- `formatDateTime` from utils: Formats the date string for display.

## Props
- `date`: The date string to format and display.
- `className`: Optional CSS class for styling.

## Usage
Used in file cards and modal components to display formatted creation or update dates.
