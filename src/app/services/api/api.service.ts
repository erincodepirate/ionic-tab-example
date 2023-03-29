import { Injectable } from '@angular/core';
import { Item } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  items: Item[] = [];



  constructor() {
    this.items = [{ id: 1, name: 'p1', description: "blah blah", price: 20 },
      { id: 2, name: 'p2', description: "bah bah", price: 15 }]
   }

  getItems() {
    return this.items;
  }

  getItem(id: number) {
    const item = this.items.find(x => x.id == id);
    return item;
  }
}
