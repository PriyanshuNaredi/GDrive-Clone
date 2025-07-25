# index.ts

## Purpose
Initializes and exports Appwrite client instances and helper functions for interacting with Appwrite services (database, storage, account, etc.).

## Hooks Used
- **None**: This file only contains stateless helper functions and client initializations.

## Functions
- **createAdminClient**: Initializes an Appwrite client with admin privileges for server-side actions.
- **createSessionClient**: Initializes an Appwrite client for session-based user actions.

## Important Imports
- `appWriteConfig`: Configuration constants for Appwrite endpoints and IDs.
- `Client`, `Databases`, `Storage`, `Account`: Appwrite SDK classes for service access.

## Usage
Used by backend actions and server functions to interact with Appwrite services for file and user management.
