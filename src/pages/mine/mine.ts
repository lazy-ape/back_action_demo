import { Component } from '@angular/core';
import {NavController, App} from 'ionic-angular';
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage {

  constructor(public app:App) {

  }

  goDetail(){
    this.app.getRootNav().push(DetailPage);
  }

}
