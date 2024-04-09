import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { JokesService } from 'src/app/shared/services/jokes.service';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit{
  jokesService = inject(JokesService)
  dadJoke = ''
  chuckNorrisJoke = ''
  ngOnInit(): void {
      // this.jokesService.getDadJoke().subscribe((data)=>{
      //   console.log(data)
      //   this.dadJoke = data.joke
      // })
      this.refreshDadJoke()
      this.refreshChuckNorrisJoke()
  //     this.jokesService.getChuckNorrisJoke().subscribe((data)=>{
  //       console.log(data)
  //       this.chuckNorrisJoke = data.value
  //     })
  }

  refreshDadJoke(){
    this.jokesService.getDadJoke().subscribe((data)=>{
        this.dadJoke = data.joke
    })
  }
  refreshChuckNorrisJoke(){
    this.jokesService.getChuckNorrisJoke().subscribe((data)=>{
        this.chuckNorrisJoke = data.value
    })
  }

}
