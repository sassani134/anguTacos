import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Menu } from './menu/interfaces/menu';

/**
Cas pratique : le panier4* Classe de service permettant la gestion du panier dans les différents composants li
és et
* dans le localstorage.
*/
@Injectable({
providedIn: 'root'
})
export class BasketService {
/** Clé du montant du panier, pour le localstorage */
private keyBasketAmount = 'basketAmount';
/** Clé de la liste des éléments du panier, pour le localstorage */
private keyBasketMenuList = 'BasketMenuList';
/** Montant du panier, élément "source" dont la valeur sera modifiable */
private basketAmountSource = new Subject<number>();
/**Liste des éléments du panier, élément "source" dont les valeurs seront modifiable
s */
private bascketContentSource = new Subject<Menu[]>();
/** Observable du montant du panier */
basketAmount$ = this.basketAmountSource.asObservable();
/** obserbable du tableau des éléments du panier */
basketContent$ = this.bascketContentSource.asObservable();
/**
* Change la valeur du panier et la répercute
* au niveau du localstorage
* au niveau des observables
* @param newValue nouveau montant du panier
* @param menus nouvelle liste de menus
*/
changeBasketValue(newValue: number, menus: Menu[]) {
this.basketAmountSource.next(newValue);
this.setAmountStorage(newValue);
this.setMenuListStorage(menus);
this.bascketContentSource.next(menus);
}
/**
* Remet le panier à zéro
*/
initBasketValue() {
this.basketAmountSource.next(0);
this.bascketContentSource.next([])
}
/**
* Enregistre la valeur du panier dans le localstorage
* @param newAmount nouveau montant du panier
*/
setAmountStorage(newAmount: number) {
localStorage.setItem(this.keyBasketAmount, newAmount.toString());
}
/**
* Enregistre le tableau des éléments du menu dans le localstorage
* @param menuList nouveau tableau des éléments du menu
*/
setMenuListStorage(menuList: Menu[]) {
localStorage.setItem(this.keyBasketMenuList, JSON.stringify(menuList));
}
/**
* Récupère le montant du panier dans le localstorage
* @returns le montant du panier
*/
getAmountStorage(): string {
const amount = localStorage.getItem(this.keyBasketAmount);
return amount !== null ? amount: '0';
}
/**
* Récupère le contenu du panier depuis le localstorage
* @returns tableau des éléments du panier
*/
getMenuListStorage():Menu[] {
const menuList = localStorage.getItem(this.keyBasketMenuList)
return menuList !== null ? JSON.parse(menuList) : [];
}
}