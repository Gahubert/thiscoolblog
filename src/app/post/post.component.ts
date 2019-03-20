import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() loveIts: number;
  date = new Date();
  @Input() postTitle: string;
  @Input() postContent: string;

  iLoveit()
  {
    this.loveIts += 1;
  }

  iHateit()
  {
    this.loveIts -= 1;
  }

  getColor()
  {
    if (this.loveIts > 0)
      return "green";
    else if (this.loveIts < 0)
      return "red";
    else
      return "black";
  }
}
