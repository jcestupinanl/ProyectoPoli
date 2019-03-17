import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Mi Cuenta',
      url: '/profile',
      icon: 'home'
    },
    {
      title: 'Tendencias',
      url: '/trends',
      icon: 'list'
    },
    {
      title: 'Explorador de Contenidos',
      url: '/explorer',
      icon: 'list'
    },
    {
      title: 'Cerrar Sesion',
      url: '/login',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.router.navigateByUrl('/login');
  }
}
