import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CartServiceService {

  constructor() { }

items = [];

addToCard(product){
  this.items.push(product);
}

getItems(){
  return this.items;
}
clearCart(){
  this.items = [];
  return this.items;
}

}