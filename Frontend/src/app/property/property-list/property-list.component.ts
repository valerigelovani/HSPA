import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertybase';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;

  properties: IPropertyBase[];

  constructor(private route: ActivatedRoute, private hopusingService: HousingService) {}

  ngOnInit(): void {
  if (this.route.snapshot.url.toString()) {
    this.SellRent = 2; // Means we are on rent-property URL else we are on base URL
  }

  this.hopusingService.getAllProperties(this.SellRent).subscribe(
  data => {
    this.properties = data;
    const newProperty = JSON.parse(localStorage.getItem('newProp'));

    if (newProperty.SellRent === this.SellRent){
      this.properties = [ newProperty, ...this.properties];
    }
  }, error => {
    console.log(error);
  }
  );
  }
}
