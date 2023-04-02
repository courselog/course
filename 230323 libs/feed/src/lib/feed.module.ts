import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { feedRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(feedRoutes)],
})
export class FeedModule {}
