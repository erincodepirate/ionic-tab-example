import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  items: { id: number; name: string; description: string; price: number; }[] = [];



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
