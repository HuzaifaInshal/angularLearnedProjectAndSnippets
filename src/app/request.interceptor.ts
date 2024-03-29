// INTERCEPTORS CAN MODIFY REQUESTS AND RESPONSES 
// captures all requests and responses of app
// interceptors needed to be registered om app.module or app.config

import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  // cant change og req must create a clone of it then apply changes
  const newReq = req.clone({headers:new HttpHeaders({'tester':'testee'})})
  if(req.method === 'POST'){
    //do something
  }
  return next(newReq);
};
