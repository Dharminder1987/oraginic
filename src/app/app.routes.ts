import { Routes } from '@angular/router';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { JuiceComponent } from './component/product/juice/juice.component';
import { GroceriesComponent } from './component/product/groceries/groceries.component';
import { AboutComponent } from './component/product/about/about.component';
import { ContactComponent } from './component/product/contact/contact.component';
import { CartComponent } from './component/product/cart/cart.component';
import { PageNotFoundComponent } from './component/product/page-not-found/page-not-found.component';
import { ShopComponent } from './component/product/shop/shop.component';
import { MyAccountComponent } from './component/product/my-account/my-account.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component:ProductListComponent  },
    { path: 'juice', component:JuiceComponent  },
    { path: 'groceries', component: GroceriesComponent  },
    { path: 'about', component:AboutComponent  },
    { path: 'contact', component:ContactComponent  },
    { path: 'shop', component:ShopComponent},
    { path: 'cart', component:CartComponent  },
    { path: 'myaccount', component:MyAccountComponent},
    { path: '**', component:PageNotFoundComponent  },
    
   

  
];
