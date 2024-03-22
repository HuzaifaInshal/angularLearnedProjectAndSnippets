// IT IS A VALUE BASED PROVIDER/SERVICE
// need to create and code manually no cli available like that for class based i.e. ng g s [servicename]
// also need to register in app module in providers

import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { environment } from "../../environments/environment.development";

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
    apiEndpoint:environment.apiEndpoint,
}