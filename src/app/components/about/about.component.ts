import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public addItem = false;
  public numberOfItems = 1;
  public cartMenu = false;
  addItemToCart() {}
  openCartContent() {}

  constructor() {}

  ngOnInit(): void {}
}
