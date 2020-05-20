import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AppService } from './app.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(public router: Router, public appService: AppService) { }

    canActivate(): boolean {
        // Useful for protecting your routes when needed
        // Add this in app.module routing with RunGuardsAndResolvers
        // return true if the route should be accessible, otherwise false

        return true;
    }
}