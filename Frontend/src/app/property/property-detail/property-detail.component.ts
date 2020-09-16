import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Property } from 'src/app/model/property';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
public propertyId: number;
property = new Property();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private housingService: HousingService) {

              }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.propertyId = Number(this.route.snapshot.params['id']);
    this.route.data.subscribe(
      (data: Property) => {
        // tslint:disable-next-line:no-string-literal
        this.property = data['prp'];
      }
    );
    // this.route.params.subscribe(
    // (params) => {
    //  // tslint:disable-next-line:no-string-literal
    //  this.propertyId = +params['id']; // + converting to int
    //  this.housingService.getProperty(this.propertyId).subscribe(
    //    (data: Property) => {
    //      this.property = data;
    //    }
    //  );
    // }
    // );
  }
}
