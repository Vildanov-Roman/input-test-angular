import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PasswordStrengthComponent } from '../checkingPassw/password-strength.component';

@NgModule({
  declarations: [
    PasswordStrengthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [PasswordStrengthComponent]
})
export class AppModule { }
