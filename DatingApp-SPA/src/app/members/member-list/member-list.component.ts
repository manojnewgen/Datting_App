import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadusers();
  }

  loadusers() {
    this.userService.getUsers().subscribe((user: User[]) => {
      this.users = user;
    }, error => {
          this.alertify.error(error);
          });
  }
}
