

import { Component, ContentChild, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-layout-mobile',
  templateUrl: './layout-mobile.component.html',
  styleUrls: ['./layout-mobile.component.css'],
})
export class LayoutMobileComponent {

  @ContentChild('top') topTemplateRef!: TemplateRef<any>;
  @ContentChild('bottom') bottomTemplateRef!: TemplateRef<any>;
  @ContentChild('static') staticContentRef!: TemplateRef<any>;


  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

}
