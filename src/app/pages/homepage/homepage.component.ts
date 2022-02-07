import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManager } from 'src/app/DataManager/DataManager';
import 'tw-elements';
import { FluffyBagDetailId } from 'src/app/DataManager/DataManager';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  productStructure = [
    {
      pathName: FluffyBagDetailId.fluffyOne,
      id: 1,
      imageName: './assets/homepage/fluffy-bag-1/fluffy-bag-1-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag Numero Uno',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyTwo,
      id: 2,
      imageName: './assets/homepage/fluffy-bag-2/fluffy-bag-2-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag Numero Due',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyFour,
      id: 3,
      imageName: './assets/homepage/fluffy-bag-4/fluffy-bag-4-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag Numero Quattro',
      productDescription: ''
    },
    /*
    {
      pathName: FluffyBagDetailId.fluffy_four,
      id: 4,
      imageName: './assets/homepage/fluffy-bag-5/fluffy-bag-5-uno.png',
      imageAlt: '',
      productName: 'Foto 1',
      productDescription: ''
    },
    */
    {
      pathName: FluffyBagDetailId.fluffyFive,
      id: 5,
      imageName: './assets/homepage/fluffy-bag-5/fluffy-bag-5-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag Numero Cinque',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffySix,
      id: 6,
      imageName: './assets/homepage/fluffy-bag-6/fluffy-bag-6-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag Numero Sei',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffySeven,
      id: 7,
      imageName: './assets/homepage/fluffy-bag-7/fluffy-bag-7-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag Numero Sette',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyEight,
      id: 8,
      imageName: './assets/homepage/fluffy-bag-8/fluffy-bag-8-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag Numero Otto',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyEleven,
      id: 11,
      imageName: './assets/homepage/fluffy-bag-11/fluffy-bag-11-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag Numero Undici',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyTwelve,
      id: 12,
      imageName: './assets/homepage/fluffy-bag-12/fluffy-bag-12-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag Numero Dodici',
      productDescription: ''
    }
  ]

  constructor(public dataservice: DataManager, private router: Router) {}

  ngOnInit() { 
  }

  onContactButtonClick(productName: string): void {
    window.location.href = `mailto:${`fluffybag.italy@gmail.com?subject=Prodotto: ${productName}`}`;
  }

  onProductTapped(productName: string): void {
    this.router.navigate(['/dettagli', productName]);
  }
}
