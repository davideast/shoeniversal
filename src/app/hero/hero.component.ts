import { Component, Input } from '@angular/core';

@Component({
  selector: 'shu-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() banner: any;
}
