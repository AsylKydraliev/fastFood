import {Component, Input} from '@angular/core';
import {Item} from "./Shared/menu-item.modal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() icon = '';
  @Input() name = '';
  @Input() price = 0;
  @Input() count = 0;

  items: Item[] = [
    new Item(
      'data:image/png;base64,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',
      'Hamburger', 80, 0),
    new Item(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZHsBepeDyjtvE-F6VMekFvG2bp9N-mrq0w&usqp=CAU',
      'Coffee', 60, 0),
    new Item(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZHsBepeDyjtvE-F6VMekFvG2bp9N-mrq0w&usqp=CAU',
      'Cheeseburger', 100, 0),
    new Item(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZHsBepeDyjtvE-F6VMekFvG2bp9N-mrq0w&usqp=CAU',
      'Fries', 50, 0),
    new Item(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZHsBepeDyjtvE-F6VMekFvG2bp9N-mrq0w&usqp=CAU',
      'Ice-tea', 40, 0),
    new Item(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZHsBepeDyjtvE-F6VMekFvG2bp9N-mrq0w&usqp=CAU',
      'Cola', 50, 0),
  ]

  getCount(i: number) {
    this.items[i].count++;
  }

  getPrice(i: number) {
    return this.items[i].price * this.items[i].count;
  }
}
