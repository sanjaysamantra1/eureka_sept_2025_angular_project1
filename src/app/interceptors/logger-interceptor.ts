import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`Request ${req.url} was triggered at ${new Date().toLocaleTimeString()}`);
  return next(req); // req is sent to server
};
