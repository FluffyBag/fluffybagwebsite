import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManager } from 'src/app/DataManager/DataManager';
import { ActivatedRoute } from '@angular/router';
import { FluffyBagDetailId } from 'src/app/DataManager/DataManager';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

 fluffyBag: FluffyBagDetail = {
    name: '',
    imageName: '',
    productName: '',
    productDescription: ''
  }

  hero: string | undefined; 

  constructor(public dataservice: DataManager, private _Activatedroute:ActivatedRoute) {}

  ngOnInit() {
    const fluffyBagId: FluffyBagDetailId = this._Activatedroute.snapshot.paramMap.get("id") as FluffyBagDetailId;
    console.log(fluffyBagId);
    
    switch (fluffyBagId) {
      case FluffyBagDetailId.fluffy_one:
        this.fluffyBag = {
          name: 'Daniel',
          imageName: './assets/homepage/fluffy-bag-1/fluffy-bag-1-uno.png',
          productName: 'Fluffy Bag Numero Uno',
          productDescription: 'Ciaociaociao'
        }
        break;
      case FluffyBagDetailId.fluffy_two:
        this.fluffyBag = {
          name: 'Daniel',
          imageName: './assets/homepage/fluffy-bag-2/fluffy-bag-2-uno.png',
          productName: 'Daniel',
          productDescription: 'Danieldaniel'
        }
        break;
        case FluffyBagDetailId.fluffy_four:
          this.fluffyBag = {
            name: 'Daniel',
            imageName: './assets/homepage/fluffy-bag-4/fluffy-bag-4-uno.png',
            productName: 'Daniel',
            productDescription: 'Danieldaniel'
          }
          break;
        case FluffyBagDetailId.fluffyFive:
          this.fluffyBag = {
            name: 'Daniel',
            imageName: './assets/homepage/fluffy-bag-6/fluffy-bag-6-uno.png',
            productName: 'Daniel',
            productDescription: 'Danieldaniel'
          }
          break;
        case FluffyBagDetailId.fluffySeven:
          this.fluffyBag = {
            name: 'Daniel',
            imageName: './assets/homepage/fluffy-bag-7/fluffy-bag-7-uno.png',
            productName: 'Daniel',
            productDescription: 'Danieldaniel'
          }
          break;
          case FluffyBagDetailId.fluffyEight:
            this.fluffyBag = {
              name: 'Daniel',
              imageName: './assets/homepage/fluffy-bag-8/fluffy-bag-8-uno.png',
              productName: 'Daniel',
              productDescription: 'Danieldaniel'
            }
            break;
          case FluffyBagDetailId.fluffyEleven:
            this.fluffyBag = {
              name: 'Daniel',
              imageName: './assets/homepage/fluffy-bag-11/fluffy-bag-11-uno.png',
              productName: 'Daniel',
              productDescription: 'Danieldaniel'
            }
            break;
            case FluffyBagDetailId.fluffyTwelve:
              this.fluffyBag = {
                name: 'Daniel',
                imageName: './assets/homepage/fluffy-bag-12/fluffy-bag-12-uno.png',
                productName: 'Daniel',
                productDescription: 'Danieldaniel'
              }
              break;
    }
  }
}

type FluffyBagDetail = {
  name: string;
  imageName: string;
  productName: string;
  productDescription: string;
};