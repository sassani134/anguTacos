import { Component, OnDestroy, OnInit } from '@angular/core';
import { Menu } from '../menu/interfaces/menu';
import { BasketService } from '../basket.service';

@Component({
selector: 'app-basket',
templateUrl: './basket.component.html',
styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
title = "Votre panier"
basketAmount = 0;
basketMenuList: Menu[] = [];
/**
* Injection de dépendances de basketService pour la gestion du panier
* @param bascketService
*/
constructor(private bascketService: BasketService) {
}
/**
* A l'initialisation du composant, les valeurs sont récupérées dans le localStorag
e
*/
ngOnInit(): void {
var amount = this.bascketService.getAmountStorage();
this.basketAmount = parseFloat(amount);
this.basketMenuList = this.bascketService.getMenuListStorage();
}
/**
* Supprime un élément du tableau du panier en cours. Cette action affecte à la fois
le tableau
* courant et son prix, mais répercute aussi la modification sur le basketService af
in de propager
* les nouvelles valeurs dans la navbar et le localstorage.
Cas pratique : le panier9* @param index index de l'élément à supprimer dans la liste
*/
deleteElement(index:number) {
this.basketAmount -= this.basketMenuList[index].price;
this.basketMenuList.splice(index, 1);
this.bascketService.changeBasketValue(this.basketAmount, this.basketMenuList);
}
}