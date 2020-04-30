import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  drawerOpen: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
    .pipe(
      map(result => result.matches),
      tap(() => this.drawerOpen == false),
      shareReplay()
    );
  isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.TabletPortrait)
    .pipe(
      map(result => result.matches),
      tap(() => this.drawerOpen == false),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  drawerToggle() {
    this.drawerOpen = !this.drawerOpen;
  }
}
