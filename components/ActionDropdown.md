# ActionDropdown.tsx

This file contains the `ActionDropdown` component, which provides a dropdown menu for file actions such as renaming, deleting, and sharing files. It is used in the file list and recent files sections to allow users to manage their files directly from the UI.

## Main Features
- **Dropdown Menu**: Displays a menu with actions (rename, delete, share) for each file.
- **Action Handlers**: Integrates with file actions (from `file.action.ts`) to perform operations like renaming or deleting files.
- **Modal Integration**: Opens modals for actions that require user input (e.g., renaming a file or sharing with users).
- **UI Feedback**: Provides feedback to the user after actions are performed (e.g., success or error messages).

## Props
- `file` (Models.Document): The file object for which actions are available.

## Hooks and Functions Used
- **useToast**: Displays toast notifications for action results.
- **useState, useCallback**: Manages modal state and action handlers.

## Usage
Used in file lists and recent files to provide quick access to file management actions.

---

# ActionsModalContents.tsx

This file contains the `ActionsModalContents` component, which renders the contents of modals for file actions such as renaming or sharing a file. It is used within modals triggered by the `ActionDropdown` component.

## Main Features
- **Dynamic Content**: Renders different forms or content based on the action (rename, share, etc.).
- **Form Handling**: Handles form submission for renaming or sharing files.
- **Validation**: Validates user input before performing actions.

## Props
- `action` (string): The action type (e.g., 'rename', 'share').
- `file` (Models.Document): The file being acted upon.
- `onClose` (function): Callback to close the modal.

## Hooks and Functions Used
- **useState, useCallback**: Manages form state and submission.
- **File Actions**: Calls functions from `file.action.ts` to perform the requested action.

## Usage
Used inside modals opened from the `ActionDropdown` for file management actions.

