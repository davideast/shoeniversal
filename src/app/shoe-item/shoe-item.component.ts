import { Component, Input } from '@angular/core';

@Component({
  selector: 'shu-shoe-item',
  templateUrl: './shoe-item.component.html',
  styleUrls: ['./shoe-item.component.scss']
})
export class ShoeItemComponent {
  @Input() shoe: any;
}
