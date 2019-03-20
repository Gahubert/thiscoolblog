import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Only Real Blog On Earth';

  posts = [
    {
      title: "Mon premier post",
      content: "Ceci est mon premier post prière de ne pas en tenir compte <3",
      loveIts: 0
    },
    {
      title: "Mon deuxième post",
      content: "Ceci est mon deuxième post prière de ne pas en tenir compte <3",
      loveIts: 0
    },
    {
      title: "Mon troisième post",
      content: "Ceci est mon troisième post prière de ne pas en tenir compte <3",
      loveIts: 0
    }
  ]

}
