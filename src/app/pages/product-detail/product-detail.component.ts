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

  constructor(public dataservice: DataManager, private _Activatedroute: ActivatedRoute) { }

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
            './assets/homepage/fluffy-bag-1/fluffy-bag-1-due.png',
            './assets/homepage/fluffy-bag-1/fluffy-bag-1-tre.png'
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
      case FluffyBagDetailId.fluffyThree:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.3 mod. Ily',
          imageName: './assets/homepage/fluffy-bag-3/fluffy-bag-3-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-3/fluffy-bag-3-due.png',
            './assets/homepage/fluffy-bag-3/fluffy-bag-3-tre.png'
          ],
          descrizioneSinistra: 'Shopper Bag in velvet Jacquard’,colore grigio/viola very pery colore dell’anno 2022',
          descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32.Pannello frontale in jacquard geometrico, mentre il pannello posteriore è in satin trapuntato a quadro nero La borsa è interamente imbottita con ovatta morbida. Il fiocco in velluto è grigio perla. Manici imbottiti H.12 cm Tracolla imbottita lungh.a.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto made in (UK)',
        }
        break;
      case FluffyBagDetailId.fluffyFour:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.4 mod. Matilde',
          imageName: './assets/homepage/fluffy-bag-4/fluffy-bag-4-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-4/fluffy-bag-4-due.png'
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
          nome: 'Fluffy Bag N.7 mod. Matty',
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
      case FluffyBagDetailId.fluffyNine:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.9 mod. Patty',
          imageName: './assets/homepage/fluffy-bag-9/fluffy-bag-9-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-9/fluffy-bag-9-due.png'
          ],
          descrizioneSinistra: 'Shopper in satin Silver flower .Colore , fondo silver con rose e foglie nere .',
          descrizioneDestra: 'Altezza cm 40, larghezza cm.32. Pannello frontale satin silver con fiori e rose stilizzate , mentre il pannello del retro è in nylon nero trapuntato a spina di pesce. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde viola. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyTen:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.10 mod Nel',
          imageName: './assets/homepage/fluffy-bag-10/fluffy-bag-10-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-10/fluffy-bag-10-due.png',
            './assets/homepage/fluffy-bag-10/fluffy-bag-10-tre.png',
            './assets/homepage/fluffy-bag-10/fluffy-bag-10-quattro.png'
          ],
          descrizioneSinistra: 'Shopper realizzata in velvet Ikat100% seta multicolor . Colori;  fondo crema condisegnature a rombo bordeaux, blu e verde acqua.',
          descrizioneDestra: 'ltezza cm 40, larghezza cm.32. Pannello frontale in velvet multicolor ja disegnature geometriche che creano dei rombi , mentre il pannello del retro è realizzato in satin trapuntato a quadro color blu Navy. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde Pavone. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Turkey.',
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
      case FluffyBagDetailId.fluffyThirteen:
        this.fluffyBag = {
          nome: 'Fluffy Bag N:13 mod Prya',
          imageName: './assets/homepage/fluffy-bag-13/fluffy-bag-13-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-13/fluffy-bag-13-due.png',
            './assets/homepage/fluffy-bag-13/fluffy-bag-13-tre.png',
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
            './assets/homepage/fluffy-bag-14/fluffy-bag-14-due.png',
            './assets/homepage/fluffy-bag-14/fluffy-bag-14-tre.png'
          ],
          descrizioneSinistra: 'Shopper realizzata in  Ikat shantung 100%seta. . Colori: Verde prato/Rosso cardinale grigio chiaro.',
          descrizioneDestra: 'Altezza cm 40, larghezza cm.32. Pannello frontale in jacquard con disegno tipico dei tessuti Ikat .La disegnata grafica rappresenta dei fiori stilizzati, mentre il pannello del retro è realizzato in satin trapuntato a righe diagonali color granata. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde prato. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Turkey.',
        }
        break;
      case FluffyBagDetailId.fluffyFifteen:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.15 mod White butterflay',
          imageName: './assets/homepage/fluffy-bag-15/fluffy-bag-15-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-15/fluffy-bag-15-due.png',
            './assets/homepage/fluffy-bag-15/fluffy-bag-15-tre.png'
          ],
          descrizioneSinistra: 'Shopper realizzata in jacquard che porta come disegnatura un’ala di farfalla. Colori: Fondo bianco con punzonature nere eun’ ala di farfalla nera.',
          descrizioneDestra: 'Altezza cm 40, larghezza cm.32. Pannello frontale in jacquard con disegnatura ad ala di farfalla , mentre il pannello del retro è realizzato in nylon nero trapuntato a spina di pesce. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è blu elettrico . Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffySixteen:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.16 mod Ada dis.black butterflay tessuto jacquard bianco e nero. made in Italy',
          imageName: './assets/homepage/fluffy-bag-16/fluffy-bag-16-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-16/fluffy-bag-16-due.png',
            './assets/homepage/fluffy-bag-16/fluffy-bag-16-tre.png'
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard che disegna un’ala di farfalla con lavorazione in rilievo, mentre il pannello posteriore è in nylon nero trapuntato a spina di pesce .',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffySeventeen:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.17 mod pamela dis the mask tessuto jacquard disegno multicolor ( rosso tropea/azzurro ) made in Italy',
          imageName: './assets/homepage/fluffy-bag-17/fluffy-bag-17-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-17/fluffy-bag-17-due.png',
            './assets/homepage/fluffy-bag-17/fluffy-bag-17-tre.png',
            './assets/homepage/fluffy-bag-17/fluffy-bag-17-quattro.png'
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA. Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard multicolor raffigurante un patch di maschere che si intrecciano con disegnature geometriche, mentre il pannello posteriore è in nylon operato rosso cipolla di Tropea.',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyEigtheen:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.18 mod.rebecca dis.farfalle multicolor tessuto jacquard maldive multicolor ( nero/rosa/azzurro ) made in Italy',
          imageName: './assets/homepage/fluffy-bag-18/fluffy-bag-18-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-18/fluffy-bag-18-due.png',
            './assets/homepage/fluffy-bag-18/fluffy-bag-18-tre.png',
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA. Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato raffigurante un patch di farfalle colorate, mentre il pannello posteriore è in nylon nero trapuntato a riga rosa fragola.',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyNineteen:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.19 mod Mavi dis.tie ad dye tessuto jacquard bianco e blu denim. made in Italy',
          imageName: './assets/homepage/fluffy-bag-19/fluffy-bag-19-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-19/fluffy-bag-19-due.png',
            './assets/homepage/fluffy-bag-19/fluffy-bag-19-tre.png',
            './assets/homepage/fluffy-bag-19/fluffy-bag-19-quattro.png'
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard con disegnata Tie ad dye, mentre il pannello posteriore è in nylon blu Navy trapuntato a rettangolo .',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyTwenty:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.20 mod Fushi Dis Palme Tropicali tessuto jacquard multicolor .( verde/azzurro e arancio) made in Italy',
          imageName: './assets/homepage/fluffy-bag-20/fluffy-bag-20-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-20/fluffy-bag-20-due.png',
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA. Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard raffigurante delle palme tropicali,mentre il pannello posteriore è in nylon arancio trapuntato a rombo .',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyTwentyOne:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.21 mod. Irene dis. golden end green tessuto jacquard goffrato(verde /oro e rosso rubino) made in Italy',
          imageName: './assets/homepage/fluffy-bag-21/fluffy-bag-21-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-21/fluffy-bag-21-due.png',
            './assets/homepage/fluffy-bag-21/fluffy-bag-21-tre.png',
            './assets/homepage/fluffy-bag-21/fluffy-bag-21-quattro.png',
            './assets/homepage/fluffy-bag-21/fluffy-bag-21-cinque.png'
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard balzing raffigurante un effetto onda stilizzato, mentre il pannello posteriore è in ecopelle gold trapuntato a cipolla.',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyTwentyThree:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.23 mod Jole dis. Tartan tessuto jacquard verde bandiera/ giallo e blu cina. made in Italy',
          imageName: './assets/homepage/fluffy-bag-23/fluffy-bag-23-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-23/fluffy-bag-23-due.png'
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA. Altezza cm 42 ,larghezza cm 30. Pannello frontale in jacquard un paesaggio tropicale con palme, mentre il pannello posteriore è in nylon verde petrolio trapuntato a riga.',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyTwentyFour:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.24 mod Bruna dis.spring flowers tessuto jacquard grifio perla con fiori rosa pesca e giallolimeamade in italy',
          imageName: './assets/homepage/fluffy-bag-24/fluffy-bag-24-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-24/fluffy-bag-24-due.png',
            './assets/homepage/fluffy-bag-24/fluffy-bag-24-tre.png'
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA. Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard sottile con fiori delicati, mentre il pannello posteriore è in satin imbottito grigio perla .',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico ricoperto in raso interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyTwentyFive:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.25 mod Francesca dis.parrot multicolor tessuto jacquard goffrato multicolor,(silver/azzurro/rosso granata e giallo ) made in Italy',
          imageName: './assets/homepage/fluffy-bag-25/fluffy-bag-25-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-25/fluffy-bag-25-due.png',
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA. Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato con una fantasia di righe e pappagalli, mentre il pannello posteriore è in nylon satinato rosso granata.',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyTwentySix:
        this.fluffyBag = {
          nome: 'Fluffy Bag N.26 mod Roby dis.foglie grafiche tessuto jacquard ( nero/rosa/azzurro e giallino) made in italy',
          imageName: './assets/homepage/fluffy-bag-26/fluffy-bag-26-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-26/fluffy-bag-26-due.png',
            './assets/homepage/fluffy-bag-26/fluffy-bag-26-tre.png',
            './assets/homepage/fluffy-bag-26/fluffy-bag-26-quattro.png',
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato raffigurante un patch di foglie grafiche, mentre il pannello posteriore è in nylon nero trapuntato a quadro.',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        }
        break;







      case FluffyBagDetailId.fluffyThirty:
        this.fluffyBag = {
          nome: 'N.30 FLUFFY MOD. Luce DIS. ramage embroidered TESSUTO JACQUARD ( light grey ) MADE IN ITALY',
          imageName: './assets/homepage/fluffy-bag-30/fluffy-bag-30-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-30/fluffy-bag-30-due.png',
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard ramage ricamato a mano. raffigurante un ramo con fiori primaverili e foglie. il pannello posteriore è in tessuto laminato silver.',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso è cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy',
        }
        break;
      case FluffyBagDetailId.fluffyThirtyOne:
        this.fluffyBag = {
          nome: 'N.31 FLUFFY MOD. Licia DIS. ramage embroidered TESSUTO JACQUARD (lillac/pink) MADE IN ITALY',
          imageName: './assets/homepage/fluffy-bag-31/fluffy-bag-31-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-31/fluffy-bag-31-due.png'
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard ramage ricamato a mano. raffigurante un ramo con fiori primaverili e foglie. il pannello posteriore è in tessuto laminato pink.',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso è cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy',
        }
        break;
      case FluffyBagDetailId.fluffyThirtyTwo:
        this.fluffyBag = {
          nome: 'N.32 FLUFFY MOD.Karim DIS. ramage embroidered TESSUTO JACQUARD (Yellow ,salmone, orange and Green) MADE IN ITALY',
          imageName: './assets/homepage/fluffy-bag-32/fluffy-bag-32-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-32/fluffy-bag-32-due.png',
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard floreale ricamato a mano. raffigurante fiori foglie multicolor nelle tonalità pastello. il pannello posteriore è in tessuto laminato yellow.',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso è cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy',
        }
        break;
      case FluffyBagDetailId.fluffyThirtyThree:
        this.fluffyBag = {
          nome: 'N.33 FLUFFY MOD.Daria DIS. ramage embroidered TESSUTO JACQUARD (camel with touches of purple bello and orange ) MADE IN ITALY',
          imageName: './assets/homepage/fluffy-bag-33/fluffy-bag-33-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-33/fluffy-bag-33-due.png'
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard ramage ricamato a mano. raffigurante un ramo con fiori primaverili e foglie. il pannello posteriore è in tessuto laminato yellow.',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso è cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyThirtyFour:
        this.fluffyBag = {
          nome: 'N.34 FLUFFY MOD.Ambra DIS.Parrot silver TESSUTO JACQUARD goffrato con palme e pappagalli ( Silver Gray , pink and corale red. MADE IN ITALY',
          imageName: './assets/homepage/fluffy-bag-34/fluffy-bag-34-uno.png',
          moreImages: [
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato. raffigurante una fantasia di palme e pappagalli. il pannello posteriore è in tessuto laminato light pink.',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso è cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyThirtyFive:
        this.fluffyBag = {
          nome: 'N.35 FLUFFY MOD.Prisca DIS .Decor Flowers TESSUTO JACQUARD degradèe (Lemon yellow and tangerine ) MADE IN ITALY',
          imageName: './assets/homepage/fluffy-bag-35/fluffy-bag-35-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-35/fluffy-bag-35-due.png',
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato. raffigurante una fantasia con decorazioni astratte . il pannello posteriore è in nylon impalpabile yellow.',
          descrizioneDestra: 'La borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso e cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyThirtySix:
        this.fluffyBag = {
          nome: 'N.36 FLUFFY MOD.Fede DIS Jacquards Ramage embroidered TESSUTO JACQUARD (Yellow,salmone orange and Green ) Made in Italy',
          imageName: './assets/homepage/fluffy-bag-36/fluffy-bag-36-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-36/fluffy-bag-36-due.png',
            './assets/homepage/fluffy-bag-36/fluffy-bag-36-tre.png',
          ],
          descrizioneSinistra: 'SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato. raffigurante una fantasia con decorazioni astratte .La borsa è ricamata a mano con canutiglie di vetro. il pannello posteriore è in nylon impalpabile grey',
          descrizioneDestra: 'La borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso e cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyThirtySeven:
        this.fluffyBag = {
          nome: 'N.37 FLUFFY MOD. Josè DIS Macro.Decor Flowers TESSUTO JACQUARD (Light pink end Gray ) MADE IN ITALY',
          imageName: './assets/homepage/fluffy-bag-37/fluffy-bag-37-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-37/fluffy-bag-37-due.png',
            './assets/homepage/fluffy-bag-37/fluffy-bag-37-tre.png',
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato. raffigurante una fantasia con decorazioni astratte . il pannello posteriore è in nylon impalpabile Grey.',
          descrizioneDestra: 'La borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso e cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyThirtyEight:
        this.fluffyBag = {
          nome: 'N.38 FLUFFY MOD.Thierry. DIS .Decor Flowers TESSUTO JACQUARD con fiori e foglie (Lilla base with light blue and tabacco) MADE IN ITALY',
          imageName: './assets/homepage/fluffy-bag-38/fluffy-bag-38-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-38/fluffy-bag-38-due.png',
            './assets/homepage/fluffy-bag-38/fluffy-bag-38-tre.png',
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato. raffigurante una fantasia con fiori e foglie dai toni pastelli. il pannello posteriore è in nylon impalpabile gray.',
          descrizioneDestra: 'La borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso e cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyThirtyNine:
        this.fluffyBag = {
          nome: 'N.39 FLUFFY MOD.Sacha . DIS .Decor flower. TESSUTO JACQUARD flowerpot (blue and camel) MADE IN ITALY',
          imageName: './assets/homepage/fluffy-bag-39/fluffy-bag-39-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-39/fluffy-bag-39-due.png',
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato. raffigurante una fantasia con fiori e foglie dai toni pastelli. il pannello posteriore è in nylon impalpabile camel',
          descrizioneDestra: 'La borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso e cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',
        }
        break;
      case FluffyBagDetailId.fluffyForty:
        this.fluffyBag = {
          nome: 'N.40 FLUFFY MOD.Peggy. DIS .Decor Flowers TESSUTO JACQUARD decori grafici (amarant.pink) MADE IN ITALY',
          imageName: './assets/homepage/fluffy-bag-40/fluffy-bag-40-uno.png',
          moreImages: [
            './assets/homepage/fluffy-bag-40/fluffy-bag-40-due.png',
            './assets/homepage/fluffy-bag-40/fluffy-bag-40-tre.png',
          ],
          descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato. raffigurante una fantasia con fiori e foglie dai toni pastelli. il pannello posteriore è in nylon impalpabile light pink',
          descrizioneDestra: 'La borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso e cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',
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