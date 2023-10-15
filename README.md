
# Angular Project with Multiple JSON Configurations

This Angular project demonstrates how to use different configurations for various environments (local, dev, azure, test, training, prod) using Angular CLI.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (with npm)
- [Angular CLI](https://angular.io/cli)

## Getting Started

1. Install project dependencies:

    ```bash
    npm install
    ```

## Usage

### Running the Application

To run the application with a specific configuration, use the following npm scripts:

- Current config or default (config.local.json)

    ```bash
    npm run start
    ```

- Local:

    ```bash
    npm run start:local
    ```

- Development:

    ```bash
    npm run start:dev
    ```

- Beta:

    ```bash
    npm run start:dev
    ```

- Production:

    ```bash
    npm run start:prod
    ```

- Test:

    ```bash
    npm run start:test
    ```

- Training:

    ```bash
    npm run start:training
    ```

- Azure:

    ```bash
    npm run start:azure
    ```

### Building the Application

To build the application with a specific configuration, use the following npm scripts:

- Current config or default (config.local.json)

    ```bash
    npm run build
    ```

- Local:

    ```bash
    npm run build:local
    ```

- Development:

    ```bash
    npm run build:dev
    ```

- Beta:

    ```bash
    npm run build:dev
    ```

- Production:

    ```bash
    npm run build:prod
    ```

- Test:

    ```bash
    npm run build:test
    ```

- Training:

    ```bash
    npm run build:training
    ```

- Azure:

    ```bash
    npm run build:azure
    ```
