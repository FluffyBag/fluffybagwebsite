import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManager, ProductDetail } from 'src/app/DataManager/DataManager';
import { ActivatedRoute } from '@angular/router';
import { FluffyBagDetailId } from 'src/app/DataManager/DataManager';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  fluffyBag: ProductDetail | any 

  hero: string | undefined;

  constructor(public dataservice: DataManager, private _Activatedroute: ActivatedRoute) { }

  onContactButtonClick(productName: string): void {
    window.location.href = `mailto:${`fluffybag.italy@gmail.com?subject=Prodotto: ${productName}`}`;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    const fluffyBagId: FluffyBagDetailId = this._Activatedroute.snapshot.paramMap.get("id") as FluffyBagDetailId;
    this.fluffyBag = this.dataservice.productStructure.filter( bag => bag.pathName === fluffyBagId)[0]
  }
}