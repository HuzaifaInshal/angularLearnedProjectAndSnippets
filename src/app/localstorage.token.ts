// VALUE PROVIDER FOR LOCAL STORAGE 

import { InjectionToken } from "@angular/core";

export const localStorageToken = new InjectionToken<any>('local storage',{
    providedIn:'root',
    factory() {
        return localStorage; //local storage
        // return sessionStorage; //for session storage
    },
})