export class AccountClass {
  idAccount: number;
  userName: string;
  passWord: string;
  createDate: Date;
  roleID: string;
  fullName: string;
  brithday: Date;
  sex: boolean;
  phone: string;
  address: string;
  email: string;
  compyName: string
  taxtCode: string
  link: string;
  nameContact: string;
  status: boolean;
  icon: string;


  constructor(idAccount: number, userName: string, passWord: string, createDate: Date, roleID: string, fullName: string, brithday: Date, sex: boolean, phone: string, address: string, email: string, compyName: string, taxtCode: string, link: string, nameContact: string, status: boolean, icon: string) {
    this.idAccount = idAccount;
    this.userName = userName;
    this.passWord = passWord;
    this.createDate = createDate;
    this.roleID = roleID;
    this.fullName = fullName;
    this.brithday = brithday;
    this.sex = sex;
    this.phone = phone;
    this.address = address;
    this.email = email;
    this.compyName = compyName;
    this.taxtCode = taxtCode;
    this.link = link;
    this.nameContact = nameContact;
    this.status = status;
    this.icon = icon;
  }
}
