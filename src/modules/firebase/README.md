# FirebaseEngine

The `FirebaseEngine` class is a foundational component of our application, designed to initialize the Firebase Admin SDK with specific credentials and provide easy access to Firebase services such as Firestore. This setup is crucial for enabling server-side interaction with Firebase features.

## Overview

`FirebaseEngine` simplifies the Firebase Admin SDK initialization process by encapsulating it within a static method. It uses credentials from a service account key file to authenticate and configure the SDK. Additionally, it offers a static method to access the Firestore database service, streamlining database interactions throughout the application.

## Features

- **Firebase Admin SDK Initialization**: Centralizes the configuration and initialization of the Firebase Admin SDK, ensuring that Firebase services are ready to be used application-wide.
- **Firestore Access**: Provides a simplified and centralized method to access the Firestore database service.

## Getting Started

### Prerequisites

- A Firebase project and generated service account key file (`service-account-key.json`).
- Firebase Admin SDK installed in your project.

### Installation

Ensure the Firebase Admin SDK is added to your project dependencies:

```bash
npm install firebase-admin --save
```

Place your service account key file (`service-account-key.json`) in an accessible location within your project, ensuring it's secure and not exposed publicly.

### Initialization

The `FirebaseEngine` is initialized in the `AppModule` of your NestJS application. This ensures that Firebase services are set up and ready before the application starts serving requests.

```typescript
import { Module } from '@nestjs/common';
import { FirebaseEngine } from 'path/to/firebase.engine';

@Module({
  // Other module imports
})
export class AppModule {
  constructor() {
    FirebaseEngine.init();
  }
}
```

## Usage

### Accessing Firestore

To access Firestore from any part of your application, use the `FirebaseEngine.firestore()` method:

```typescript
const firestore = FirebaseEngine.firestore();
```

This method returns an instance of Firestore, through which you can perform database operations.

## Security Considerations

Ensure that your `service-account-key.json` file is securely stored and not included in version control. Use environment-specific configurations to manage access to different Firebase project environments (development, staging, production).
