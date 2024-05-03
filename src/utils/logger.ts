import * as winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.timestamp(),
    winston.format.json(),
  ),
  transports: [new winston.transports.Console()],
  exceptionHandlers: [new winston.transports.Console({ level: "error" })],
  exitOnError: false,
});

export { logger };
