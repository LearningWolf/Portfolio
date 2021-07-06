import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headear',
  templateUrl: './headear.component.html',
  styleUrls: ['./headear.component.css']
})
export class HeadearComponent implements OnInit {

  navMenuShow = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglenav() {
    this.navMenuShow = !this.navMenuShow
  }

}
