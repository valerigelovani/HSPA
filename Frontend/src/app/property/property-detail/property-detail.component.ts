import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Property } from 'src/app/model/property';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
public propertyId: number;
property = new Property();
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

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

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      },
    ];

    this.galleryImages = [
      {
        small: 'assets/images/internal-1.jpg',
        medium: 'assets/images/internal-1.jpg',
        big: 'assets/images/internal-1.jpg'
      },
      {
        small: 'assets/images/internal-2.jpg',
        medium: 'assets/images/internal-2.jpg',
        big: 'assets/images/internal-2.jpg'
      },
      {
        small: 'assets/images/internal-3.jpg',
        medium: 'assets/images/internal-3.jpg',
        big: 'assets/images/internal-3.jpg'
      }, {
        small: 'assets/images/internal-4.jpg',
        medium: 'assets/images/internal-4.jpg',
        big: 'assets/images/internal-4.jpg'
      },
      {
        small: 'assets/images/internal-5.jpg',
        medium: 'assets/images/internal-5.jpg',
        big: 'assets/images/internal-5.jpg'
      }
      ,
      {
        small: 'assets/images/internal-6.jpg',
        medium: 'assets/images/internal-6.jpg',
        big: 'assets/images/internal-6.jpg'
      },
      {
        small: 'assets/images/internal-7.jpg',
        medium: 'assets/images/internal-7.jpg',
        big: 'assets/images/internal-7.jpg'
      },
      {
        small: 'assets/images/internal-8.jpg',
        medium: 'assets/images/internal-8.jpg',
        big: 'assets/images/internal-8.jpg'
      }
    ];
  }
}
