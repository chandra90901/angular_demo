import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponentTwo } from '../databinding/databinding.component';
import { EventbindingComponent } from '../eventbinding/eventbinding.component';

const routes: Routes = [
    { path: 'data', component: DatabindingComponentTwo },
    { path: 'eventbinding', component: EventbindingComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LazyRoutingModule { }
