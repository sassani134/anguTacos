import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { MenuService } from '../services/menu.service';
import { Menu } from './interfaces/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList: Menu[] = [];

  basketMenuList: Menu[] = [];
  selectedMenu?: Menu;
  menuChanged?: Menu;
  panierList: Menu[] = [];
  panierToto: number = 0;
  basketAmount: any;
  basketAmountBefore: number | undefined;

  constructor(private menuService: MenuService,
    private basketService: BasketService) {}

  showMenu() {
    this.menuService.getAllMenu().subscribe((data) => {
    console.log(data);
    this.menuList = data
    });
    };

    addBasket(menu: Menu) {
      this.basketAmountBefore = parseFloat(this.basketService.getAmountStorage());
      this.basketAmount = this.basketAmountBefore + menu.price;
      this.basketMenuList = this.basketService.getMenuListStorage();
      this.basketMenuList.push(menu);
      this.basketService.changeBasketValue(this.basketAmount, this.basketMenuList);
      }
      
    onSelect(menu: Menu): void {

      this.selectedMenu = menu;
    };

    update(menuReceived : Menu): void {
      this.menuChanged = menuReceived;
    }

    updatePanier(menuPrice:number):void {
      this.panierToto += menuPrice;
    }


  ngOnInit(): void {
    this.showMenu();
  }


}
