import { Component } from '@angular/core';

import {NavController, App} from 'ionic-angular';
import {FirstPage} from "../first/first";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public app:App) {

  }

  goFirstPage(){
    this.app.getRootNav().push(FirstPage);
  }

}
