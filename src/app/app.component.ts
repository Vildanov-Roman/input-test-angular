import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({ 
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }