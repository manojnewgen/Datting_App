import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  // Receive value from parents
  @Input() ValuesFromHome: any;
  // sending to parents
  @Output() cancelRegister = new EventEmitter();

  constructor(private auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }
  register() {
    this.auth.regster(this.model)
             .subscribe(() => { this.alertify.success('Registration Successfull'); }
                        , error => { this.alertify.error(error); }
                        );

  }
  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.warning('canceled');
  }
}
