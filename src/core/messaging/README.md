# Messaging Module Documentation

## Overview

The Messaging Module is a critical component within our application, designed to facilitate robust and secure messaging capabilities. This document provides a comprehensive overview of the module's functionality, specifically focusing on the message creation process through the POST method, the expected JSON payload structure, and the underlying architecture involving DTOs, the controller, and the service layer.

## Message Creation Endpoint

### POST `/rest/api/v1/messaging`

This endpoint is responsible for the creation of new messages within the system. It is designed to handle complex messaging requirements, ensuring data integrity and proper routing of messages to their intended destinations.

#### Request Payload

The endpoint expects a JSON payload structured according to the `FieldsDto` definition, which encapsulates the entire message context, including sender, destination, message content, and organizational details. Below is a breakdown of the expected JSON structure:

```json
{
  "fields": {
    "sender": {
      "id": "<Sender ID>",
      "bond": "<Optional Bond ID>"
    },
    "organization": {
      "id": "<Organization ID>",
      "workspace": "<Workspace ID>"
    },
    "destination": {
      "id": "<Destination ID>",
      "node": "<Destination Node>",
      "type": "direct"
    },
    "message": {
      "text": "<Message Content>",
      "id": "<Optional Message ID>"
    }
  }
}
```

- `sender`: Represents the message originator, including an optional bond ID if a bond between the sender and the destination already exists.
- `organization`: Contextual information about the organization and workspace within which the message is being sent.
- `destination`: Details about the message destination, including the destination type which must be one of the predefined nodes (e.g., guardians, workspaces).
- `message`: The content of the message, optionally including a unique message ID if replying or referencing a specific message.

#### Validation Rules

The system enforces strict validation rules as defined in the DTOs to ensure the integrity of the data being processed. These rules include:

- Required fields such as `id` and `node` in `DestinationDto`, and `id` and `workspace` in `OrganizationDto`.
- String type validation for all IDs and text content.
- Enumeration checks for the `node` in `DestinationDto` to ensure it matches one of the allowed types.

### Response

Upon successful message creation, the endpoint returns a unique identifier for the newly created message. In the case of validation errors or processing failures, it provides a detailed error message, including the specific validation rule that was violated.

## Architecture

### DTOs (Data Transfer Objects)

DTOs play a crucial role in data validation and structure definition. Each DTO is equipped with decorators that enforce validation rules and documentation annotations that enhance API discoverability and usability through tools like Swagger.

### Controller

The `MessagingController` serves as the entry point for message-related HTTP requests. It leverages the `FieldsDto` for request validation and delegates business logic execution to the `MessagingService`.

### Service Layer

The `MessagingService` contains the core business logic for message handling, including interaction with the `DBCollectionService` for database operations and the `BondAPI` for bond management between entities.
