import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: '../app/app.component.html',
  styleUrls: ['./password-strength.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordStrengthComponent),
      multi: true
    }
  ],
})

export class PasswordStrengthComponent implements ControlValueAccessor {
  
  div1: string = 'coloring-field gray';
  div2: string = 'coloring-field gray';
  div3: string = 'coloring-field gray';

  latters: RegExp = /[a-zA-Z]/;
  numbers: RegExp = /[0-9]/;
  sumbols: RegExp = /[!@#$%^&*]/;


  @Input() password: string = '';

  private onChange: (value: string) => void = () => {};

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  writeValue(value: string): void {
    this.password = value;
    this.checkPasswordStrength(this.password);
  }

  checkPasswordStrength(password: string): void {
    if (password.length === 0) {
      this.div1 = 'coloring-field gray';
      this.div2 = 'coloring-field gray';
      this.div3 = 'coloring-field gray';
    } else if (password.length < 8) {
      this.div1 = 'coloring-field red';
      this.div2 = 'coloring-field red';
      this.div3 = 'coloring-field red';
    } else if (
      this.latters.test(password) &&
      this.numbers.test(password) &&
      this.sumbols.test(password)
    ) {
      this.div1 = 'coloring-field green';
      this.div2 = 'coloring-field green';
      this.div3 = 'coloring-field green';
    } else if (
      (this.latters.test(password) && this.numbers.test(password)) ||
      (this.sumbols.test(password) && this.numbers.test(password)) ||
      (this.latters.test(password) && this.sumbols.test(password))
    ) {
      this.div1 = 'coloring-field yellow';
      this.div2 = 'coloring-field yellow';
      this.div3 = 'coloring-field gray';
    } else {
      this.div1 = 'coloring-field red';
      this.div2 = 'coloring-field gray';
      this.div3 = 'coloring-field gray';
    }

    if (this.onChange) {
      this.onChange(this.password);
    }
  }
}
