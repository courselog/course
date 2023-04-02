import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book } from '@office/books';
import { Observable } from 'rxjs';

@Component({
  selector: 'officeproject-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cart$?: Observable<Book[]>;
}
