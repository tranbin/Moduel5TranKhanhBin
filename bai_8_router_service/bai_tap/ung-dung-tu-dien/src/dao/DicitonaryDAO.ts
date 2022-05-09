import {IDictionnary} from "../model/IDictionnary";

export class DicitonaryDAO {
  static dictionaryDao: IDictionnary[] = [{
    id: 1,
    wordE: "dark",
    meanV: "bóng tối"
  }, {
    id: 2,
    wordE: "light",
    meanV: "ánh sáng"
  },
    {
      id: 3,
      wordE: "war",
      meanV: "chiến tranh"
    },
    {
      id: 4,
      wordE: "peace",
      meanV: "hòa bình"
    }
  ]
}
