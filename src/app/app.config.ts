import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { AppReducer } from './store/app.state';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideStore(AppReducer),
    provideStoreDevtools(),
    provideAnimations()
]
};
