import { DividerComponent } from './divider/divider.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutDividerComponent } from './layout/layout-divider.component';

@NgModule({
 imports:      [ CommonModule ],
 declarations: [  DividerComponent , LayoutDividerComponent],
 exports:      [ CommonModule, FormsModule , ReactiveFormsModule , DividerComponent , LayoutDividerComponent]
})
export class SharedModule { }
