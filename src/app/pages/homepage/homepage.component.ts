import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  productStructure = [
    {
      id: 1,
      imageName: './assets/homepage/photo_1.jpg',
      imageAlt: '',
      productName: 'Foto 1',
      productDescription: ''
    },
    {
      id: 2,
      imageName: './assets/homepage/photo_2.jpg',
      imageAlt: '',
      productName: 'Foto 2',
      productDescription: ''
    },
    {
      id: 3,
      imageName: './assets/homepage/photo_3.jpg',
      imageAlt: '',
      productName: 'Foto 3',
      productDescription: ''
    },
    {
      id: 4,
      imageName: './assets/homepage/photo_4.jpg',
      imageAlt: '',
      productName: 'Foto 1',
      productDescription: ''
    },
    {
      id: 5,
      imageName: './assets/homepage/photo_5.jpg',
      imageAlt: '',
      productName: 'Foto 2',
      productDescription: ''
    },
    {
      id: 6,
      imageName: './assets/homepage/photo_6.jpg',
      imageAlt: '',
      productName: 'Foto 3',
      productDescription: ''
    },
    {
      id: 7,
      imageName: './assets/homepage/photo_7.jpg',
      imageAlt: '',
      productName: 'Foto 1',
      productDescription: ''
    },
    {
      id: 8,
      imageName: './assets/homepage/photo_8.jpg',
      imageAlt: '',
      productName: 'Foto 2',
      productDescription: ''
    },
    {
      id: 9,
      imageName: './assets/homepage/photo_9.jpg',
      imageAlt: '',
      productName: 'Foto 3',
      productDescription: ''
    },
    {
      id: 11,
      imageName: './assets/homepage/photo_11.jpg',
      imageAlt: '',
      productName: 'Foto 2',
      productDescription: ''
    },
    {
      id: 12,
      imageName: './assets/homepage/photo_12.jpg',
      imageAlt: '',
      productName: 'Foto 3',
      productDescription: ''
    },
    {
      id: 13,
      imageName: './assets/homepage/photo_13.jpg',
      imageAlt: '',
      productName: 'Foto 1',
      productDescription: ''
    },
    {
      id: 14,
      imageName: './assets/homepage/photo_14.jpg',
      imageAlt: '',
      productName: 'Foto 2',
      productDescription: ''
    },
    {
      id: 15,
      imageName: './assets/homepage/photo_15.jpg',
      imageAlt: '',
      productName: 'Foto 3',
      productDescription: ''
    },
    {
      id: 16,
      imageName: './assets/homepage/photo_16.jpg',
      imageAlt: '',
      productName: 'Foto 1',
      productDescription: ''
    },
    {
      id: 17,
      imageName: './assets/homepage/photo_17.jpg',
      imageAlt: '',
      productName: 'Foto 2',
      productDescription: ''
    },
    {
      id: 18,
      imageName: './assets/homepage/photo_18.jpg',
      imageAlt: '',
      productName: 'Foto 3',
      productDescription: ''
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onContactButtonClick(): void {
    window.location.href = `mailto:${'info@iconarredamenti.it?subject=Icona arredamenti contattaci!'}`;
  }
}
