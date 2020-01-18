import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbTooltipModule ],
  declarations: [ AppComponent, SampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
