import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http'
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { AppReducer } from './store/app.state';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NavigationActionTiming, provideRouterStore, routerReducer } from '@ngrx/router-store';
import { jwtInterceptor } from './auth/jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([jwtInterceptor])),
    //importProvidersFrom(HttpClientModule),
    provideStore({
      ...AppReducer,
      router: routerReducer,
    }),
    provideStoreDevtools(),
    provideAnimations(),
    provideRouterStore({
      navigationActionTiming: NavigationActionTiming.PostActivation,
    })
 ]
};
