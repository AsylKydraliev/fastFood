import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../Shared/menu-item.modal";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  @Input() icon = '';
  @Input() name = '';
  @Input() count = 0;
  @Input() price = 0;

  @Output() deleteOrder = new EventEmitter<Item>();

  onDeleteOrder(){
    this.deleteOrder.emit();
  }
}
