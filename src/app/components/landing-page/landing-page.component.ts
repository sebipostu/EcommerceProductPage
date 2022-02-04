import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialComponents = [MatToolbarModule];

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  public imageChoice = 1;
  public numberOfItems = 1;
  public cartMenu = false;
  public addItem = false;
  increaseButton() {
    this.numberOfItems++;
  }
  decreaseButton() {
    if (this.numberOfItems > 1) {
      this.numberOfItems--;
    }
  }
  openCartContent() {
    if (this.cartMenu === true) {
      this.cartMenu = false;
    } else {
      this.cartMenu = true;
    }
  }
  addItemToCart() {
    if (this.addItem === true) {
      this.addItem = false;
    } else {
      this.addItem = true;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
