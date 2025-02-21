# Expo Linking API Inconsistent Deep Link Handling on Android

This repository demonstrates a bug and its solution related to inconsistent deep link handling using the Expo `Linking` API on Android.  The issue stems from unreliability of `Linking.addEventListener` when the app is launched from a notification or is already in the background. 

## Bug Description
The `Linking.addEventListener` method doesn't always fire when a deep link is opened, especially on Android, if the app is already running in the background or is launched from a notification. This leads to the application failing to respond to deep links which are essential to the app's functionality.

## Solution
The proposed solution involves two strategies:

1.  **Initial URL Check:** On app startup, use `Linking.getInitialURLAsync()` to check if the app was launched via a deep link. This is crucial in cases where the `Linking.addEventListener` fails to trigger. 
2.  **Foreground Service (for more reliability):** For more robust handling, especially when launched from a notification while in the background, consider using a foreground service to persistently monitor for deep links. 

This approach ensures that the application can respond to deep links even in those edge cases that might otherwise lead to missed events.