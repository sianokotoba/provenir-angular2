import { CreditFormService } from './../credit-form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css']
})
export class CreditFormComponent implements OnInit {

  coffee = {};
  submitted = false;
  approved = false;
  denied = false;

  constructor(private creditFormService: CreditFormService) { }

  ngOnInit() {}

  onSubmit(form) {
    const newCoffee = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      ssn: form.value.ssn.toString(),
      age: form.value.age.toString(),
      loanAmount: form.value.loanAmount.toString(),
      email: form.value.email
    };
    this.coffee = newCoffee;

    this.submitted = true;
    console.log('!!!!!!!!!!!!!!!!!!!');
    this.creditFormService.submit(this.coffee).subscribe(result => {
      console.log('Success: ', result);
      this.approvedOrDenied(result['approved']);
      form.reset();
    }, error => {
      console.log('Error\'d: ', error);
      // alert(`There was an issue submitting your application!`);
    });
  }

  approvedOrDenied(approvedValue: string|boolean): void {
    if (approvedValue || approvedValue === 'true') {
      this.approved = true;
      this.denied = false;
    } else {
      this.approved = false;
      this.denied = true;
    }
  }

}
