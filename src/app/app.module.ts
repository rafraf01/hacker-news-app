import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './stories/cards/cards.component';
import { customPipe } from './shared/pipe/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [customPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
