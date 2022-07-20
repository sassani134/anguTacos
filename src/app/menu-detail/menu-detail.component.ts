import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu } from '../menu/interfaces/menu';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {
  @Input() menu?: Menu;

  @Output() menuChanged: EventEmitter<Menu> = new EventEmitter<Menu>();

  @Output() priceStocked: EventEmitter<number> = new EventEmitter<number>();


  update() {
    this.menuChanged.emit(this.menu);
    }

    updatePrice(price:number) {

    this.priceStocked.emit(price);
      

    }

  constructor() { }

  ngOnInit(): void {
  }

}
