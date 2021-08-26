//acc. to firebase doc.
export interface AuthResponse{
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
    //"?" stands for optional
    registered?:boolean;
}