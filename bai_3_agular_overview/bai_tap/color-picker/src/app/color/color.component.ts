import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color = ``;
  constructor() { }

  ngOnInit(): void {
  }

  pink() {
    this.color = 'pink';
  }

  yellow() {
    this.color = 'yellow';
  }

  mediumpurple() {
    this.color = 'mediumpurple';
  }
}
