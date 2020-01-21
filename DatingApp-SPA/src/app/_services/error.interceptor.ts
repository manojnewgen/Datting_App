import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterCeptor implements HttpInterceptor {
  intercept(
    req: import("@angular/common/http").HttpRequest<any>,
    next: import("@angular/common/http").HttpHandler
  ): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === 401) {
          return throwError(error.statusText);
        }
        if (error instanceof HttpErrorResponse) {
          const applicationError = error.headers.get("Application-Error");
          if (applicationError) {
            return throwError(applicationError);
          }

          const serverError = error.error;
          let ModelStateError = "";
          if(serverError.error && typeof serverError.error==='object'){
              for (const key in serverError.error)
          }
        }
      })
    );
  }
}
