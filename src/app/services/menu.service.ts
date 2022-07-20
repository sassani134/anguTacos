import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../menu/interfaces/menu';

//Decorateur 
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menu_ap_url: string = 'http://51.161.69.19:907/menu'
  constructor(private httpClient: HttpClient) { }

  getAllMenu() : Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(this.menu_ap_url);
    }
    
}
