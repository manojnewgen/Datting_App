import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> eac61ab11a931a3469b5e274263f66c51bbdaa8d

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model: any = {};
<<<<<<< HEAD
  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }
=======
  constructor(public authService: AuthService, private alertify: AlertifyService) { }
>>>>>>> eac61ab11a931a3469b5e274263f66c51bbdaa8d

  ngOnInit() {
  }
    login() {
<<<<<<< HEAD
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in Successfully');
    },
    error => { this.alertify.error('Failed in login');
    }, () => this.router.navigate(['/members']) );
=======
    this.authService.login(this.model).subscribe(() => {
      this.alertify.success('Logged in Successfully');
    },
    error => { this.alertify.error('Failed in login');
    });
>>>>>>> eac61ab11a931a3469b5e274263f66c51bbdaa8d
  }

  loggedIn() {
    return this.authService.LoggedIn();
  }
  logout() {
    const token = localStorage.removeItem('token');
    this.alertify.message('Logged out');
<<<<<<< HEAD
    this.router.navigate(['/home']);
=======
>>>>>>> eac61ab11a931a3469b5e274263f66c51bbdaa8d
  }

}
