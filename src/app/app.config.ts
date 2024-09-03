import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom([BrowserAnimationsModule, ToastModule]), provideHttpClient(), MessageService, ]
};
