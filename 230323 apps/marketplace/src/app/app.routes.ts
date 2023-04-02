import { Route } from '@angular/router';
// import { FeedComponent } from '@office/feed'; // not using this. using line 13 for lazy loading

export const appRoutes: Route[] = [
    {
        path: '', 
        pathMatch: 'full',
        redirectTo: 'feed',
    },
    {
        path: 'feed',
        loadChildren: () => import('@office/feed').then(m => m.FeedModule)
    },
    {
        path: 'cart',
        loadChildren: () => import('@office/cart').then(m => m.CartModule)
    }
];
