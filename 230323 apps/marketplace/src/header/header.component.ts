import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '@office/cart';

@Component({
  selector: 'officeproject-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private cartService: CartService){}
}
