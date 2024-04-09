import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'src/app/shared/interfaces/menu-item';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})
export class ListGroupMenuComponent {
  menu : MenuItem[] = [
    {text: 'Component Input Example', routeLink:"component-input-example"},
    {text: '@for Directive Example', routeLink:"for-directive-example"},
    {text: 'Event Bind Example', routeLink:"event-bind-example"},
    {text:"Simple Datatable Example", routeLink:"simple-datatable-example"},
    {text:"simple-datatable-example",routeLink:"simple-datatable-example"},
    {text: "Template Driven Form exampl",routeLink: "template-driven-form-example"},
    {text:"Reactive Form Example",routeLink: "reactive-form-example"}
  ];

}
