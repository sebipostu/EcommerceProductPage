import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css'],
})
export class WomensComponent implements OnInit {
  public addItem = false;
  public numberOfItems = 1;
  public cartMenu = false;
  addItemToCart() {}
  openCartContent() {}
  constructor() {}

  ngOnInit(): void {}
}
