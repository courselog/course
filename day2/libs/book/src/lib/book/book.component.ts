import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBook } from '../DM/book.interface';

@Component({
  selector: 'office2023-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  @Input() book?: IBook;
  @Output() addToCart = new EventEmitter<IBook>();

  addToCartHanlder(){
    this.addToCart.emit(this.book);
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [BookComponent],
  exports: [BookComponent],
})
export class BookComponentModule {
}
