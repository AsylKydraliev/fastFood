import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../Shared/menu-item.modal";

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent {
  @Input() icon = '';
  @Input() name = '';
  @Input() price = 0;
  @Input() count = 0;
  @Input() newItems: Item[] = [];

  @Output() addItem = new EventEmitter<Item>();

  itemCount(){
    return this.count++;
  }

  addOrder() {
    this.itemCount();
    const newItem = new Item(this.icon, this.name, this.price, this.count);
    this.addItem.emit(newItem);
  }
}
