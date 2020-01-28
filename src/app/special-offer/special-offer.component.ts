import { Component, OnInit } from '@angular/core';
import {products} from '../products';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.css']
})
export class SpecialOfferComponent implements OnInit {
product;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
});
}

}