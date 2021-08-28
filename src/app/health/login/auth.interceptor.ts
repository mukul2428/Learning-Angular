// import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { exhaust, exhaustMap, take } from "rxjs/operators";
// import { AuthService } from "../appServices/auth.service";

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor{

//     //to attach authenticated token with http request
//     constructor(private _authService:AuthService){}
    
//     intercept(req:HttpRequest<any>, next: HttpHandler){
//         //taking token(from data which is already 
//         //saved in our app from firebase)
//         return this._authService.user.pipe(
//             take(1),
//             exhaustMap(user=>{

//                 if(!user){
//                     console.log(req);
//                     return next.handle(req);
//                 }
//                 //if user is loggedin then only do this

//                 //attaching token to http req
//                 const modifiedReq = req.clone({
//                     params: new HttpParams().set('auth', user.token!) //used "!" to avoid null error
//                 })
//                 console.log(modifiedReq);
//                 return next.handle(modifiedReq);
//             })
//         )
//     }
// }