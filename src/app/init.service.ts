import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

// APP INITIALIZERS SERVICE; they are used to load certain resource before the web app loads


export function InitService(http: HttpClient, router: Router) {
  return (): Observable<any> =>
    http
      .get('/assets/config.json')
      .pipe(tap((config)=>(
        console.log(config)
      )));
}
