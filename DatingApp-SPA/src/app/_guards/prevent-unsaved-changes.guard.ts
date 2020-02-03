import { Injectable } from '@angular/core';
import {CanDeactivate} from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
  canDeactivate(component: MemberEditComponent) {
    // tslint:disable-next-line: no-debugger
    debugger;
   // tslint:disable-next-line: align
   if (component.editform.dirty) {
     return confirm('Are you sure you want to continue? any unused changes will be lost');
   }
   return true;
  }
}

