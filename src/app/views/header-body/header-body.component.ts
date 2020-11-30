import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-body',
  templateUrl: './header-body.component.html',
  styleUrls: ['./header-body.component.less']
})
export class HeaderBodyComponent implements OnInit {
  public screenHeight: number;
  public screenWidth: number;

  @HostListener('window:resize', ['$event'])
    onResize(event?) {
       this.screenHeight = window.innerHeight - 18;
       this.screenWidth = window.innerWidth  - 15;
    }



  constructor() {
    this.onResize();
  }

  ngOnInit() {
  }
}
