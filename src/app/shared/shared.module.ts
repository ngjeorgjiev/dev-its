import { DividerComponent } from './divider/divider.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutDividerComponent } from './layout/layout-divider.component';
import { LayoutMobileComponent } from './layout-mobile/layout-mobile.component';

@NgModule({
 imports:      [ CommonModule ],
 declarations: [  DividerComponent , LayoutDividerComponent , LayoutMobileComponent],
 exports:      [ CommonModule, FormsModule , ReactiveFormsModule , DividerComponent , LayoutDividerComponent , LayoutMobileComponent]
})
export class SharedModule { }
