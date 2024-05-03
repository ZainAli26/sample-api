# sample-api

It's a sample project for building APIs with typescript and express

---

# Project Name

Short description of the project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ZainAli26/sample-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd sample-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```
   
This project supports two database options: Firestore Emulator and Postgres. Follow the instructions below to install and set up the required database:

### Firestore Emulator

To install and configure the Firestore Emulator, follow the steps outlined in the [Firestore Emulator Installation Guide](https://firebase.google.com/docs/emulator-suite/install_and_configure).

After installing the Firestore Emulator, ensure you provide the necessary credentials to connect to Firestore.

### Postgres

To install Postgres, you can follow the steps provided in the [Postgres Installation Guide](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart).

Make sure to configure Postgres with the necessary credentials and settings.

## Running the Project

You can choose either Firestore Emulator or Postgres as the database for the project by setting the `DATABASE` environment variable. By default, Firestore will be used if no value is provided.

```bash
# Set DATABASE environment variable to POSTGRES for Postgres
export DATABASE=POSTGRES

# Alternatively, you can set it directly before running the script
DATABASE=POSTGRES npm start
```

Once you've set up the database and configured the environment variable, you can use the commands provided in the `package.json` file to run the project scripts.

For example, to start the project using the configured database, you can run:

```bash
npm start | npm run dev
```

Make sure to provide the corresponding credentials and configurations as needed to connect to the chosen database.

## Scripts

This project comes with the following npm scripts:

- `build`: Compile TypeScript source files to JavaScript.
- `start`: Start the project.
- `dev`: Run project in dev mode.
- `test`: Run tests.
- `lint`: Lint TypeScript files.
- `lint:fix`: Automatically fix linting issues.
- `clean`: Remove generated files.
- `format-fix`: Format code using Prettier.

You can run these scripts using npm:

```bash
npm run script-name
```

For example, to start the project, you can run:

```bash
npm start
```
