
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
            pathName: 'fluffyBagUno',
            id: 1,
            imageName: './assets/homepage/fluffy-bag-1/fluffy-bag-1-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 1 mod. Anna',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-1/fluffy-bag-1-due.png',
                './assets/homepage/fluffy-bag-1/fluffy-bag-1-tre.png'
            ],
            descrizioneSinistra: 'Shopper in filcoupè dis.ramage. Colore :(verde/rosa) Tessuto made int Italy.',
            descrizioneDestra: 'Altezza cm 40 ,larghezza cm32. Pannello frontale in fil coupé ramage con lavorazione in rilievo, mentre il pannello posteriore è in satin trapuntato a riga verde Mility.Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.'
        },
        {
            pathName: 'fluffyBagDue',
            id: 2,
            imageName: './assets/homepage/fluffy-bag-2/fluffy-bag-2-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 2 mod. Linda',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-2/fluffy-bag-2-due.png'
            ],
            descrizioneSinistra: 'Shopper in flower jacquard ,colore( turchese/nero su fondo nocciola Tessuto made in Italy',
            descrizioneDestra: 'Altezza cm 40, larghezza cm32. Pannello frontale in flore jacquard, mentre il pannello posteriore è in microfibra nera trapuntata a quadro. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è turchese. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.'
        },
        {
            pathName: 'fluffyBagTre',
            id: 3,
            imageName: './assets/homepage/fluffy-bag-3/fluffy-bag-3-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.3 mod. Ily',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-3/fluffy-bag-3-due.png',
                './assets/homepage/fluffy-bag-3/fluffy-bag-3-tre.png'
            ],
            descrizioneSinistra: 'Shopper Bag in velvet Jacquard’,colore grigio/viola very pery colore dell’anno 2022',
            descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32.Pannello frontale in jacquard geometrico, mentre il pannello posteriore è in satin trapuntato a quadro nero La borsa è interamente imbottita con ovatta morbida. Il fiocco in velluto è grigio perla. Manici imbottiti H.12 cm Tracolla imbottita lungh.a.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto made in (UK)',
        },
        {
            pathName: 'fluffyBagQuattro',
            id: 4,
            imageName: './assets/homepage/fluffy-bag-4/fluffy-bag-4-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.4 mod. Matilde',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-4/fluffy-bag-4-due.png'
            ],
            descrizioneSinistra: 'Shopper in jacquard goffrato disegno vortice, colore (Verde oliva/panna e marrone terra) Tessuto made in Italy',
            descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard disegno vortice, mentre il pannello posteriore è satin trapuntato riga verde Mility. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è nero. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagCinque',
            id: 5,
            imageName: './assets/homepage/fluffy-bag-5/fluffy-bag-5-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.5 mod. Alex',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-6/fluffy-bag-5-due.png'
            ],
            descrizioneSinistra: 'Shopper in jacquard goffrato Black end white',
            descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard disegno geometrico puntato, mentre il pannello posteriore è realizzato in tessuto trapuntato dis. Spina pesce . La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è marrone. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagSei',
            id: 6,
            imageName: './assets/homepage/fluffy-bag-6/fluffy-bag-6-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.6 mod Melany',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-6/fluffy-bag-6-due.png'
            ],
            descrizioneSinistra: 'Shopper realizzata in jacquard di seta originale Indonesiano . Colori; Fuxia petrolio convochi di giallo oro.',
            descrizioneDestra: 'Altezza cm 40, larghezza cm.32. Pannello frontale in jacquard con disegnature geometriche che creano delle righe irregolari , mentre il pannello del retro è realizzato in satin trapuntato aria color petrolio. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde Pavone. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Indonesia.',
        },
        {
            pathName: 'fluffyBagSette',
            id: 7,
            imageName: './assets/homepage/fluffy-bag-7/fluffy-bag-7-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.7 mod. Matty',
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
            productName: 'Fluffy Bag N.8 mod. Nur',
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
            productName: 'Fluffy Bag N.9 mod. Patty',
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
            productName: 'Fluffy Bag N.10 mod Nel',
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
            productName: 'Fluffy Bag N:11 mod Tiger',
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
            productName: 'Fluffy Bag N.12 mod Denny',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard,
            moreImages: [

            ],
            descrizioneSinistra: 'Shopper in satin Flower Black. Colore black end white . Tessuto made in Italy',
            descrizioneDestra: 'Altezza cm 40, larghezza cm.32.Pannello frontale satin nero con fiori stilizzati bianchi.dis , mentre il pannello del retro in microfibra nera trapuntato a quadro. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde petrolio. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagTredici',
            id: 13,
            imageName: './assets/homepage/fluffy-bag-13/fluffy-bag-13-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N:13 mod Prya',
            isSoldOut: false,
            type: BagsFilterEnum.Ikat,
            moreImages: [
                './assets/homepage/fluffy-bag-13/fluffy-bag-13-due.png',
                './assets/homepage/fluffy-bag-13/fluffy-bag-13-tre.png',
            ],
            descrizioneSinistra: 'Shopper velvet Ikat pop wave  100% seta. Colore: Fondo giallo oro con pois neri e effetti onda blu pavone. Tessuto made in Turkey',
            descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32.Pannello frontale in velvet Ikat dis Pop , mentre il pannello posteriore è realizzato in trapuntato Black disegno spina di pesce. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è blu petrolio. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Turkey.',
        },
        {
            pathName: 'fluffyBagQuattordici',
            id: 14,
            imageName: './assets/homepage/fluffy-bag-14/fluffy-bag-14-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.14 mod Loyal',
            isSoldOut: false,
            type: BagsFilterEnum.Ikat,
            moreImages: [
                './assets/homepage/fluffy-bag-14/fluffy-bag-14-due.png',
                './assets/homepage/fluffy-bag-14/fluffy-bag-14-tre.png'
              ],
              descrizioneSinistra: 'Shopper realizzata in  Ikat shantung 100%seta. . Colori: Verde prato/Rosso cardinale grigio chiaro.',
              descrizioneDestra: 'Altezza cm 40, larghezza cm.32. Pannello frontale in jacquard con disegno tipico dei tessuti Ikat .La disegnata grafica rappresenta dei fiori stilizzati, mentre il pannello del retro è realizzato in satin trapuntato a righe diagonali color granata. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è verde prato. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Turkey.',
        },
        {
            pathName: 'fluffyBagQuindici',
            id: 15,
            imageName: './assets/homepage/fluffy-bag-15/fluffy-bag-15-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.15 mod Agata',
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
            productName: 'Fluffy Bag N.16 mod Ada',
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
            pathName: 'fluffyBagDiciassette',
            id: 17,
            imageName: './assets/homepage/fluffy-bag-17/fluffy-bag-17-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.17 mod Pamela',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-17/fluffy-bag-17-due.png',
                './assets/homepage/fluffy-bag-17/fluffy-bag-17-tre.png',
                './assets/homepage/fluffy-bag-17/fluffy-bag-17-quattro.png'
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA. Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard multicolor raffigurante un patch di maschere che si intrecciano con disegnature geometriche, mentre il pannello posteriore è in nylon operato rosso cipolla di Tropea.',
              descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagDiciotto',
            id: 18,
            imageName: './assets/homepage/fluffy-bag-18/fluffy-bag-18-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.18 mod Rebecca',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-18/fluffy-bag-18-due.png',
                './assets/homepage/fluffy-bag-18/fluffy-bag-18-tre.png',
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA. Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato raffigurante un patch di farfalle colorate, mentre il pannello posteriore è in nylon nero trapuntato a riga rosa fragola.',
              descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagDiciannove',
            id: 19,
            imageName: './assets/homepage/fluffy-bag-19/fluffy-bag-19-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.19 mod Mavi',
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
            productName: 'Fluffy Bag N.20 mod Fushi',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-20/fluffy-bag-20-due.png',
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA. Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard raffigurante delle palme tropicali,mentre il pannello posteriore è in nylon arancio trapuntato a rombo .',
              descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagVentuno',
            id: 21,
            imageName: './assets/homepage/fluffy-bag-21/fluffy-bag-21-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.21 mod Irene',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-21/fluffy-bag-21-due.png',
                './assets/homepage/fluffy-bag-21/fluffy-bag-21-tre.png',
                './assets/homepage/fluffy-bag-21/fluffy-bag-21-quattro.png',
                './assets/homepage/fluffy-bag-21/fluffy-bag-21-cinque.png'
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard balzing raffigurante un effetto onda stilizzato, mentre il pannello posteriore è in ecopelle gold trapuntato a cipolla.',
              descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagVentitre',
            id: 23,
            imageName: './assets/homepage/fluffy-bag-23/fluffy-bag-23-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.23 mod Jole',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-23/fluffy-bag-23-due.png'
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA. Altezza cm 42 ,larghezza cm 30. Pannello frontale in jacquard un paesaggio tropicale con palme, mentre il pannello posteriore è in nylon verde petrolio trapuntato a riga.',
              descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',
        },
        {
            pathName: 'fluffyBagVentiQuattro',
            id: 24,
            imageName: './assets/homepage/fluffy-bag-24/fluffy-bag-24-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.24 mod Bruna',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-24/fluffy-bag-24-due.png',
                './assets/homepage/fluffy-bag-24/fluffy-bag-24-tre.png'
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA. Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard sottile con fiori delicati, mentre il pannello posteriore è in satin imbottito grigio perla .',
              descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico ricoperto in raso interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',    
        },
        {
            pathName: 'fluffyBagVenticinque',
            id: 25,
            imageName: './assets/homepage/fluffy-bag-25/fluffy-bag-25-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.25 mod Francesca',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-25/fluffy-bag-25-due.png',
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA. Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato con una fantasia di righe e pappagalli, mentre il pannello posteriore è in nylon satinato rosso granata.',
              descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',    
        },
        {
            pathName: 'fluffyBagVentisei',
            id: 26,
            imageName: './assets/homepage/fluffy-bag-26/fluffy-bag-26-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.26 mod Roby',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard,
            moreImages: [
                './assets/homepage/fluffy-bag-26/fluffy-bag-26-due.png',
                './assets/homepage/fluffy-bag-26/fluffy-bag-26-tre.png',
                './assets/homepage/fluffy-bag-26/fluffy-bag-26-quattro.png',
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato raffigurante un patch di foglie grafiche, mentre il pannello posteriore è in nylon nero trapuntato a quadro.',
              descrizioneDestra: 'Tutta la borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.',    
        },
        {
            pathName: 'fluffyBagTrenta',
            id: 30,
            imageName: './assets/homepage/fluffy-bag-30/fluffy-bag-30-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 30 MOD. Luce',
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
            productName: 'Fluffy Bag 31 MOD. Licia',
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
            productName: 'Fluffy Bag 32 MOD.Karim',
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
            productName: 'Fluffy Bag 33 MOD.Daria',
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
            productName: 'Fluffy Bag 34 MOD.Ambra',
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
            productName: 'Fluffy Bag 35 MOD.Prisca',
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
            productName: 'Fluffy Bag 36 MOD.Fede',
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
            productName: 'Fluffy Bag 37 MOD. Josè',
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
            productName: 'Fluffy Bag 38 MOD.Thierry.',
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
            pathName: 'fluffyBagTrentanove',
            id: 39,
            imageName: './assets/homepage/fluffy-bag-39/fluffy-bag-39-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 39 MOD.Sacha',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori,
            moreImages: [
                './assets/homepage/fluffy-bag-39/fluffy-bag-39-due.png',
              ],
              descrizioneSinistra: 'BORSA SHOPPER IMBOTTITA Altezza cm 40 ,larghezza cm 32. Pannello frontale in jacquard goffrato. raffigurante una fantasia con fiori e foglie dai toni pastelli. il pannello posteriore è in nylon impalpabile camel',
              descrizioneDestra: 'La borsa è interamente imbottita con morbida ovatta. Manici imbottiti H.12 cm Tracolla imbottita lung.cm 55. Foderata con tessuto a contrasto. All’interno un automatico ricoperto con il raso e cucito a mano come chiusura. Prodotto Artigianale Tessuto e confezione Made in Italy.',    
        },
        {
            pathName: 'fluffyBagQuaranta',
            id: 40,
            imageName: './assets/homepage/fluffy-bag-40/fluffy-bag-40-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 40 MOD.Peggy',
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
            pathName: 'fluffyBagQuarantacinque',
            id: 45,
            imageName: './assets/homepage/fluffy-bag-45/fluffy-bag-45-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 45 MOD Adriana',
            isSoldOut: false,
            type: BagsFilterEnum.Foulard,
            moreImages: [
            './assets/homepage/fluffy-bag-45/fluffy-bag-45-due.png',
            ],
            descrizioneSinistra: 'Shopper in Ikat Blue, (Ikat blue/beige e ciclamino) Tessuto Ikat è made in Turkey, mentre il resto dei tessuti sono made in Italy',
            descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32 Pannello frontale in tessuto ikat di seta /cotone, mentre il pannello posteriore è in taffetas color rubino. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è multicolore e riprende le tonalità del tessuto fantasia. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in Italy.'
        },
        {
            pathName: 'fluffyBagQuarantanove',
            id: 49,
            imageName: './assets/homepage/fluffy-bag-49/fluffy-bag-49-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 49 MOD Idalia',
            isSoldOut: false,
            type: BagsFilterEnum.Foulard,
            moreImages: [
            './assets/homepage/fluffy-bag-49/fluffy-bag-49-due.png',
            ],
            descrizioneSinistra: 'Shopper in Riga velvet Ikat dis penellata penellata (Ikat/riga rosa fuxia/azzurra/lime e viola) Tessuto Ikat é made in Turkey, mentre il resto dei tessuti sono Italy',
            descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32 Pannello frontale in tessuto ikat dimisto seta, mentre il pannello posteriore è in taffetas color lilla. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è multicolore e riprende le tonalità del tessuto fantasia. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in/Turkey/ Italy.'
        },
        {
            pathName: 'fluffyBagCinquanta',
            id: 50,
            imageName: './assets/homepage/fluffy-bag-50/fluffy-bag-50-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 50 MOD Angelina',
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
            productName: 'Fluffy Bag 51 MOD Eloise',
            isSoldOut: false,
            type: BagsFilterEnum.Foulard,
            moreImages: [
            './assets/homepage/fluffy-bag-51/fluffy-bag-51-due.png',
            ],
            descrizioneSinistra: 'Shopper intessuto Ikat con motivi arancio e blu Cina su fondo bianco e frangia di raffia blu sui due lati (Ikat con fondo bianco e motivi blu Cina e arancio) Tessuto ikat made in Turkey, mentre il resto dei tessuti sono made Italy',
            descrizioneDestra: 'Altezza cm 40 ,larghezza cm 32 Pannello frontale in tessuto ikat di misto seta , mentre il pannello posteriore è in rete blu Cina e nylon La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è multicolore e riprende le tonalità del tessuto fantasia. Manici imbottiti H.12 cm Tracolla imbottita luna.cm 55. Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy Tessuto Made in/Turkey/ Italy.'
        },
        /*
        {
            pathName: 'fluffyBagCinquantadue',
            id: 52,
            imageName: './assets/homepage/fluffy-bag-52/fluffy-bag-52-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 52 MOD Elizabeth',
            isSoldOut: false,
            type: BagsFilterEnum.Foulard,
            moreImages: [
            './assets/homepage/fluffy-bag-52/fluffy-bag-52-due.png',
            './assets/homepage/fluffy-bag-52/fluffy-bag-52-tre.png',
            ],
            descrizioneSinistra: '',
            descrizioneDestra: ''
        },
        */
        {
            pathName: 'fluffyBagCinquantaTre',
            id: 53,
            imageName: './assets/homepage/fluffy-bag-53/fluffy-bag-53-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 53 MOD Daila',
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
            productName: 'Fluffy Bag 54 MOD Margherita',
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
            productName: 'Fluffy Bag 55 Modello Dafne',
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
            productName: 'Fluffy Bag 57 Mini Margot',
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
            productName: 'Fluffy Bag 58 Mini Cecilia',
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
            pathName: 'fluffyBagCinquantanove',
            id: 59,
            imageName: './assets/homepage/fluffy-bag-59/fluffy-bag-59-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 59 Mini Ginevra',
            isSoldOut: false,
            type: BagsFilterEnum.Mini,
            moreImages: [
            './assets/homepage/fluffy-bag-59/fluffy-bag-59-due.png',
            './assets/homepage/fluffy-bag-59/fluffy-bag-59-tre.png',
          ],
          descrizioneSinistra: 'mini bag imbottita realizzata in tessuto jacquard con motivi Liberty sui toni dei naturali e grigi.Il dietro e i manici sono in nylon mano pesca color grigio perla. Tessuto è made in Italy',
          descrizioneDestra: 'Altezza cm 20 ,larghezza cm 24. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è multicolore e riprende le tonalità del tessuto fantasia. Manici imbottiti H.12 cm Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy'
        },
        {
            pathName: 'fluffyBagSessanta',
            id: 60,
            imageName: './assets/homepage/fluffy-bag-60/fluffy-bag-60-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 60 Mini Violet',
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
            pathName: 'fluffyBagSessantuno',
            id: 61,
            imageName: './assets/homepage/fluffy-bag-61/fluffy-bag-61-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 61 Mini Eleonor Ikat',
            isSoldOut: false,
            type: BagsFilterEnum.Mini,
            moreImages: [
            './assets/homepage/fluffy-bag-61/fluffy-bag-61-due.png',
            './assets/homepage/fluffy-bag-61/fluffy-bag-61-tre.png',
          ],
          descrizioneSinistra: 'mini bag imbottita realizzata in  tessuto ikat di seta -cotone  con motivo geometrico piazzato sul davanti .Il dietro e i manici sono in taffetas color rubino . Tessuto è made in Italy',
          descrizioneDestra: 'Altezza cm 20 ,larghezza cm 24. La borsa è interamente imbottita con morbida ovatta. Il fiocco in velluto è multicolore e riprende le tonalità del tessuto fantasia. Manici imbottiti H.12 cm Foderata con tessuto a contrasto. Bottone automatico metallico interno cucito a mano come chiusura. Made in Italy'
        },
    ]
}