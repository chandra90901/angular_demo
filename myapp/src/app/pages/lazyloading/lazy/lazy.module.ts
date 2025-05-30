import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { DatabindingComponentTwo } from '../databinding/databinding.component';
import { EventbindingComponent } from '../eventbinding/eventbinding.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
    DatabindingComponentTwo,
    EventbindingComponent,
  ]
})
export class LazyModule {
  constructor() {
    console.log('LazyModule loaded!');
  }
}
