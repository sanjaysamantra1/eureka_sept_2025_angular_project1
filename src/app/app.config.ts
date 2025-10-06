import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggerInterceptor } from './interceptors/logger-interceptor';
import { authInterceptor } from './interceptors/auth-interceptor';
import { retryInterceptor } from './interceptors/retry-interceptor';

export const appConfig: ApplicationConfig = { // Application level configurations
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([
      loggerInterceptor,
      authInterceptor,
      retryInterceptor
    ]))
  ]
};
