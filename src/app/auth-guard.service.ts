import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AppService } from './app.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(public router: Router, public appService: AppService) { }

    canActivate(): boolean {
        // let username: string = this.appService.username;
        // if (!username) {
        //     this.router.navigateByUrl('/login');
        //     return false;
        // }
        // else {
        //     return true;
        // }
        return true;
    }
}