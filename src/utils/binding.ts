import { type NextFunction } from "express";

export function BindFunction(
  target: any,
  key: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = function (
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    // Bind the function to 'this'
    originalMethod.bind(this)(req, res, next);
  };

  return descriptor;
}
