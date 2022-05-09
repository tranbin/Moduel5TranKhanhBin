import {IStudent} from "../models/IStudent";

export class StudentDAO {
    static studentDao: IStudent[]=[
      {
          id: 1,
          name : "Khánh Bin",
          age : 25 ,
          mark : 7,
          avatar :""
      },
      {
        id: 2,
        name : "Khánh Guynh",
        age : 19 ,
        mark : 4,
        avatar :""
      },
      {
        id: 3,
        name : "Anh Thư",
        age : 14 ,
        mark : 10,
        avatar :""
      }
    ]
}
