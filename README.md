# Stack API Documentation

Welcome to the Stack API, a robust and scalable NestJS application designed to facilitate efficient messaging and core functionalities within our system. This document serves as the primary guide for understanding the application's architecture, utilizing its endpoints, and setting up the development environment.

## Features

- **Messaging Module**: Handles all aspects of message creation, validation, and delivery within a secure and scalable architecture.
- **Core Functionalities**: Encapsulates essential services and utilities that provide foundational support across the application.
- **Swagger Integration**: Offers comprehensive API documentation and interactive testing capabilities through Swagger UI.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (nvmrc version recommended)
- NPM (npmrc version recommended)
- Yarn package manager

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory and install the dependencies using Yarn:

    ```bash
    yarn install
    ```

### Running the Application

To start the application and access the core functionalities:

```bash
yarn start:dev
```

This command compiles and launches the NestJS application, making it accessible on `http://localhost:3000`.

## Swagger API Documentation

The application integrates Swagger for API documentation and interactive testing. To access the Swagger UI:

1. Ensure the application is running (`yarn start:dev`).
2. Navigate to `http://localhost:3000/api` in your web browser.

The Swagger UI provides a detailed overview of all available endpoints, their request structures, and expected responses. You can also execute API calls directly from the UI for testing purposes.

### Available Endpoints

- **Messaging Endpoints**: Facilitate message creation and management. Accessible under the `/rest/api/v1/messaging` path, supporting operations like POST for message creation.
