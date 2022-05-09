import {Component, OnInit} from '@angular/core';
import {DictionaryServiceService} from "../dictionary-service.service";
import {ActivatedRoute} from "@angular/router";
import {IDictionnary} from "../../model/IDictionnary";

@Component({
  selector: 'app-dictionarydetail',
  templateUrl: './dictionarydetail.component.html',
  styleUrls: ['./dictionarydetail.component.css']
})
export class DictionarydetailComponent implements OnInit {
  word : IDictionnary | undefined;
  constructor(private dictionaryService: DictionaryServiceService,
              private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param)=>{
      // @ts-ignore
      this.word = this.dictionaryService.findWordById(param.get('id'));
    })
  }

}
