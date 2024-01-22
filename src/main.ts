import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppGrid } from './app/grid';
import { NbDialogModule, NbThemeModule } from '@nebular/theme';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: '',
        component: AppGrid,
      },
    ]),
    importProvidersFrom(NbDialogModule.forRoot()),
    importProvidersFrom(NbThemeModule.forRoot()),
  ],
});
