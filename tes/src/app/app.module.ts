import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './block/header/header.component';
import { FooterComponent } from './block/footer/footer.component';
import { AboutUsComponent } from './pages/about- us/about-us.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { ContractComponent } from './pages/contract/contract.component';
import { ErrorComponent } from './pages/error/error.component';
import { LookbookComponent } from './pages/lookbook/lookbook.component';
import { ProductComponent } from './pages/product/product.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    BlogsComponent,
    HomeComponent,
    CartComponent,
    CategoryComponent,
    CheckOutComponent,
    ContractComponent,
    ErrorComponent,
    LookbookComponent,
    ProductComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
