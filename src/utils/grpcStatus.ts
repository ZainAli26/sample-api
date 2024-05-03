import { GrpcStatus } from "@google-cloud/firestore";
import { getErrorMessage } from "./errors";

// We have to jump through the hoops here,
// because GrpcStatus is number-based enum and Typescript returns a 'string' instead of enum key during the reverse lookup.
// https://github.com/microsoft/TypeScript/issues/38806
// Without this, there is no easy way for us to understand why the request failed.

export enum GrpcStatusStr {
  OK = "OK",
  CANCELLED = "CANCELLED",
  UNKNOWN = "UNKNOWN",
  INVALID_ARGUMENT = "INVALID_ARGUMENT",
  DEADLINE_EXCEEDED = "DEADLINE_EXCEEDED",
  NOT_FOUND = "NOT_FOUND",
  ALREADY_EXISTS = "ALREADY_EXISTS",
  PERMISSION_DENIED = "PERMISSION_DENIED",
  RESOURCE_EXHAUSTED = "RESOURCE_EXHAUSTED",
  FAILED_PRECONDITION = "FAILED_PRECONDITION",
  ABORTED = "ABORTED",
  OUT_OF_RANGE = "OUT_OF_RANGE",
  UNIMPLEMENTED = "UNIMPLEMENTED",
  INTERNAL = "INTERNAL",
  UNAVAILABLE = "UNAVAILABLE",
  DATA_LOSS = "DATA_LOSS",
  UNAUTHENTICATED = "UNAUTHENTICATED",
}

export function grpcErrorCodeToString(maybeError: unknown): GrpcStatusStr {
  try {
    const grpcE = maybeError as GrpcError;
    const code = grpcE.code;
    return GrpcStatusToStringMap[code as GrpcStatus];
  } catch (e) {
    console.log(getErrorMessage(e));
    return GrpcStatusToStringMap[GrpcStatus.INTERNAL];
  }
}

const GrpcStatusToStringMap: { [key in GrpcStatus]: GrpcStatusStr } = {
  [GrpcStatus.OK]: GrpcStatusStr.OK,
  [GrpcStatus.CANCELLED]: GrpcStatusStr.CANCELLED,
  [GrpcStatus.UNKNOWN]: GrpcStatusStr.UNKNOWN,
  [GrpcStatus.INVALID_ARGUMENT]: GrpcStatusStr.INVALID_ARGUMENT,
  [GrpcStatus.DEADLINE_EXCEEDED]: GrpcStatusStr.DEADLINE_EXCEEDED,
  [GrpcStatus.NOT_FOUND]: GrpcStatusStr.NOT_FOUND,
  [GrpcStatus.ALREADY_EXISTS]: GrpcStatusStr.ALREADY_EXISTS,
  [GrpcStatus.PERMISSION_DENIED]: GrpcStatusStr.PERMISSION_DENIED,
  [GrpcStatus.RESOURCE_EXHAUSTED]: GrpcStatusStr.RESOURCE_EXHAUSTED,
  [GrpcStatus.FAILED_PRECONDITION]: GrpcStatusStr.FAILED_PRECONDITION,
  [GrpcStatus.ABORTED]: GrpcStatusStr.ABORTED,
  [GrpcStatus.OUT_OF_RANGE]: GrpcStatusStr.OUT_OF_RANGE,
  [GrpcStatus.UNIMPLEMENTED]: GrpcStatusStr.UNIMPLEMENTED,
  [GrpcStatus.INTERNAL]: GrpcStatusStr.INTERNAL,
  [GrpcStatus.UNAVAILABLE]: GrpcStatusStr.UNAVAILABLE,
  [GrpcStatus.DATA_LOSS]: GrpcStatusStr.DATA_LOSS,
  [GrpcStatus.UNAUTHENTICATED]: GrpcStatusStr.UNAUTHENTICATED,
};

/**
 * Per https://cloud.google.com/firestore/docs/reference/rest/v1beta1/Status
 */
export interface GrpcError {
  code: number;
  message: string;
}
