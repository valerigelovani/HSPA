import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {TabsetComponent} from 'ngx-bootstrap/tabs/public_api';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyForm: NgForm;
@ViewChild('formTabs') formTabs: TabsetComponent;
SellRent = '1';

// Will come from masters
propertyTYpes: Array<string> = ['House', 'Apartamnet', 'Duplex'];
furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
readyToMove: Array<string> = ['East', 'West', 'South', 'North'];

propertyView: IProperty = {
  Id: null,
  Name: '',
  Price: null,
  SellRent: null,
  Type: null
};

  constructor(private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  onBack()
  {
    this.router.navigate(['/']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
