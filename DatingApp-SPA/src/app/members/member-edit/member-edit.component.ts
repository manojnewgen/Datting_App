import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  user: User;
  @ViewChild('editform' , {static: false}) editform: NgForm;
  // Show alert if you accidently close browser without saving changes
  @HostListener('window:beforeunload', ['$event'])
  unlodNotification($event: any) {
    if (this.editform.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute,
              private alertify: AlertifyService,
              private userservice: UserService, private authservice: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }
  updateUser() {
    this.userservice.updateUser(this.authservice.decodedTokens.nameid, this.user).subscribe(next =>{
      this.alertify.success('Profile Update Successfully');
      this.editform.reset(this.user);
    }, error => {this.alertify.error('Failed in Updating user details');} );
  }
}
