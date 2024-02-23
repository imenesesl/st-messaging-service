# DBCollectionService

The `DBCollectionService` is a core service in our NestJS application, designed to abstract and encapsulate interactions with Firestore. It provides a simplified API for performing common database operations, such as creating documents and querying collections, leveraging the Firebase Firestore engine.

## Features

- **Document Creation**: Allows for the addition of new documents to a specified Firestore collection.
- **Document Querying**: Supports querying documents from a Firestore collection with optional filters and limitations.

## Getting Started

### Prerequisites

- An initialized Firebase project with Firestore enabled.
- The `FirebaseEngine` module configured and imported into your NestJS application.

### Installation

Ensure your NestJS application is set up and the Firebase project is configured correctly. Import and inject the `DBCollectionService` where you need to interact with Firestore.

## Usage

### Creating a Document

To create a new document in a Firestore collection:

```typescript
const documentId = await this.dbCollectionService.createDocument('collection-path', {
  // Document data
});
```

Replace `'collection-path'` with the name of your Firestore collection and provide the document data as an object.

### Finding Documents

To find documents in a Firestore collection, optionally using filters and options:

```typescript
const documents = await this.dbCollectionService.findDocuments('collection-path', [
  { key: 'fieldName', operation: '==', value: 'fieldValue' },
], {
  limit: 10,
});
```

Replace `'collection-path'` with your collection name, adjust the filter to match your query requirements, and set options as needed.

## API Reference

### `createDocument<T>(collection: string, data: T): Promise<string>`

- **collection**: Name of the Firestore collection.
- **data**: Document data to store.
- **Returns**: Promise resolving to the new document's ID.

### `findDocuments(collection: string, filter?: FilterWhere[], options?: Options)`

- **collection**: Name of the Firestore collection.
- **filter**: Array of filter conditions.
- **options**: Query options, such as `limit`.
- **Returns**: Promise resolving to an array of Firestore document snapshots.
