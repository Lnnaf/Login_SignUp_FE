import {Xemcv} from "../model/Xemcv";

export class XemcvService {
  static getXemCV() {
    let xemcv: Xemcv[];
    xemcv = [
      new Xemcv('1', 'Hoàng Anh', 'Dev', '22/12/2020'),
      new Xemcv('2', 'Hoàng Anh', 'Dev', '22/12/2020'),
      new Xemcv('3', 'Hoàng ần', 'Dev', '22/12/2020'),
    ];
    return xemcv;
  }
}
