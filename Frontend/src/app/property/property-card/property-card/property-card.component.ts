import { Component, OnInit, Input } from '@angular/core';
import { IProperty } from '../../IProperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent  {
// tslint:disable-next-line:variable-name
@Input() property: IProperty;
}
