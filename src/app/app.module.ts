import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HttpService } from './Shared/http.service';
import { NotificationsComponent } from './notifications/notifications.component';  
import { NotifyComponent } from './notify/notify.component';
import { DrAnandComponent } from './dr-anand/dr-anand.component';
import { ModalPage } from './modal/modal.page';

@NgModule({
  declarations: [AppComponent,NotificationsComponent,NotifyComponent, DrAnandComponent,ModalPage],
  entryComponents: [ ModalPage ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    AuthModule,
    SharedModule],
  providers: [
    StatusBar,
    HttpService,
    SplashScreen,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
