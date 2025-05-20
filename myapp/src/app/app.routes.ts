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


export const routes: Routes = [
    { path: '', redirectTo: 'data', pathMatch: 'full' },
    { path: 'data', component: DatabindingComponent },
    { path: 'hooks', component: HooksComponent },
    { path: 'custom', component: CustomdirectivesComponent },
    { path: 'parent', component: ParentComponent },
    { path: 'child', component: ChildComponent },
    { path: 'parent2', component: Parent2Component },
    { path: 'child2', component: Child2Component },
    { path: 'sender', component: SenderComponent },
    { path: 'receiver', component: ReceiverComponent },
    { path: 'user', component: UserComponent }
];
