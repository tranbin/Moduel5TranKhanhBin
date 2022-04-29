import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRating} from "../../models/IRating";
import {RatingDao} from "../../dao/RatingDao";

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  @Input()
  rating: IRating[] = RatingDao.ratingDao;

  @Output("rating") sendValue = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }


  sendData(value: number) {
    this.sendValue.emit(value);
    for (let i: number = 0; i < value; i++) {
      this.rating[i].active = 1;
    }
    for (let i: number = value; i < 10; i++) {
      this.rating[i].active = 0;
    }
  }
}
