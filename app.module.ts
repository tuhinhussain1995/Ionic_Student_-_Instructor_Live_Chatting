import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './http-config.interceptor';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GlobalState } from './global.state';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { FCM } from '@ionic-native/fcm/ngx';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { IonicStorageModule } from '@ionic/storage';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';

import { FilePath } from '@ionic-native/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

import { Base64 } from '@ionic-native/base64/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot({prefix: 'translife-student', separator: '-'}),
    IonicStorageModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true 
    },
    StatusBar,
    SplashScreen,
    FCM,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    QRScanner,
    BarcodeScanner,
    Push,
    GlobalState,
    MediaCapture, Media, File, IonicStorageModule, Base64, FilePath, FileChooser
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
