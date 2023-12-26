
export interface ProductDetail {
    pathName: string,
    id: number,
    imageName: string,
    imageAlt: string,
    productName: string,
    isSoldOut: boolean,
    type: BagsFilterEnum,
    moreImages: string[],
    descrizioneSinistra: string,
    descrizioneDestra: string
}

export enum BagsFilterEnum {
    All = 'Tutte',
    Jaquard = 'Jaquard',
    Ikat = 'Ikat',
    Foulard = 'Foulard',
    LuisaAmatori = 'LuisaAmatori',
    Mini = 'Mini'
}

export class DataManager {

    public selectedFluffyBag: string = '';

    public productStructure: ProductDetail[] = [
        {
            pathName: 'fluffyBagDue',
            id: 2,
            imageName: './assets/homepage/fluffy-bag-2/fluffy-bag-2-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Linda',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-2/fluffy-bag-2-due.png'
            ],
            descrizioneSinistra: 'Shopper in flower jacquard ,colore( turchese/nero su fondo nocciola Tessuto made in Italy',
            descrizioneDestra: 'Altezza cm 40, larghezza cm32. Pannello frontale in flore jacquard, mentre il pannello posteriore è in microfibra nera trapuntata a quadro. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è turchese. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.'
        },
        {
            pathName: 'fluffyBagCinque',
            id: 5,
            imageName: './assets/homepage/fluffy-bag-5/fluffy-bag-5-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Alex',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-6/fluffy-bag-5-due.png'
            ],
            descrizioneSinistra: 'Shopper in jacquard goffrato Black end white',
            descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard disegno geometrico puntato, mentre il pannello posteriore è realizzato in tessuto trapuntato dis. Spina pesce . La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è marrone. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagSette',
            id: 7,
            imageName: './assets/homepage/fluffy-bag-7/fluffy-bag-7-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Matty',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-7/fluffy-bag-7-due.png',
                './assets/homepage/fluffy-bag-7/fluffy-bag-7-tre.png'
            ],
            descrizioneSinistra: 'Shopper in forest jacquard goffrato.Colore panna/moro e verde foresta. Tessuto made in Italy',
            descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32. Pannello frontale in forest jacquard , mentre il pannello posteriore è realizzato in satin. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è blu Cina. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagOtto',
            id: 8,
            imageName: './assets/homepage/fluffy-bag-8/fluffy-bag-8-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Nur',
            isSoldOut: true,
            type: BagsFilterEnum.Ikat,
            moreImages: [
                './assets/homepage/fluffy-bag-8/fluffy-bag-8-due.png'
            ],
            descrizioneSinistra: 'Shopper velvet Ikat geometrico 100% seta. Tessuto made in Turkey',
            descrizioneDestra: 'Altezza cm 40 ,larghezza cm32.Pannello frontale in velvet Ikat geometrico, mentre il pannello posteriore è in trapuntato Black disegno spina di pesce. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è viola. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Turkey.',
        },
        {
            pathName: 'fluffyBagNove',
            id: 9,
            imageName: './assets/homepage/fluffy-bag-9/fluffy-bag-9-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Patty',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-9/fluffy-bag-9-due.png'
            ],
            descrizioneSinistra: 'Shopper in satin Silver flower .Colore , fondo silver con rose e foglie nere .',
            descrizioneDestra: 'Altezza cm 40, larghezza cm.32. Pannello frontale satin silver con fiori e rose stilizzate , mentre il pannello del retro è in nylon nero trapuntato a spina di pesce. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde viola. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagDieci',
            id: 10,
            imageName: './assets/homepage/fluffy-bag-10/fluffy-bag-10-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Nel',
            isSoldOut: true,
            type: BagsFilterEnum.Ikat,
            moreImages: [
                './assets/homepage/fluffy-bag-10/fluffy-bag-10-due.png',
                './assets/homepage/fluffy-bag-10/fluffy-bag-10-tre.png',
                './assets/homepage/fluffy-bag-10/fluffy-bag-10-quattro.png'
            ],
            descrizioneSinistra: 'Shopper realizzata in velvet Ikat100% seta multicolor . Colori;  fondo crema condisegnature a rombo bordeaux, blu e verde acqua.',
            descrizioneDestra: 'ltezza cm 40, larghezza cm.32. Pannello frontale in velvet multicolor ja disegnature geometriche che creano dei rombi , mentre il pannello del retro è realizzato in satin trapuntato a quadro color blu Navy. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde Pavone. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Turkey.',
        },
        {
            pathName: 'fluffyBagUndici',
            id: 11,
            imageName: './assets/homepage/fluffy-bag-11/fluffy-bag-11-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Tiger',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-11/fluffy-bag-11-due.png',
                './assets/homepage/fluffy-bag-11/fluffy-bag-11-tre.png',
                './assets/homepage/fluffy-bag-11/fluffy-bag-11-quattro.png'
            ],
            descrizioneSinistra: 'Shopper in satin jacquard dis Tiger. Colore black end white con occhi gialli della tigre. Tessuto made in Italy',
            descrizioneDestra: 'Altezza cm 40, larghezza cm.32.Pannello frontale Jacquard dis. Tiger , mentre il pannello del retro in nylon trapuntato a spina di pesce . La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde foresta. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagDodici',
            id: 12,
            imageName: './assets/homepage/fluffy-bag-12/fluffy-bag-12-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Denny',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard,
            moreImages: [

            ],
            descrizioneSinistra: 'Shopper in satin Flower Black. Colore black end white . Tessuto made in Italy',
            descrizioneDestra: 'Altezza cm 40, larghezza cm.32.Pannello frontale satin nero con fiori stilizzati bianchi.dis , mentre il pannello del retro in microfibra nera trapuntato a quadro. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde petrolio. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagQuindici',
            id: 15,
            imageName: './assets/homepage/fluffy-bag-15/fluffy-bag-15-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Agata',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-15/fluffy-bag-15-due.png',
                './assets/homepage/fluffy-bag-15/fluffy-bag-15-tre.png'
              ],
              descrizioneSinistra: 'Shopper realizzata in jacquard che porta come disegnatura un’ala di farfalla. Colori: Fondo bianco con punzonature nere eun’ ala di farfalla nera.',
              descrizioneDestra: 'Altezza cm 40, larghezza cm.32. Pannello frontale in jacquard con disegnatura ad ala di farfalla , mentre il pannello del retro è realizzato in nylon nero trapuntato a spina di pesce. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è blu elettrico . Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagSedici',
            id: 16,
            imageName: './assets/homepage/fluffy-bag-16/fluffy-bag-16-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Ada',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-16/fluffy-bag-16-due.png',
                './assets/homepage/fluffy-bag-16/fluffy-bag-16-tre.png'
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard che disegna un’ala di farfalla con lavorazione in rilievo, mentre il pannello posteriore è in nylon nero trapuntato a spina di pesce .',
              descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagDiciannove',
            id: 19,
            imageName: './assets/homepage/fluffy-bag-19/fluffy-bag-19-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Mavi',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-19/fluffy-bag-19-due.png',
                './assets/homepage/fluffy-bag-19/fluffy-bag-19-tre.png',
                './assets/homepage/fluffy-bag-19/fluffy-bag-19-quattro.png'
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard con disegnata Tie ad dye, mentre il pannello posteriore è in nylon blu Navy trapuntato a rettangolo .',
              descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagVenti',
            id: 20,
            imageName: './assets/homepage/fluffy-bag-20/fluffy-bag-20-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Fushi',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-20/fluffy-bag-20-due.png',
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA. Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard raffigurante delle palme tropicali,mentre il pannello posteriore è in nylon arancio trapuntato a rombo .',
              descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagTrenta',
            id: 30,
            imageName: './assets/homepage/fluffy-bag-30/fluffy-bag-30-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Luce',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori,
            moreImages: [
                './assets/homepage/fluffy-bag-30/fluffy-bag-30-due.png',
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard ramage ricamato a mano. raffigurante un ramo con fiori primaverili e foglie. il pannello posteriore è in tessuto laminato silver.',
              descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso è cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy',    
        },
        {
            pathName: 'fluffyBagTrentuno',
            id: 31,
            imageName: './assets/homepage/fluffy-bag-31/fluffy-bag-31-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Licia',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori,
            moreImages: [
                './assets/homepage/fluffy-bag-31/fluffy-bag-31-due.png'
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard ramage ricamato a mano. raffigurante un ramo con fiori primaverili e foglie. il pannello posteriore è in tessuto laminato pink.',
              descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso è cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy',    
        },
        {
            pathName: 'fluffyBagTrentadue',
            id: 32,
            imageName: './assets/homepage/fluffy-bag-32/fluffy-bag-32-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Karim',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori,
            moreImages: [
                './assets/homepage/fluffy-bag-32/fluffy-bag-32-due.png',
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard floreale ricamato a mano. raffigurante fiori foglie multicolor nelle tonalità pastello. il pannello posteriore è in tessuto laminato yellow.',
              descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso è cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy',    
        },
        {
            pathName: 'fluffyBagTrentatre',
            id: 33,
            imageName: './assets/homepage/fluffy-bag-33/fluffy-bag-33-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Daria',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori,
            moreImages: [
                './assets/homepage/fluffy-bag-33/fluffy-bag-33-due.png'
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard ramage ricamato a mano. raffigurante un ramo con fiori primaverili e foglie. il pannello posteriore è in tessuto laminato yellow.',
              descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso è cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',    
        },
        {
            pathName: 'fluffyBagTrentaquattro',
            id: 34,
            imageName: './assets/homepage/fluffy-bag-34/fluffy-bag-34-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Ambra',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori,
            moreImages: [
            ],
            descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato. raffigurante una fantasia di palme e pappagalli. il pannello posteriore è in tessuto laminato light pink.',
            descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso è cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',  
        },
        {
            pathName: 'fluffyBagTrentacinque',
            id: 35,
            imageName: './assets/homepage/fluffy-bag-35/fluffy-bag-35-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Prisca',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori,
            moreImages: [
                './assets/homepage/fluffy-bag-35/fluffy-bag-35-due.png',
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato. raffigurante una fantasia con decorazioni astratte . il pannello posteriore è in nylon impalpabile yellow.',
              descrizioneDestra: 'La borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso e cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',    
        },
        {
            pathName: 'fluffyBagTrentasei',
            id: 36,
            imageName: './assets/homepage/fluffy-bag-36/fluffy-bag-36-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Fede',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori,
            moreImages: [
                './assets/homepage/fluffy-bag-36/fluffy-bag-36-due.png',
                './assets/homepage/fluffy-bag-36/fluffy-bag-36-tre.png',
              ],
              descrizioneSinistra: 'SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato. raffigurante una fantasia con decorazioni astratte .La borsa è ricamata a mano con canutiglie di vetro. il pannello posteriore è in nylon impalpabile grey',
              descrizioneDestra: 'La borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso e cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',    
        },
        {
            pathName: 'fluffyBagTrentasette',
            id: 37,
            imageName: './assets/homepage/fluffy-bag-37/fluffy-bag-37-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Josè',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori,
            moreImages: [
                './assets/homepage/fluffy-bag-37/fluffy-bag-37-due.png',
                './assets/homepage/fluffy-bag-37/fluffy-bag-37-tre.png',
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato. raffigurante una fantasia con decorazioni astratte . il pannello posteriore è in nylon impalpabile Grey.',
              descrizioneDestra: 'La borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso e cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',    
        },
        {
            pathName: 'fluffyBagTrentotto',
            id: 38,
            imageName: './assets/homepage/fluffy-bag-38/fluffy-bag-38-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Thierry.',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori,
            moreImages: [
                './assets/homepage/fluffy-bag-38/fluffy-bag-38-due.png',
                './assets/homepage/fluffy-bag-38/fluffy-bag-38-tre.png',
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato. raffigurante una fantasia con fiori e foglie dai toni pastelli. il pannello posteriore è in nylon impalpabile gray.',
              descrizioneDestra: 'La borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso e cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',    
        },
        {
            pathName: 'fluffyBagQuaranta',
            id: 40,
            imageName: './assets/homepage/fluffy-bag-40/fluffy-bag-40-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Peggy',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori,
            moreImages: [
            './assets/homepage/fluffy-bag-40/fluffy-bag-40-due.png',
            './assets/homepage/fluffy-bag-40/fluffy-bag-40-tre.png',
          ],
            descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato. raffigurante una fantasia con fiori e foglie dai toni pastelli. il pannello posteriore è in nylon impalpabile light pink',
            descrizioneDestra: 'La borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso e cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',
        },
        {
            pathName: 'fluffyBagCinquanta',
            id: 50,
            imageName: './assets/homepage/fluffy-bag-50/fluffy-bag-50-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Angelina',
            isSoldOut: false,
            type: BagsFilterEnum.Foulard,
            moreImages: [
            './assets/homepage/fluffy-bag-50/fluffy-bag-50-due.png',
            './assets/homepage/fluffy-bag-50/fluffy-bag-50-tre.png',
            ],
            descrizioneSinistra: 'Shopper intessuto Ikat blu Cina/bianco con frangia di raffia rossa ai lati (Ikat con fondo bianco e motivi blu Cina) Tessuto Ikat è made in Turkey, mentre il resto dei tessuti sono Italy',
            descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32 Pannello frontale in tessuto ikat di misto seta, mentre il pannello posteriore è in rete bianca e nylon La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è multicolore e riprende le tonalità del tessuto fantasia. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in/Turkey/ Italy.'
        },
        {
            pathName: 'fluffyBagCinquantuno',
            id: 51,
            imageName: './assets/homepage/fluffy-bag-51/fluffy-bag-51-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Eloise',
            isSoldOut: false,
            type: BagsFilterEnum.Foulard,
            moreImages: [
            './assets/homepage/fluffy-bag-51/fluffy-bag-51-due.png',
            ],
            descrizioneSinistra: 'Shopper intessuto Ikat con motivi arancio e blu Cina su fondo bianco e frangia di raffia blu sui due lati (Ikat con fondo bianco e motivi blu Cina e arancio) Tessuto ikat made in Turkey, mentre il resto dei tessuti sono made Italy',
            descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32 Pannello frontale in tessuto ikat di misto seta , mentre il pannello posteriore è in rete blu Cina e nylon La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è multicolore e riprende le tonalità del tessuto fantasia. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in/Turkey/ Italy.'
        },
        {
            pathName: 'fluffyBagCinquantaTre',
            id: 53,
            imageName: './assets/homepage/fluffy-bag-53/fluffy-bag-53-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Daila',
            isSoldOut: false,
            type: BagsFilterEnum.Foulard,
            moreImages: [
            './assets/homepage/fluffy-bag-53/fluffy-bag-53-due.png',
            './assets/homepage/fluffy-bag-53/fluffy-bag-53-tre.png',
            ],
            descrizioneSinistra: 'Shopper intessuto jacquard con motivi liberty (jacquard sui toni bei beige e grigi) Tessuto made ins Italy',
            descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32 Pannello frontale in tessuto jacquard , mentre il dietro è in nylon mano persa cammello . La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è multicolore e riprende le tonalità del tessuto fantasia. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.'
        },
        {
            pathName: 'fluffyBagCinquantaQuattro',
            id: 54,
            imageName: './assets/homepage/fluffy-bag-54/fluffy-bag-54-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Margherita',
            isSoldOut: false,
            type: BagsFilterEnum.Foulard,
            moreImages: [
            './assets/homepage/fluffy-bag-54/fluffy-bag-54-due.png',
            './assets/homepage/fluffy-bag-54/fluffy-bag-54-tre.png',
            ],
            descrizioneSinistra: 'Shopper intessuto jacquard diagonal stipe. (jacquard  rigato arancio/lilla con lurex iride) Tessuto made in Italy. Diagonale Strype.',
            descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32 Pannello frontale in tessuto ikat di velluto di cotone, mentre il pannello posteriore è in rete blu Cina e nylon La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è multicolore e riprende le tonalità del tessuto fantasia. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.'
        },
        {
            pathName: 'fluffyBagCinquantacinque',
            id: 55,
            imageName: './assets/homepage/fluffy-bag-55/fluffy-bag-55-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Dafne',
            isSoldOut: false,
            type: BagsFilterEnum.Foulard,
            moreImages: [
            './assets/homepage/fluffy-bag-55/fluffy-bag-55-due.png',
            './assets/homepage/fluffy-bag-55/fluffy-bag-55-tre.png',
            './assets/homepage/fluffy-bag-55/fluffy-bag-55-quattro.png',
          ],
          descrizioneSinistra: 'Taffettas motivi equitazione. Shopper in tessuto di seta raffigurante motivi di ispirazione equitazione . colore( base senape con motivi multicolor Tessuto made in Italy',
          descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32 Pannello frontale in tessuto di seta , mentre il pannello posteriore è in rete blu Cina con sotto nylon color senape . La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è multicolore e riprende le tonalità del tessuto fantasia. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.'
        },
        {
            pathName: 'fluffyBagCinquantasette',
            id: 57,
            imageName: './assets/homepage/fluffy-bag-57/fluffy-bag-57-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Mini Margot',
            isSoldOut: false,
            type: BagsFilterEnum.Mini,
            moreImages: [
            './assets/homepage/fluffy-bag-57/fluffy-bag-57-due.png',
            './assets/homepage/fluffy-bag-57/fluffy-bag-57-tre.png',
          ],
          descrizioneSinistra: 'mini bag imbottita realizzata in tessuto jacquard con motivi arabescati.Il dietro e i manici sono in nylon mano pesca color cammello. Tessuto è made in Italy',
          descrizioneDestra: 'Altezza cm 20 ,larghezza cm 24. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è multicolore e riprende le tonalità del tessuto fantasia. Manici imbottiti H.12 cm Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy'
        },
        {
            pathName: 'fluffyBagCinquantotto',
            id: 58,
            imageName: './assets/homepage/fluffy-bag-58/fluffy-bag-58-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Mini Cecilia',
            isSoldOut: false,
            type: BagsFilterEnum.Mini,
            moreImages: [
            './assets/homepage/fluffy-bag-58/fluffy-bag-58-due.png',
            './assets/homepage/fluffy-bag-58/fluffy-bag-58-tre.png',
            './assets/homepage/fluffy-bag-58/fluffy-bag-58-quattro.png',
          ],
          descrizioneSinistra: 'mini bag imbottita realizzata in tessuto jacquard con motivi floreali.Il dietro e i manici sono in nylon mano pesca color cipolla di Tropea. Tessuto è made in Italy',
          descrizioneDestra: 'Altezza cm 20 ,larghezza cm 24. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è multicolore e riprende le tonalità del tessuto fantasia. Manici imbottiti H.12 cm Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy'
        },
        {
            pathName: 'fluffyBagSessanta',
            id: 60,
            imageName: './assets/homepage/fluffy-bag-60/fluffy-bag-60-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Mini Violet',
            isSoldOut: false,
            type: BagsFilterEnum.Mini,
            moreImages: [
            './assets/homepage/fluffy-bag-60/fluffy-bag-60-due.png',
            './assets/homepage/fluffy-bag-60/fluffy-bag-60-tre.png',
            './assets/homepage/fluffy-bag-60/fluffy-bag-60-quattro.png',
          ],
          descrizioneSinistra: 'mini bag imbottita realizzata in tessuto jacquard di velluto turchese con motivi geometrici .Il dietro e i manici sono in taffetas color verde acqua . Tessuto è made in Italy',
          descrizioneDestra: 'Altezza cm 20 ,larghezza cm 24. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è multicolore e riprende le tonalità del tessuto fantasia. Manici imbottiti H.12 cm Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy'
        },
        {
            pathName: 'fluffyBagSettantaquattro',
            id: 74,
            imageName: './assets/homepage/fluffy-bag-74/fluffy-bag-74-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Mini Odile',
            isSoldOut: false,
            type: BagsFilterEnum.Mini,
            moreImages: [
            './assets/homepage/fluffy-bag-74/fluffy-bag-74-due.png',
          ],
          descrizioneSinistra: 'Altezza cm 20, larghezza cm 25 Pannello frontale in jacquard con una fantasia di righe, mentre il pannello posteriore è in taffetas satinato benige chiaro.',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.13 cm Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.'
        },
        {
            pathName: 'fluffyBagSettantacinque',
            id: 75,
            imageName: './assets/homepage/fluffy-bag-75/fluffy-bag-75-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Raissa',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
            './assets/homepage/fluffy-bag-75/fluffy-bag-75-due.png',
          ],
          descrizioneSinistra: 'Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato raffigurante DEI rombi allungati, mentre il pannello posteriore è in nylon nero trapuntato aspina pesce.',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.'
        },
        {
            pathName: 'fluffyBagSettantasei',
            id: 76,
            imageName: './assets/homepage/fluffy-bag-76/fluffy-bag-76-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Tessbi',
            isSoldOut: false,
            type: BagsFilterEnum.Mini,
            moreImages: [
            './assets/homepage/fluffy-bag-76/fluffy-bag-76-due.png',
          ],
          descrizioneSinistra: 'Altezza cm 20, larghezza cm 25 Pannello frontale in jacquard bi-color, mentre il pannello posteriore è in taffetas satinato viola.',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.13 cm Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.'
        },
        {
            pathName: 'fluffyBagSettantotto',
            id: 78,
            imageName: './assets/homepage/fluffy-bag-78/fluffy-bag-78-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag Kurty',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
            './assets/homepage/fluffy-bag-78/fluffy-bag-78-due.png',
            './assets/homepage/fluffy-bag-78/fluffy-bag-78-tre.png',
          ],
          descrizioneSinistra: 'Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato raffigurante DEI rombi allungati, mentre il pannello posteriore è in taffetas satinato viola.',
          descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung. cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.'
        },
    ]
}