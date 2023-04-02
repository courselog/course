import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { BookComponentModule } from '@office/books';

@NgModule({
  imports: [CommonModule, BookComponentModule],
  declarations: [FeedComponent],
  exports: [FeedComponent],
})
export class FeedComponentModule {}
