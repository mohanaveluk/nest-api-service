import { Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){

    }

    @Post('signup')
    signup(@Req() req: Request){
        console.log(req.headers);
        return this.authService.signup();
    }

    @Post('signin')
    signin(){
        return this.authService.signin();
    }
}
