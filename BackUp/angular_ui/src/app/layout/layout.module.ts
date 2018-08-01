// ================== //
// ===== Modules ==== //
// ================== //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// ================== //
// === Components === //
// ================== //


import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})

export class LayoutModule {}
