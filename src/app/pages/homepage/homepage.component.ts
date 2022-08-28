import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManager, ProductDetail } from 'src/app/DataManager/DataManager';
import 'tw-elements';
import { BagsFilterEnum } from 'src/app/DataManager/DataManager'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  currentSelectedFilter: BagsFilterEnum = BagsFilterEnum.All;

  bagsFilter: BagsFilterEnum[] = [
    BagsFilterEnum.All,
    BagsFilterEnum.Foulard,
    BagsFilterEnum.Ikat,
    BagsFilterEnum.Jaquard,
    // BagsFilterEnum.LuisaAmatori,
    BagsFilterEnum.Mini
  ];

  changeCurrentFilterSelection(filterSelected: BagsFilterEnum): void {
    this.currentSelectedFilter = filterSelected;
  }

  getLuisaAmatoriCapsue(): ProductDetail[] {
    return this.dataservice.productStructure.filter(bags => bags.type === BagsFilterEnum.LuisaAmatori)
  }

  getCurrentArray(): ProductDetail[] {
    switch (this.currentSelectedFilter) {
      case BagsFilterEnum.All:
        return this.dataservice.productStructure
      case BagsFilterEnum.Foulard:
        return this.dataservice.productStructure.filter(bags => bags.type === BagsFilterEnum.Foulard)
      case BagsFilterEnum.Jaquard:
        return this.dataservice.productStructure.filter(bags => bags.type === BagsFilterEnum.Jaquard)
      case BagsFilterEnum.Ikat:
        return this.dataservice.productStructure.filter(bags => bags.type === BagsFilterEnum.Ikat)
      // case BagsFilterEnum.LuisaAmatori:
        // return this.dataservice.productStructure.filter(bags => bags.type === BagsFilterEnum.LuisaAmatori)
      case BagsFilterEnum.Mini:
        return this.dataservice.productStructure.filter(bags => bags.type === BagsFilterEnum.Mini)
      default:
        return []
    }
  }

  constructor(public dataservice: DataManager, private router: Router) { }

  ngOnInit() { }

  onContactButtonClick(productName: string): void {
    window.location.href = `mailto:${`fluffybag.italy@gmail.com?subject=Prodotto: ${productName}`}`;
  }

  onProductTapped(pathName: string): void {
    this.router.navigate(['/dettagli', pathName]);
  }
}
