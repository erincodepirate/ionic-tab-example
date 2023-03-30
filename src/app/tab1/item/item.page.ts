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
    //this.items = this.apiService.getItems();

    this.getData();
  }

  // getData() {
  //   this.apiService.getItems().then(data => {
  //     this.apiService.checkTotal(data).then(val => {
  //       if (val) {
  //         this.items = data;
  //       }
  //     })
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }

  async getData() {
    try {
      const data = await this.apiService.getItems();
      const val = await this.apiService.checkTotal(data);
      if (val) {
        this.items = data;
      }
    } catch (e) {
      console.log(e);
    }
  }

}
