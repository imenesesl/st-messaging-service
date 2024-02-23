# Middleware Directory

The `middleware` directory contains custom middleware and filters designed to enhance and customize the request-response lifecycle in our NestJS application. Middleware in this context can include traditional middleware functions, as well as interceptors, guards, and exception filters that provide various layers of request processing, security, and error handling.

## Structure

This directory is organized into subdirectories, each representing a specific middleware component or related functionality:

- `/all-exception-filter`: Contains the `AllExceptionsFilter`, a global exception filter for handling and standardizing error responses throughout the application.
