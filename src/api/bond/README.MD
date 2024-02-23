# BondAPI for NestJS

## Overview

BondAPI is a sophisticated NestJS service designed to facilitate the dynamic creation and retrieval of relational bonds between entities within a specified data collection. It leverages the robustness of NestJS framework and integrates seamlessly with database services to manage complex relational data efficiently. This API is ideal for applications requiring a flexible and reliable method to associate entities, such as user connections, device linkages, or any domain-specific relationships.

## Features

- **Dynamic Bond Creation**: Enables the creation of relational bonds between multiple entities, providing a flexible foundation for managing complex relationships.
- **Efficient Bond Retrieval**: Offers a streamlined mechanism to query existing bonds, optimizing data retrieval and minimizing latency.
- **Intelligent Bond Management**: Automatically determines the necessity of bond creation or retrieval, ensuring optimal data integrity and consistency.

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- NestJS CLI installed globally (`npm i -g @nestjs/cli`)
- Access to a MongoDB or compatible database service

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory and install the required dependencies using npm:

    ```bash
    npm install
    ```

3. Ensure your database service is running and accessible.

### Configuration

1. Configure your database connection in `app.module.ts` or a designated configuration service/module.
2. Ensure the `DBCollectionService` is properly configured to interact with your database collections.

## Usage

### Service Injection

Inject the BondAPI service into your desired module or controller:

```typescript
import { BondAPI } from 'path/to/bond.api';

@Injectable()
export class YourService {
  constructor(private readonly bondAPI: BondAPI) {}
}
```

### API Methods

- **Create a Bond**: 

    ```typescript
    await this.bondAPI.create(collectionName, nodeType, entityIds);
    ```

- **Find a Bond**: 

    ```typescript
    const bond = await this.bondAPI.find(collectionName, entityIds);
    ```

- **Get or Create a Bond**: 

    ```typescript
    const bond = await this.bondAPI.get(collectionName, sender, destination);
    ```

## API Reference

- `create(collection: string, node: NodeTypes, ids: string[])`: Creates a new bond in the specified collection.
- `find(collection: string, ids: string[])`: Retrieves a bond based on the provided IDs.
- `get(collection: string, sender: ISender, destination: IDestination)`: Retrieves an existing bond or creates a new one if it doesn't exist.
