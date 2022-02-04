import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit {
  public addItem = false;
  public numberOfItems = 1;
  public cartMenu = false;
  addItemToCart() {}
  openCartContent() {}

  constructor() {}

  ngOnInit(): void {}
}
