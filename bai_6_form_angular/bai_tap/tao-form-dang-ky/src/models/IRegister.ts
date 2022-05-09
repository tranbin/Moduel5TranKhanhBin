export interface IRegister {
  email: string,
  pwGroup: {
    password: string,
    confirmPassword: string,
  },
  country: string,
  age: number,
  gender: string,
  phone: string
}
