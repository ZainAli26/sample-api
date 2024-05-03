import { Client } from 'pg';

export const postgresClient = new Client({
  user: process.env.POSTGRES_USER_NAME,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB_NAME,
  password: process.env.POSTGRES_USER_PASSWORD,
  port: parseInt(process.env.POSTGRES_HOST_PORT ?? "5432")
});

export const errorPostgresClientAlreadyConnectedString: string = "Client has already been connected. You cannot reuse a client."

export enum PostgresErrorCodes {
  duplicateKeyError = '23505'
}
