import { Injectable } from '@angular/core';
import { Book } from '@office/books';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService{
  private cart$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  constructor() { }
  
  getCart$(){
    return this.cart$.asObservable();
  }

  getNumberOfItemsInCart$(){
    return this.getCart$().pipe(
      map((cart: Book[]) => cart.length)
    );
  }

  snapshot() {
    return this.cart$.getValue();
  }

  setCart(cart: Book[]) {
    this.cart$.next(cart);
  }

  addToCart(book: Book) {
    const currentCart = this.cart$.getValue();
    const newCart = {...currentCart, book};

    this.setCart(newCart);
  }
}
