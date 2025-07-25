# utils.ts

## Purpose
Provides utility functions for class name merging, file size conversion, file type detection, percentage calculation, and object parsing/stringifying.

## Hooks Used
- **None**: This file only contains stateless utility functions.

## Functions
- **cn**: Merges Tailwind and custom class names using `clsx` and `twMerge`.
- **parseStringify**: Safely parses and stringifies unknown values.
- **convertFileToUrl**: Converts a File object to a URL for preview.
- **convertFileSize**: Converts file size in bytes to a human-readable string (Bytes, KB, MB, GB).
- **calculatePercentage**: Calculates the percentage of a file size relative to a 2GB limit.
- **getFileType**: Determines the file type and extension from a filename.

## Important Imports
- `clsx`, `twMerge`: Used for class name merging.

## Usage
Used throughout the app for file handling, formatting, and UI class management.
