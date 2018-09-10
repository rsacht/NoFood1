import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  @ViewChild('mainTabs') mainTabs: Tabs;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
  select(): void {
    if (this.mainTabs.getSelected().tabTitle == "Categorias")
      this.app.getRootNav().setRoot('Categorias');
  }

  selecionarCategoria(event):void{

    let navegacaoAnterior = event.linker._history[event.linker._history.length -2];
    console.log('ultimo', navegacaoAnterior);
    console.log('tab', event);
    console.log(event.tabTitle);

    if (event.tabTitle == 'Categorias')
    this.app.getRootNav().setRoot('CategoriaPage');
  }
}
