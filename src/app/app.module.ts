import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemInfoCardComponent } from './item-info-card/item-info-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemTypeTextPipe } from './pipes/item-type-text-pipe'
import { ItemTypeIconPipe } from './pipes/item-type-icon-pipe';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { SpinnerComponent } from './spinner/spinner.component'

@NgModule({
  declarations: [AppComponent, ItemInfoCardComponent, ItemTypeTextPipe, ItemTypeIconPipe, PrimaryButtonComponent, SpinnerComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
