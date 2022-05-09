import {IStudent} from "../model/IStudent";

export class StudentDAO {
  static studentDao: IStudent[] = [
    {
      id: 1,
      name: "Khánh Bin",
      age: 25,
      gender: "Male",
      phone : +84332136545,
      mark: 7,
      avatar: ""
    },
    {
      id: 2,
      name: "Khánh Guynh",
      age: 19,
      gender : "Male",
      phone : +84332136545,
      mark: 4,
      avatar: ""
    },
    {
      id: 3,
      name: "Anh Thư",
      age: 14,
      gender : "Female",
      phone : +84332136545,
      mark: 10,
      avatar: ""
    }
  ]
}
