import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shu-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
