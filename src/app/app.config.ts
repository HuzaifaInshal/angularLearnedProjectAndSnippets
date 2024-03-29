import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { Router, provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient, withInterceptors } from "@angular/common/http";
import { routes } from './app.routes';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { requestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    FormsModule,
    {
      provide:APP_SERVICE_CONFIG,
      useValue:APP_CONFIG,
    },
    provideHttpClient(
      withInterceptors([requestInterceptor])
    ),
    importProvidersFrom(HttpClientModule),
    {
      provide: APP_INITIALIZER,
      useFactory: InitService,
      multi: true,
      deps: [HttpClient, Router],
    }, provideAnimationsAsync(),
  ],  

};
