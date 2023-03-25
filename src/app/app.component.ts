import { AfterViewInit, Component, ViewChild,ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'pcrnews';
  isSideNavVisible : boolean = false; 
  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(private observer : BreakpointObserver, private cdr : ChangeDetectorRef){

  }
  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:787px)']).subscribe((res)=>{
        if(res?.matches){
          this.sideNav.mode = "over";
          this.sideNav.close();
        }
        else {
          this.sideNav.mode = "side";
          this.sideNav.open();
        }
    })
    this.cdr.detectChanges();
  }



  sideNavOpen(){
    this.sideNav.open();
    this.isSideNavVisible = false;
  }

  sideNavClose(){
    this.sideNav.close();
    this.isSideNavVisible = true;
  }



}
