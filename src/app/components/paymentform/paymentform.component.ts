import { Component, EventEmitter, Output } from '@angular/core';
import { UserInfo } from 'src/app/models/userInfo';

@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrls: ['./paymentform.component.css']
})
export class PaymentFormComponent {

  @Output() submitOrder = new EventEmitter();

  userInfo: UserInfo = {
    fullName: '',
    address: '',
    creditCard: '',
  }
}
