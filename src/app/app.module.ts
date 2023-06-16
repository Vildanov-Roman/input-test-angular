import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PasswordStrengthComponent } from './app.component';

@NgModule({
  declarations: [
    PasswordStrengthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PasswordStrengthComponent]
})
export class AppModule { }
