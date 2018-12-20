import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class phoneBookPage{

  contactArray = [
    {name:'Nana',telephone:'0994813642',imageUrl:'assets/imgs/30.jpg'}
    ,{name:'Dada',telephone:'0994813642',imageUrl:'assets/imgs/31.jpg'}
    ,{name:'Jane',telephone:'0994813642',imageUrl:'assets/imgs/24.jpg'}
    ,{name:'Jar',telephone:'0994813642',imageUrl:'assets/imgs/32.jpg'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);

  }

}//end class
