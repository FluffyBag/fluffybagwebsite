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

  fluffyBag = {} as FluffyBagDetail;

  hero: string | undefined; 

  constructor(public dataservice: DataManager, private _Activatedroute:ActivatedRoute) {}

  onContactButtonClick(productName: string): void {
    window.location.href = `mailto:${`fluffybag.italy@gmail.com?subject=Prodotto: ${productName}`}`;
  }
  
  ngOnInit() {
    window.scrollTo(0, 0);
    const fluffyBagId: FluffyBagDetailId = this._Activatedroute.snapshot.paramMap.get("id") as FluffyBagDetailId;
    console.log(fluffyBagId);
    
    switch (fluffyBagId) {
      case FluffyBagDetailId.fluffyOne:
        this.fluffyBag = {
          nome: 'Fluffy Bag 1 mod. Anna',
          imageName: './assets/homepage/fluffy-bag-1/fluffy-bag-1-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-1/fluffy-bag-1-due.png'
          ],
          descrizioneSinistra: 'Shopper in filcoupè dis.ramage. Colore :(verde/rosa) Tessuto made int Italy.',
          descrizioneDestra: 'Altezza cm 40 ,larghezza cm32. Pannello frontale in fil coupé ramage con lavorazione in rilievo, mentre il pannello posteriore è in satin trapuntato a riga verde Mility.Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.'
        }
        break;
      case FluffyBagDetailId.fluffyTwo:
        this.fluffyBag = {
          nome: 'Fluffy Bag 2 mod. Linda',
          imageName: './assets/homepage/fluffy-bag-2/fluffy-bag-2-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-2/fluffy-bag-2-due.png'
          ],
          descrizioneSinistra: 'Shopper in flower jacquard ,colore( turchese/nero su fondo nocciola Tessuto made in Italy',
          descrizioneDestra: 'Altezza cm 40, larghezza cm32. Pannello frontale in flore jacquard, mentre il pannello posteriore è in microfibra nera trapuntata a quadro. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è turchese. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.'
        } 
        break;
      case FluffyBagDetailId.fluffyFour:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.4 mod. Matilde',
          imageName: './assets/homepage/fluffy-bag-4/fluffy-bag-4-uno.png',
          moreImages: [
            
          ],
          descrizioneSinistra: 'Shopper in jacquard goffrato disegno vortice, colore (Verde oliva/panna e marrone terra) Tessuto made in Italy',
          descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard disegno vortice, mentre il pannello posteriore è satin trapuntato riga verde Mility. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è nero. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyFive:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.5 mod. Alex',
          imageName: './assets/homepage/fluffy-bag-6/fluffy-bag-5-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-6/fluffy-bag-5-due.png'
          ],
          descrizioneSinistra: 'Shopper in jacquard goffrato Black end white',
          descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard disegno geometrico puntato, mentre il pannello posteriore è realizzato in tessuto trapuntato dis. Spina pesce . La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è marrone. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
        case FluffyBagDetailId.fluffySix:
          this.fluffyBag = {
            nome: 'Fluffy Bag N.6 mod Melany',
            imageName: './assets/homepage/fluffy-bag-6/fluffy-bag-6-uno.png',
            moreImages: [
              './assets/homepage/fluffy-bag-6/fluffy-bag-6-due.png'
            ],
            descrizioneSinistra: 'Shopper realizzata in jacquard di seta originale Indonesiano . Colori; Fuxia petrolio convochi di giallo oro.',
            descrizioneDestra: 'Altezza cm 40, larghezza cm.32. Pannello frontale in jacquard con disegnature geometriche che creano delle righe irregolari , mentre il pannello del retro è realizzato in satin trapuntato aria color petrolio. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde Pavone. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Indonesia.',
          }
          break;
      case FluffyBagDetailId.fluffySeven:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.7 mod. Matty ',
          imageName: './assets/homepage/fluffy-bag-7/fluffy-bag-7-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-7/fluffy-bag-7-due.png',
            './assets/homepage/fluffy-bag-7/fluffy-bag-7-tre.png'
          ],
          descrizioneSinistra: 'Shopper in forest jacquard goffrato.Colore panna/moro e verde foresta. Tessuto made in Italy',
          descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32. Pannello frontale in forest jacquard , mentre il pannello posteriore è realizzato in satin. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è blu Cina. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyEight:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.8 mod. Nur',
          imageName: './assets/homepage/fluffy-bag-8/fluffy-bag-8-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-8/fluffy-bag-8-due.png'
          ],
          descrizioneSinistra: 'Shopper velvet Ikat geometrico 100% seta. Tessuto made in Turkey',
          descrizioneDestra: 'Altezza cm 40 ,larghezza cm32.Pannello frontale in velvet Ikat geometrico, mentre il pannello posteriore è in trapuntato Black disegno spina di pesce. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è viola. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Turkey.',
        }
        break;
      case FluffyBagDetailId.fluffyEleven:
        this.fluffyBag = {
          nome: 'Fluffy Bag N:11 mod Tiger',
          imageName: './assets/homepage/fluffy-bag-11/fluffy-bag-11-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-11/fluffy-bag-11-due.png',
            './assets/homepage/fluffy-bag-11/fluffy-bag-11-tre.png',
            './assets/homepage/fluffy-bag-11/fluffy-bag-11-quattro.png'
          ],
          descrizioneSinistra: 'Shopper in satin jacquard dis Tiger. Colore black end white con occhi gialli della tigre. Tessuto made in Italy',
          descrizioneDestra: 'Altezza cm 40, larghezza cm.32.Pannello frontale Jacquard dis. Tiger , mentre il pannello del retro in nylon trapuntato a spina di pesce . La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde foresta. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyTwelve:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.12 mod Denny.',
          imageName: './assets/homepage/fluffy-bag-12/fluffy-bag-12-uno.png',
          moreImages: [

          ],
          descrizioneSinistra: 'Shopper in satin Flower Black. Colore black end white . Tessuto made in Italy',
          descrizioneDestra: 'Altezza cm 40, larghezza cm.32.Pannello frontale satin nero con fiori stilizzati bianchi.dis , mentre il pannello del retro in microfibra nera trapuntato a quadro. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde petrolio. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        } 
        break;

      //
      // NEW HERE
      //
      case FluffyBagDetailId.fluffyThree:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.3 mod. Ily',
          imageName: './assets/homepage/fluffy-bag-3/fluffy-bag-3-uno.png',
          moreImages: [

          ],
          descrizioneSinistra: 'Shopper Bag in velvet Jacquard’,colore grigio/viola very pery colore dell’anno 2022',
          descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32.Pannello frontale in jacquard geometrico, mentre il pannello posteriore è in satin trapuntato a quadro nero La borsa è interamente imbottita con ovatta morbida. Il fiocco in velluto è grigio perla. Manici imbottiti H.12 cm Tracolla imbottita lungh.a.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto made in (UK)',
        }
        break;
      case FluffyBagDetailId.fluffyNine:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.9 mod. Patty',
          imageName: './assets/homepage/fluffy-bag-9/fluffy-bag-9-uno.png',
          moreImages: [

          ],
          descrizioneSinistra: 'Shopper in satin Silver flower .Colore , fondo silver con rose e foglie nere .',
          descrizioneDestra: 'Altezza cm 40, larghezza cm.32. Pannello frontale satin silver con fiori e rose stilizzate , mentre il pannello del retro è in nylon nero trapuntato a spina di pesce. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde viola. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyThirteen:
        this.fluffyBag = {
          nome: 'Fluffy Bag N:13 mod Prya',
          imageName: './assets/homepage/fluffy-bag-13/fluffy-bag-13-uno.png',
          moreImages: [

          ],
          descrizioneSinistra: 'Shopper velvet Ikat pop wave  100% seta. Colore: Fondo giallo oro con pois neri e effetti onda blu pavone. Tessuto made in Turkey',
          descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32.Pannello frontale in velvet Ikat dis Pop , mentre il pannello posteriore è realizzato in trapuntato Black disegno spina di pesce. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è blu petrolio. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Turkey.',
        }
        break;
      case FluffyBagDetailId.fluffyFourteen:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.14 mod Loyal',
          imageName: './assets/homepage/fluffy-bag-14/fluffy-bag-14-uno.png',
          moreImages: [

          ],
          descrizioneSinistra: 'Shopper realizzata in  Ikat shantung 100%seta. . Colori: Verde prato/Rosso cardinale grigio chiaro.',
          descrizioneDestra: 'Altezza cm 40, larghezza cm.32. Pannello frontale in jacquard con disegno tipico dei tessuti Ikat .La disegnata grafica rappresenta dei fiori stilizzati, mentre il pannello del retro è realizzato in satin trapuntato a righe diagonali color granata. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde prato. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Turkey.', 
        }
        break;
      case FluffyBagDetailId.fluffyFifteen:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.15 mod White butterflay',
          imageName: './assets/homepage/fluffy-bag-15/fluffy-bag-12-uno.png',
          moreImages: [

          ],
          descrizioneSinistra: 'Shopper realizzata in jacquard che porta come disegnatura un’ala di farfalla. Colori: Fondo bianco con punzonature nere eun’ ala di farfalla nera.',
          descrizioneDestra: 'Altezza cm 40, larghezza cm.32. Pannello frontale in jacquard con disegnatura ad ala di farfalla , mentre il pannello del retro è realizzato in nylon nero trapuntato a spina di pesce. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è blu elettrico . Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.', 
        }
        break;
      case FluffyBagDetailId.fluffySixteen:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.16 mod Black butterflay',
          imageName: './assets/homepage/fluffy-bag-16/fluffy-bag-12-uno.png',
          moreImages: [

          ],
          descrizioneSinistra: 'Shopper realizzata in jacquard che porta come disegnatura un’ala di farfalla. Colori: Fondo black con punzonature bianche eun’ ala di farfalla bianca.',
          descrizioneDestra: 'Altezza cm 40, larghezza cm.32. Pannello frontale in jacquard con disegnatura ad ala di farfalla , mentre il pannello del retro è realizzato in nylon nero trapuntato a spina di pesce. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è ciclamino . Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.', 
        }
        break;
      case FluffyBagDetailId.fluffyTen:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.10 mod Nel',
          imageName: './assets/homepage/fluffy-bag-10/fluffy-bag-10-uno.png',
          moreImages: [

          ],
          descrizioneSinistra: 'Shopper realizzata in velvet Ikat100% seta multicolor . Colori;  fondo crema condisegnature a rombo bordeaux, blu e verde acqua.',
          descrizioneDestra: 'ltezza cm 40, larghezza cm.32. Pannello frontale in velvet multicolor ja disegnature geometriche che creano dei rombi , mentre il pannello del retro è realizzato in satin trapuntato a quadro color blu Navy. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde Pavone. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Turkey.',
        }
        break;
    }
  }
}

type FluffyBagDetail = {
  nome: string;
  imageName: string;
  moreImages: string[];
  descrizioneSinistra: string;
  descrizioneDestra: string;
};