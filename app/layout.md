# layout.tsx

## Purpose
Sets up the global layout for the Next.js application, including font configuration, metadata, and global styles. Wraps all pages in a consistent HTML structure.

## Hooks Used
- **None**: This file is a stateless layout component.

## Functions
- **RootLayout**: Main layout component that wraps all children in the HTML and body tags, applies font and global styles.

## Important Imports
- `Poppins` from next/font/google: Loads and configures the Poppins font.
- `localFont` from next/font/local: For custom local fonts.
- `Metadata` from next: Sets up page metadata.
- `globals.css`: Global CSS styles.

## Usage
Used as the root layout for all pages in the Next.js app, ensuring consistent styling and metadata.
