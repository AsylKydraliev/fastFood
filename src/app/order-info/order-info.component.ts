import {Component, Input} from '@angular/core';
import {Item} from "../Shared/menu-item.modal";

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent {
  title = 'Your order:';
  @Input() newItems: Item[] = [];
  @Input() price = 0;
  @Input() count = 0;
  @Input() icon = '';
  @Input() name = '';

  onDeleteOrder(i: number) {
    this.newItems.splice(i, 1);
  }
}
