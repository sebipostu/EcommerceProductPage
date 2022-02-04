import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css'],
})
export class MensComponent implements OnInit {
  public addItem = false;
  public numberOfItems = 1;
  public cartMenu = false;
  addItemToCart() {}
  openCartContent() {}
  constructor() {}

  ngOnInit(): void {}
}
