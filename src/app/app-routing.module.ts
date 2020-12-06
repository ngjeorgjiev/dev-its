import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LanguagePickerComponent } from './features/language-picker/language-picker.component';
import { ROUTES } from './routes';
import { MOBILE_ROUTES } from './routes-mobile';


const routerOptions: ExtraOptions = {
  enableTracing: true,
  useHash: false,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  // scrollOffset: [0, 32],
  relativeLinkResolution: 'legacy',
};

const routes: Routes =[
  {
    path: '',
    component: LanguagePickerComponent,
    data: {animation: 'LanguagePicker'}
  },
  ...ROUTES,
  ...MOBILE_ROUTES,
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
