import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shu-shoe-grid',
  templateUrl: './shoe-grid.component.html',
  styleUrls: ['./shoe-grid.component.scss']
})
export class ShoeGridComponent implements OnInit {

  @Input() shoes: any[];
  @Input() title = 'New';

  ngOnInit() {}

}
