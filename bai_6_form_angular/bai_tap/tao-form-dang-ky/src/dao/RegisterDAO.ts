import {IRegister} from "../models/IRegister";

export class RegisterDAO {
  static registerDao: IRegister[] = [{
    email: "trankhanhbin123@gmail.com",
    pwGroup: {
      password: "123456",
      confirmPassword: "123456"
    },
    country: "Huế",
    age: 18,
    gender: "male",
    phone: "0332136545"
  },
    {
      email: "trankhanhbin@gmail.com",
      pwGroup: {
        password: "123456",
        confirmPassword: "123456"
      },
      country: "Huế",
      age: 18,
      gender: "male",
      phone: "0332136545"
    }]
}

/*
*   email : string,
  password : string,
  confirmPassword : string,
  country : string,
  age : number,
  gender : string,
  phone : string*/
