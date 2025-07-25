# AuthForm.tsx

## Purpose
Renders the authentication form for both sign-in and sign-up, handling form validation, submission, and OTP modal display.

## Hooks Used
- **useState**: Manages loading state, error messages, and account ID.
- **useForm** (from react-hook-form): Handles form state, validation, and submission.

## Functions
- **authFormSchema**: Returns a Zod schema for form validation based on form type.
- **createAccount, signInUser** (imported): Handle user registration and login.

## Important Imports
- `Button`, `Form`, `Input`: UI components for form controls.
- `OtpModal`: Displays OTP modal for verification.
- `zod`, `zodResolver`: Used for schema-based validation.

## Props
- `type`: Specifies whether the form is for sign-in or sign-up.

## Usage
Used in authentication pages to allow users to sign up or sign in, with validation and OTP verification.
