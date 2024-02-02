import { Component } from '@angular/core';
import { PaymentDetailFormComponent } from "../payment-detail-form/payment-detail-form.component";

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [
    PaymentDetailFormComponent
  ],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent {

}
