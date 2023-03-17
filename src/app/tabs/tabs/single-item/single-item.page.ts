import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.page.html',
  styleUrls: ['./single-item.page.scss'],
})
export class SingleItemPage implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute, public navCtrl: NavController) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
