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
      productName: 'Fluffy Bag 1 mod. Anna',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyTwo,
      id: 2,
      imageName: './assets/homepage/fluffy-bag-2/fluffy-bag-2-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag 2 mod. Linda',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyThree,
      id: 3,
      imageName: './assets/homepage/fluffy-bag-3/fluffy-bag-3-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.3 mod. Ily',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyFour,
      id: 4,
      imageName: './assets/homepage/fluffy-bag-4/fluffy-bag-4-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.4 mod. Matilde',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyFive,
      id: 5,
      imageName: './assets/homepage/fluffy-bag-5/fluffy-bag-5-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.5 mod. Alex',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffySix,
      id: 6,
      imageName: './assets/homepage/fluffy-bag-6/fluffy-bag-6-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.6 mod Melany',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffySeven,
      id: 7,
      imageName: './assets/homepage/fluffy-bag-7/fluffy-bag-7-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.7 mod. Matty',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyEight,
      id: 8,
      imageName: './assets/homepage/fluffy-bag-8/fluffy-bag-8-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.8 mod. Nur',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyNine,
      id: 9,
      imageName: './assets/homepage/fluffy-bag-9/fluffy-bag-9-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.9 mod. Patty',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyTen,
      id: 10,
      imageName: './assets/homepage/fluffy-bag-10/fluffy-bag-10-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.10 mod Nel',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyEleven,
      id: 11,
      imageName: './assets/homepage/fluffy-bag-11/fluffy-bag-11-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N:11 mod Tiger',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyTwelve,
      id: 12,
      imageName: './assets/homepage/fluffy-bag-12/fluffy-bag-12-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.12 mod Denny',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyThirteen,
      id: 13,
      imageName: './assets/homepage/fluffy-bag-13/fluffy-bag-13-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N:13 mod Prya',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyFourteen,
      id: 14,
      imageName: './assets/homepage/fluffy-bag-14/fluffy-bag-14-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.14 mod Loyal',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyFifteen,
      id: 15,
      imageName: './assets/homepage/fluffy-bag-15/fluffy-bag-15-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.15 mod Agata',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffySixteen,
      id: 16,
      imageName: './assets/homepage/fluffy-bag-16/fluffy-bag-16-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.16 mod Ada',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffySeventeen,
      id: 17,
      imageName: './assets/homepage/fluffy-bag-17/fluffy-bag-17-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.17 mod Pamela',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyEigtheen,
      id: 18,
      imageName: './assets/homepage/fluffy-bag-18/fluffy-bag-18-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.18 mod Rebecca',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyNineteen,
      id: 19,
      imageName: './assets/homepage/fluffy-bag-19/fluffy-bag-19-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.19 mod Mavi',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyTwenty,
      id: 20,
      imageName: './assets/homepage/fluffy-bag-20/fluffy-bag-20-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.20 mod Fushi',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyTwentyOne,
      id: 21,
      imageName: './assets/homepage/fluffy-bag-21/fluffy-bag-21-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.21 mod Irene',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyTwentyThree,
      id: 23,
      imageName: './assets/homepage/fluffy-bag-23/fluffy-bag-23-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.21 mod Jole',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyTwentyFour,
      id: 24,
      imageName: './assets/homepage/fluffy-bag-24/fluffy-bag-24-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.24 mod Bruna',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyTwentyFive,
      id: 25,
      imageName: './assets/homepage/fluffy-bag-25/fluffy-bag-25-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.25 mod Francesca',
      productDescription: ''
    },
    {
      pathName: FluffyBagDetailId.fluffyTwentySix,
      id: 26,
      imageName: './assets/homepage/fluffy-bag-26/fluffy-bag-26-uno.png',
      imageAlt: '',
      productName: 'Fluffy Bag N.26 mod Roby',
      productDescription: ''
    }
  ]

  constructor(public dataservice: DataManager, private router: Router) { }

  ngOnInit() {
  }

  onContactButtonClick(productName: string): void {
    window.location.href = `mailto:${`fluffybag.italy@gmail.com?subject=Prodotto: ${productName}`}`;
  }

  onProductTapped(productName: string): void {
    this.router.navigate(['/dettagli', productName]);
  }
}
