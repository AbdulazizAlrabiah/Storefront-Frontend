import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserManagementService } from 'src/app/services/user-management.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateUserComponent {
  firstName = ''
  lastName = ''
  password = ''

  constructor(public userManagementService: UserManagementService, private router: Router) {};

  async onRegister() {
   await this.userManagementService.register(this.firstName, this.lastName, this.password);
   this.router.navigate(['products']);
  }

}
