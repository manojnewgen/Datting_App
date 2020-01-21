import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';


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

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  register() {
    this.auth.regster(this.model)
             .subscribe(() => { console.log(' Success'); }
                        , error => { console.log(error); }
                        );

  }
  cancel() {
    this.cancelRegister.emit(false);
    console.log('canceled');
  }
}
