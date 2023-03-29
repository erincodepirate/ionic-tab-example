import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  items: Item[] = [];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.items = this.apiService.getItems();
  }

}
