import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-redirect',
  template: ''
})
export class RedirectComponent implements OnInit {
  loginRedirect: string = localStorage.getItem('login_redirect');

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    if (this.loginRedirect) {
      console.log(this.auth.authenticated);
      this.router.navigate([this.loginRedirect]);
      localStorage.removeItem('login_redirect');
    } else {
      // failsafe
      this.router.navigate(['/']);
    }
  }

}
