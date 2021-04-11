export class Xemcv {
  // tslint:disable-next-line:variable-name
  private _idXemcv: string;
  // tslint:disable-next-line:variable-name
  private _name: string;
  // tslint:disable-next-line:variable-name
  private _chucdanh: string;
  // tslint:disable-next-line:variable-name
  private _ngayNap: string;


  constructor(idXemcv: string, name: string, chucdanh: string, ngayNap: string) {
    this._idXemcv = idXemcv;
    this._name = name;
    this._chucdanh = chucdanh;
    this._ngayNap = ngayNap;
  }

  get idXemcv(): string {
    return this._idXemcv;
  }

  set idXemcv(value: string) {
    this._idXemcv = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get chucdanh(): string {
    return this._chucdanh;
  }

  set chucdanh(value: string) {
    this._chucdanh = value;
  }

  get ngayNap(): string {
    return this._ngayNap;
  }

  set ngayNap(value: string) {
    this._ngayNap = value;
  }
}
