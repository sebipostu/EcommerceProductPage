import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public addItem = false;
  public numberOfItems = 1;
  public cartMenu = false;
  addItemToCart() {}
  openCartContent() {}

  constructor() {}

  ngOnInit(): void {}
}
