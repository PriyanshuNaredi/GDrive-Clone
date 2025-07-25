# user.actions.ts

## Purpose
Handles all user-related backend actions, including user registration, authentication, OTP verification, and user data retrieval.

## Hooks Used
- **None**: This file only contains server-side functions.

## Functions
- **getUserByEmail**: Fetches a user document from the database by email.
- **sendEmailOTP**: Sends an OTP to the user's email for authentication.
- **verifySecret**: Verifies the OTP and creates a session for the user.
- **createAccount**: Registers a new user in the database and Appwrite.
- **signInUser**: Authenticates a user and creates a session.
- **getCurrentUser**: Retrieves the currently authenticated user from cookies/session.
- **handelError**: Handles and logs errors for user actions.

## Important Imports
- `createAdminClient`, `createSessionClient`: Initializes Appwrite clients for server actions.
- `appWriteConfig`: Configuration for Appwrite endpoints and IDs.
- `Query`, `ID`: Appwrite SDK utilities.
- `parseStringify`: Utility for object parsing/stringifying.
- `cookies`: Next.js cookies API for session management.
- `avatarPlaceholderUrl`: Default avatar image if none is provided.
- `redirect`: Next.js redirect utility.

## Usage
Used by authentication components and pages to perform user registration, login, OTP verification, and user data retrieval.
