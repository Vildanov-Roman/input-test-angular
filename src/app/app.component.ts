import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  div1: string = 'coloring-field gray';
  div2: string = 'coloring-field gray';
  div3: string = 'coloring-field gray';

  latters: RegExp = /[a-zA-Z]/;
  numbers: RegExp = /[0-9]/;
  sumbols: RegExp = /[!@#$%^&*]/;

  checkPasswordStrength(password: string) {
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
  }
}
