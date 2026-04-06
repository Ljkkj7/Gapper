# Gapper

Gapper is a React Native mobile application built with [Expo](https://expo.dev/) and [Expo Router](https://docs.expo.dev/router/introduction/).

It is built upon an API I developed using Flask, which is a Python web framework. The API is used to fetch data from the Transport for London (TFL) Trackernet Legacy API and return it in a format that can be used by the mobile application.

## Technologies Used

- **React Native** & **Expo** for cross-platform mobile development (iOS, Android, and Web)
- **Expo Router** for intuitive, file-based routing and navigation
- **TypeScript** for type-safe code and improved developer experience

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/en) installed on your machine
- [npm](https://www.npmjs.com/) (usually installed with Node.js)
- [Expo Go](https://expo.dev/go) app on your physical device, or an iOS Simulator / Android Emulator installed.

### Installation

1. Install all required dependencies:

   ```bash
   npm install
   ```

### Running the App

Start the Expo development server:

```bash
npm start
```
*(or run `npx expo start`)*

In the terminal output, you'll see a QR code. From here, you have a few options to launch the app:
- **Physical Device:** Scan the QR code with your phone's camera (iOS) or the Expo Go app (Android) to test on a real device.
- **iOS Simulator:** Press **`i`** (requires macOS and Xcode).
- **Android Emulator:** Press **`a`** (requires Android Studio).
- **Web:** Press **`w`** to open the app in a web browser.

## Project Structure

- **`/app`**: Contains all screens and routing logic, powered by Expo Router.
  - **`/components`**: Reusable UI components like `StationCard` and `LineStatusBadge`.
  - **`/constants`**: Shared configuration files, such as color palettes and themes.
- **`app.json`**: App configuration file for Expo.
