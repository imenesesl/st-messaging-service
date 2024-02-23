# AllExceptionsFilter

The `AllExceptionsFilter` is a global exception filter designed for NestJS applications. It is implemented to catch and handle all exceptions that occur within the application, providing a unified response structure for errors. This ensures consistency across error responses and aids in debugging and error tracking.

## Overview

Exception filters in NestJS allow for custom processing of exceptions thrown during the execution of request processing. The `AllExceptionsFilter` extends this capability by catching all exceptions, both those that are instances of `HttpException` and generic JavaScript `Error` objects, and then formats them into a standardized JSON response.

## Features

- **Unified Error Response**: Ensures all errors return a consistent JSON structure, making client-side error handling more predictable.
- **HTTP Status Code Handling**: Extracts and uses the HTTP status code from instances of `HttpException`, defaulting to `500 Internal Server Error` for non-HTTP exceptions.
- **Error Message Customization**: Captures and returns the error message, providing clarity on the error encountered.

## Implementation

The filter uses the `@Catch()` decorator without any arguments, making it a global exception filter that catches every unhandled exception across the application.

### Key Components

- **Exception Handling**: Determines if the caught exception is an instance of `HttpException` and sets the HTTP status code accordingly. For non-HTTP exceptions, it defaults to `500 Internal Server Error`.
- **Response Structure**: The error response includes the HTTP status code, error message, timestamp, and the path of the HTTP request that led to the exception.

## Usage

To utilize the `AllExceptionsFilter` in your NestJS application, it needs to be set up in your main application file (typically `main.ts`). Here's a quick guide on how to do it:

1. Import the `AllExceptionsFilter`:

    ```typescript
    import { AllExceptionsFilter } from '@middlewares/all-exception-filter';
    ```

2. Apply the filter globally:

    ```typescript
    async function bootstrap() {
      const app = await NestFactory.create(AppModule);
      app.useGlobalFilters(new AllExceptionsFilter());
      await app.listen(3000);
    }
    bootstrap();
    ```

This ensures that any exception thrown in your application is caught and handled by the `AllExceptionsFilter`, providing a consistent error response format.

## Customization

You can extend the functionality of the `AllExceptionsFilter` by adding more conditions to handle different types of exceptions and customizing the error response structure as needed for your application.
