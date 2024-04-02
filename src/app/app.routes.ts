import { Routes } from '@angular/router';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
    {path:"for-directive-example", component: ForDirectiveExampleComponent},
    {path: "component-input-example", component: ComponentInputExampleComponent},
    {path:"event-bind-example", component : EventBindExampleComponent},
    {path:"simple-datatable-example",component: SimpleDatatableExampleComponent},
    // {path:"welcome", component : WelcomeComponent},
    {path:" ",component : WelcomeComponent }
];
