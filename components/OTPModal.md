# OTPModal.tsx

## Purpose
Displays a modal for OTP (One-Time Password) verification during authentication, allowing users to enter and verify the OTP sent to their email.

## Hooks Used
- **useState**: Manages modal open state, OTP input, loading state.
- **useRouter**: Navigates the user after successful OTP verification.

## Functions
- **handelSubmit**: Handles OTP submission and verification, navigates on success.
- **handelResendOTP**: Handles resending the OTP to the user's email.
- **sendEmailOTP, verifySecret** (imported): Backend actions for sending and verifying OTP.

## Important Imports
- `AlertDialog`, `InputOTP`, `Button`: UI components for modal and OTP input.
- `Image`: Displays icons in the modal.

## Props
- `accountId`: The user's account ID for verification.
- `email`: The user's email address for OTP delivery.

## Usage
Used in authentication flows to verify user identity via OTP before granting access.
