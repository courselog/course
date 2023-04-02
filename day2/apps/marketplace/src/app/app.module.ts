import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { BooksListComponent } from './components/books-list/books-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BookComponentModule } from '@book';

@NgModule({
  declarations: [AppComponent, BooksListComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    BookComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
