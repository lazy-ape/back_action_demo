import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MinePage} from "../pages/mine/mine";
import {TabsPage} from "../pages/tabs/tabs";
import {DetailPage} from "../pages/detail/detail";
import {FirstPage} from "../pages/first/first";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MinePage,
    TabsPage,
    DetailPage,
    FirstPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MinePage,
    TabsPage,
    DetailPage,
    FirstPage
  ],
  providers: []
})
export class AppModule {}
