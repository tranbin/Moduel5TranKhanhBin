import {Injectable} from '@angular/core';
import {IDictionnary} from "../model/IDictionnary";
import {DicitonaryDAO} from "../dao/DicitonaryDAO";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {

  constructor() {
  }

  findWordById(id: number): IDictionnary {
    return DicitonaryDAO.dictionaryDao.find((dictionary) => dictionary.id == id);
  }
}
