import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() item: Item | undefined;

  constructor() { }

  ngOnInit() { }

}
