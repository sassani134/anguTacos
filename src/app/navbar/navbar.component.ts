import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketService } from '../basket.service';

/**
* Composant de navbar, placé en haut et présent sur tout le site
* (sauf page de login)
*/
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit, OnDestroy {
  /** Montant du panier */
  basketAmount = 0;
  /** Abonnement à l'observable du basketService */
  subscription: Subscription;
  /**
  * Injection de dépendances du basketService pour récupérer le montant du panier
  * et souscription à l'observable
  * @param bascketService
  */
  constructor(private bascketService : BasketService) {
  this.subscription = bascketService.basketAmount$.subscribe(
  basket => {
  this.basketAmount = basket;});
  }
  /**
  * A l'initialisation du compsant on récupère le montant du panier
  */
  ngOnInit(): void {
    this.basketAmount = parseFloat(this.bascketService.getAmountStorage());
  }
  /**
  * A la suppression du composant, il est important de se désabonner de l'observable
  */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}