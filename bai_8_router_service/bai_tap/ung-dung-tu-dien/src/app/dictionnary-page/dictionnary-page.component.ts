import { Component, OnInit } from '@angular/core';
import {IDictionnary} from "../../model/IDictionnary";
import {DicitonaryDAO} from "../../dao/DicitonaryDAO";

@Component({
  selector: 'app-dictionnary-page',
  templateUrl: './dictionnary-page.component.html',
  styleUrls: ['./dictionnary-page.component.css']
})
export class DictionnaryPageComponent implements OnInit {
  words : IDictionnary[] = DicitonaryDAO.dictionaryDao;
  constructor() { }

  ngOnInit(): void {
  }

}
