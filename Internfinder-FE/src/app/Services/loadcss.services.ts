import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadcssServices {

  constructor() { }
  // tslint:disable-next-line:typedef
  loaddCss(src: string) {
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(css);
    css.href = src;
  }
  // tslint:disable-next-line:typedef
  loadScript(src: string) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    document.getElementsByTagName('body')[0].appendChild(script);
    script.src = src;
  }
}
