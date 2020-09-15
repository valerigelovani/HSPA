import { Component, OnInit, Input } from '@angular/core';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent  {
// tslint:disable-next-line:variable-name
@Input() property: IPropertyBase;
@Input() hideIcons: boolean;
}
