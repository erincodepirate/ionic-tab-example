import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.page.html',
  styleUrls: ['./single-item.page.scss'],
})
export class SingleItemPage implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute, public navCtrl: NavController, public router: Router) { }

  ngOnInit() {
    console.log("SingleItemPage ngOnInit");
    this.id = this.route.snapshot.paramMap.get('id');
    const data = this.route.snapshot.queryParams;
    console.log('queryParams: ', data);
    if(data['data']) {
      const currentObjectData = JSON.parse(data['data']);
      console.log(currentObjectData);
    }
  }

  ionViewWillEnter() {
    console.log('SingleItemPage ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('SingleItemPage ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('SingleItemPage ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('SingleItemPage ionViewDidLeave')
  }

}
