import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import "@fontsource/tenor-sans";
import "@fontsource/source-serif-pro";

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
