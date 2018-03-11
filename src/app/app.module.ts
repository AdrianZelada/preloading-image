import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadingImageComponent} from './components/loader.image'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadingImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
