import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NavigationBarComponent } from './commonComponent/navigation-bar/navigation-bar.component';
import { FooterComponent } from './commonComponent/footer/footer.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'chiSiamo', component: AboutUsComponent },
  { path: 'dettagli/:id', component: ProductDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutUsComponent,
    NavigationBarComponent,
    FooterComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
