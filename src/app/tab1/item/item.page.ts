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

      const object1 = {...this.items[0], p_code: 12, price: 15};
      console.log("obj1:", object1);

      //const array1 = [...this.items];
      const array1 = [1,2,3,4];
      const array2 = [1,3,7,8];
      const array3 = [...array1, ...array2, 0, 9]
      console.log("arr3:", array3)
    } catch (e) {
      console.log(e);
    }
  }

}
