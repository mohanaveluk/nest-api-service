import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    constructor(){}

    signup(){
        return {message: 'I have signed you up'};
    }

    signin(){
        return {message: 'I have signed you in'};
    }

}