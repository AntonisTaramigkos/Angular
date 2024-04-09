import { Routes } from '@angular/router';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { EpersonReactiveFormExampleComponent } from './components/eperson-reactive-form-example/eperson-reactive-form-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';
import { TemplateDrivenFormExampleComponent } from './components/template-driven-form-example/template-driven-form-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
    {path:"http-client-example",component:HttpClientExampleComponent},
    {
    path:"reactive-form-example",component: EpersonReactiveFormExampleComponent
    },
    {path:"template-driven-form-example",component: TemplateDrivenFormExampleComponent  },
    {path:"component-output-example",component: ComponentOutputExampleComponent},
    {path:"for-directive-example", component: ForDirectiveExampleComponent},
    {path: "component-input-example", component: ComponentInputExampleComponent},
    {path:"event-bind-example", component : EventBindExampleComponent},
    {path:"simple-datatable-example",component: SimpleDatatableExampleComponent},
    // {path:"welcome", component : WelcomeComponent},
    {path:" ",component : WelcomeComponent }
];
