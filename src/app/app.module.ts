import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ConcatComponent } from './home/concat/concat.component';
import { WorksComponent } from './home/works/works.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NotMatchComponent } from './not-match/not-match.component';
import { LinksComponent } from './home/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ConcatComponent,
    WorksComponent,
    HeaderComponent,
    FooterComponent,
    NotMatchComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'personal-website'}),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
