import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListGroupMenuComponent } from "./components/list-group-menu/list-group-menu.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { Person } from './shared/interfaces/person';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterLink, RouterOutlet, ListGroupMenuComponent, NavbarComponent]
})
export class AppComponent {   

  person0 = {
      givenName : "Antonis",
      surName :"Tara",
      age: 41,
      email: "a@afaf.ge",
      address:"Athens, Greece"
  
    };
  person1 = {
      givenName : "George",
      surName :"Tara",
      age: 38,
      email: "a@afaf.ge",
      address:"thessaloniki, Greece"
  
    };

    
    users: Person[] = [
    {​​
      givenName: 'John',
      surName: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      address: '123 Main St',
    }​​,
    {​​
      givenName: 'Jane',
      surName: 'Doe',
      age: 28,
      email: 'jane.doe@example.com',
      address: '123 Main St',
    }​​,
    {​​
      givenName: 'Jim',
      surName: 'Brown',
      age: 45,
      email: 'jim.brown@example.com',
      address: '456 Park Ave',
    }​​,
    {​​
      givenName: 'Jill',
      surName: 'Brown',
      age: 42,
      email: 'jill.brown@example.com',
      address: '456 Park Ave',
    }​​,
    {​​
      givenName: 'Jake',
      surName: 'Smith',
      age: 36,
      email: 'jake.smith@example.com',
      address: '789 Broadway',
    }​​,
    {​​
      givenName: 'Judy',
      surName: 'Smith',
      age: 34,
      email: 'judy.smith@example.com',
      address: '789 Broadway',
    }​​,
    {​​
      givenName: 'Jack',
      surName: 'Johnson',
      age: 50,
      email: 'jack.johnson@example.com',
      address: '321 Oak St',
    }​​,
    {​​
      givenName: 'Julie',
      surName: 'Johnson',
      age: 48,
      email: 'julie.johnson@example.com',
      address: '321 Oak St',
    }​​,
    {​​
      givenName: 'Jerry',
      surName: 'Davis',
      age: 55,
      email: 'jerry.davis@example.com',
      address: '654 Pine St',
    }​​,
    {​​
      givenName: 'June',
      surName: 'Davis',
      age: 53,
      email: 'june.davis@example.com',
      address: '654 Pine St',
    }​​,
  ];

}
