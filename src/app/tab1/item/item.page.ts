import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  items: { id: number; name: string; description: string; price: number; }[] = [];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.items = this.apiService.getItems();
  }

}
