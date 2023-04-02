import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '@book';
import { BooksService } from '@book';

@Component({
  selector: 'office2023-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksListComponent implements OnInit{

  booksList$: Observable<IBook[]> = new Observable();

  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.booksList$ = this.booksService.getBooks$('Angular');
  }
}
