import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular'
import {HomePage} from '../home/home';
import {MinePage} from '../mine/mine';

@Component({
    selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab3Root: any;

  constructor(viewCtrl:ViewController
  ) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab3Root = MinePage;

  }
}
