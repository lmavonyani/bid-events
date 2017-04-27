import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ChatPage } from '../pages/chat/chat';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PostDetail } from '../pages/post-detail/post-detail';
import { ContributePage } from '../pages/contribute/contribute';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostDetail,
    ChatPage,
      ContributePage
  ],
  imports: [
    BrowserModule,
      HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostDetail,
    ChatPage,
      ContributePage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
