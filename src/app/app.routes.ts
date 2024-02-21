import { Routes } from '@angular/router';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { JuiceComponent } from './component/product/juice/juice.component';
import { GroceriesComponent } from './component/product/groceries/groceries.component';
import { AboutComponent } from './component/product/about/about.component';
import { ContactComponent } from './component/product/contact/contact.component';
import { CartComponent } from './component/product/cart/cart.component';
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component:ProductListComponent  },
    { path: 'juice', component:JuiceComponent  },
    { path: 'groceries', component: GroceriesComponent  },
    { path: 'about', component:AboutComponent  },
    { path: 'contact', component:ContactComponent  },
    { path: 'cart', component:CartComponent  },

  
];
