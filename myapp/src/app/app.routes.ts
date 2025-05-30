import { Routes } from '@angular/router';
import { DatabindingComponent } from './pages/databinding/databinding.component';
import { CustomdirectivesComponent } from './pages/customdirectives/customdirectives.component';
import { HooksComponent } from './pages/hooks/hooks.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildComponent } from './pages/child/child.component';
import { Parent2Component } from './pages/parent2/parent2.component';
import { Child2Component } from './pages/child2/child2.component';
import { SenderComponent } from './pages/sender/sender.component';
import { ReceiverComponent } from './pages/receiver/receiver.component';
import { UserComponent } from './pages/user/user.component';
import { DetailsComponent } from './pages/details/details.component';
import { FilterComponent } from './pages/Rxjs Operators/filter/filter.component';
import { SwitchMapComponent } from './pages/Rxjs Operators/switch-map/switch-map.component';
import { TakeComponent } from './pages/Rxjs Operators/take/take.component';
import { TapComponent } from './pages/Rxjs Operators/tap/tap.component';
import { MergeMapComponent } from './pages/Rxjs Operators/merge-map/merge-map.component';
import { DebounceTimeComponent } from './pages/Rxjs Operators/debounce-time/debounce-time.component';
import { DatabindingComponentTwo } from './pages/lazyloading/databinding/databinding.component';
import { EventbindingComponent } from './pages/lazyloading/eventbinding/eventbinding.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';


export const routes: Routes = [
    { path: '', redirectTo: 'databinding', pathMatch: 'full' },
    { path: 'databinding', component: DatabindingComponent },
    { path: 'hooks', component: HooksComponent },
    { path: 'custom', component: CustomdirectivesComponent },
    { path: 'userinfo', component: UserinfoComponent },
    { path: 'parent', component: ParentComponent },
    { path: 'child', component: ChildComponent },
    { path: 'parent2', component: Parent2Component },
    { path: 'child2', component: Child2Component },
    { path: 'sender', component: SenderComponent },
    { path: 'receiver', component: ReceiverComponent },
    { path: 'user', component: UserComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'filter', component: FilterComponent },
    { path: 'tap', component: TapComponent },
    { path: 'mergeMap', component: MergeMapComponent },
    { path: 'switchMap', component: SwitchMapComponent },
    { path: 'debounceTime', component: DebounceTimeComponent },
    { path: 'take', component: TakeComponent },
    {
        path: 'lazy',
        loadChildren: () => import('./pages/lazyloading/lazy/lazy.module').then(m => m.LazyModule)
    }
];

