

import { Component, ContentChild, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-layout-divider',
  templateUrl: './layout-divider.component.html',
  styleUrls: ['./layout-divider.component.css'],
})
export class LayoutDividerComponent {

  @ContentChild('left') leftTemplateRef!: TemplateRef<any>;
  @ContentChild('right') rightTemplateRef!: TemplateRef<any>;
  @ContentChild('static') staticContentRef!: TemplateRef<any>;


  constructor(private location: Location) {}
  
  goBack(): void {
    this.location.back();
  }

}
