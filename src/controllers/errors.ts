export class DuplicatDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DuplicatDataError";
  }
}

export class PostgresDuplicatDataError extends DuplicatDataError {
  constructor(message: string) {
    super(message);
    this.name = "PostgresDuplicatDataError";
  }
}

export class FirestoreDuplicatDataError extends DuplicatDataError {
  constructor(message: string) {
    super(message);
    this.name = "FirestoreDuplicatDataError";
  }
}
