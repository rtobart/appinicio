import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.page.html',
  styleUrls: ['./sumar.page.scss'],
})
export class SumarPage implements OnInit {

  n1:number;
  n2:number;
  a:number;
  b:number;
  r:number;

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }

  async sumar() {//resultado en una alerta
    this.r = this.n1 + this.n2;
    const alert = await this.alertController.create({

      header: 'Resultado',

      message: this.r.toString(),

      buttons: ['OK']

    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async onSubmit(){//resultado en una alerta
    var a1: number = + this.a;
    var b1: number = + this.b;

    let x = b1+a1;
    console.log(x)
    const alert = await this.alertController.create({

      header: 'Resultado',

      message: x.toString(),

      buttons: ['OK']

    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
