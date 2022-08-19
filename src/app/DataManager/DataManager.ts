export interface ProductDetail {
    pathName: string,
    id: number,
    imageName: string,
    imageAlt: string,
    productName: string,
    productDescription: string,
    isSoldOut: boolean,
    type: BagsFilterEnum
}

export class DataManager {

    public selectedFluffyBag: string = '';

    public productStructure: ProductDetail[] = [
        {
            pathName: FluffyBagDetailId.fluffyOne,
            id: 1,
            imageName: './assets/homepage/fluffy-bag-1/fluffy-bag-1-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 1 mod. Anna',
            productDescription: '',
            isSoldOut: true,
            type: BagsFilterEnum.Unkown
        },
        {
            pathName: FluffyBagDetailId.fluffyTwo,
            id: 2,
            imageName: './assets/homepage/fluffy-bag-2/fluffy-bag-2-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 2 mod. Linda',
            productDescription: '',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffyThree,
            id: 3,
            imageName: './assets/homepage/fluffy-bag-3/fluffy-bag-3-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.3 mod. Ily',
            productDescription: '',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffyFour,
            id: 4,
            imageName: './assets/homepage/fluffy-bag-4/fluffy-bag-4-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.4 mod. Matilde',
            productDescription: '',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffyFive,
            id: 5,
            imageName: './assets/homepage/fluffy-bag-5/fluffy-bag-5-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.5 mod. Alex',
            productDescription: '',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffySix,
            id: 6,
            imageName: './assets/homepage/fluffy-bag-6/fluffy-bag-6-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.6 mod Melany',
            productDescription: '',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffySeven,
            id: 7,
            imageName: './assets/homepage/fluffy-bag-7/fluffy-bag-7-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.7 mod. Matty',
            productDescription: '',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffyEleven,
            id: 11,
            imageName: './assets/homepage/fluffy-bag-11/fluffy-bag-11-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N:11 mod Tiger',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffyFifteen,
            id: 15,
            imageName: './assets/homepage/fluffy-bag-15/fluffy-bag-15-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.15 mod Agata',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffySixteen,
            id: 16,
            imageName: './assets/homepage/fluffy-bag-16/fluffy-bag-16-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.16 mod Ada',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffySeventeen,
            id: 17,
            imageName: './assets/homepage/fluffy-bag-17/fluffy-bag-17-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.17 mod Pamela',
            productDescription: '',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffyEigtheen,
            id: 18,
            imageName: './assets/homepage/fluffy-bag-18/fluffy-bag-18-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.18 mod Rebecca',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffyNineteen,
            id: 19,
            imageName: './assets/homepage/fluffy-bag-19/fluffy-bag-19-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.19 mod Mavi',
            productDescription: '',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffyTwenty,
            id: 20,
            imageName: './assets/homepage/fluffy-bag-20/fluffy-bag-20-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.20 mod Fushi',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffyTwentyOne,
            id: 21,
            imageName: './assets/homepage/fluffy-bag-21/fluffy-bag-21-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.21 mod Irene',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffyTwentyThree,
            id: 23,
            imageName: './assets/homepage/fluffy-bag-23/fluffy-bag-23-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.23 mod Jole',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffyTwentyFour,
            id: 24,
            imageName: './assets/homepage/fluffy-bag-24/fluffy-bag-24-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.24 mod Bruna',
            productDescription: '',
            isSoldOut: true,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffyTwentyFive,
            id: 25,
            imageName: './assets/homepage/fluffy-bag-25/fluffy-bag-25-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.25 mod Francesca',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffyTwentySix,
            id: 26,
            imageName: './assets/homepage/fluffy-bag-26/fluffy-bag-26-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.26 mod Roby',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.Jaquard
        },
        {
            pathName: FluffyBagDetailId.fluffyNine,
            id: 9,
            imageName: './assets/homepage/fluffy-bag-9/fluffy-bag-9-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.9 mod. Patty',
            productDescription: '',
            isSoldOut: true,
            type: BagsFilterEnum.Unkown
        },
        {
            pathName: FluffyBagDetailId.fluffyTen,
            id: 10,
            imageName: './assets/homepage/fluffy-bag-10/fluffy-bag-10-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.10 mod Nel',
            productDescription: '',
            isSoldOut: true,
            type: BagsFilterEnum.Unkown
        },
        {
            pathName: FluffyBagDetailId.fluffyTwelve,
            id: 12,
            imageName: './assets/homepage/fluffy-bag-12/fluffy-bag-12-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.12 mod Denny',
            productDescription: '',
            isSoldOut: true,
            type: BagsFilterEnum.Unkown
        },
        {
            pathName: FluffyBagDetailId.fluffyThirty,
            id: 30,
            imageName: './assets/homepage/fluffy-bag-30/fluffy-bag-30-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 30 MOD. Luce',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori
        },
        {
            pathName: FluffyBagDetailId.fluffyThirtyOne,
            id: 31,
            imageName: './assets/homepage/fluffy-bag-31/fluffy-bag-31-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 31 MOD. Licia',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori
        },
        {
            pathName: FluffyBagDetailId.fluffyThirtyTwo,
            id: 32,
            imageName: './assets/homepage/fluffy-bag-32/fluffy-bag-32-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 32 MOD.Karim',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori
        },
        {
            pathName: FluffyBagDetailId.fluffyThirtyThree,
            id: 33,
            imageName: './assets/homepage/fluffy-bag-33/fluffy-bag-33-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 33 MOD.Daria',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori
        },
        {
            pathName: FluffyBagDetailId.fluffyThirtyFour,
            id: 34,
            imageName: './assets/homepage/fluffy-bag-34/fluffy-bag-34-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 34 MOD.Ambra',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori
        },
        {
            pathName: FluffyBagDetailId.fluffyThirtyFive,
            id: 35,
            imageName: './assets/homepage/fluffy-bag-35/fluffy-bag-35-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 35 MOD.Prisca',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori
        },
        {
            pathName: FluffyBagDetailId.fluffyThirtySix,
            id: 36,
            imageName: './assets/homepage/fluffy-bag-36/fluffy-bag-36-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 36 MOD.Fede',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori
        },
        {
            pathName: FluffyBagDetailId.fluffyThirtySeven,
            id: 37,
            imageName: './assets/homepage/fluffy-bag-37/fluffy-bag-37-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 37 MOD. Josè',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori
        },
        {
            pathName: FluffyBagDetailId.fluffyThirtyEight,
            id: 38,
            imageName: './assets/homepage/fluffy-bag-38/fluffy-bag-38-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 38 MOD.Thierry.',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori
        },
        {
            pathName: FluffyBagDetailId.fluffyThirtyNine,
            id: 39,
            imageName: './assets/homepage/fluffy-bag-39/fluffy-bag-39-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 39 MOD.Sacha',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori
        },
        {
            pathName: FluffyBagDetailId.fluffyForty,
            id: 40,
            imageName: './assets/homepage/fluffy-bag-40/fluffy-bag-40-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag 40 MOD.Peggy',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.LuisaAmatori
        },
        {
            pathName: FluffyBagDetailId.fluffyEight,
            id: 8,
            imageName: './assets/homepage/fluffy-bag-8/fluffy-bag-8-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.8 mod. Nur',
            productDescription: '',
            isSoldOut: true,
            type: BagsFilterEnum.Ikat
        },
        {
            pathName: FluffyBagDetailId.fluffyThirteen,
            id: 13,
            imageName: './assets/homepage/fluffy-bag-13/fluffy-bag-13-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N:13 mod Prya',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.Ikat
        },
        {
            pathName: FluffyBagDetailId.fluffyFourteen,
            id: 14,
            imageName: './assets/homepage/fluffy-bag-14/fluffy-bag-14-uno.png',
            imageAlt: '',
            productName: 'Fluffy Bag N.14 mod Loyal',
            productDescription: '',
            isSoldOut: false,
            type: BagsFilterEnum.Ikat
        }
    ]
}

export enum BagsFilterEnum {
    All = 'Tutte',
    Jaquard = 'Jaquard',
    Ikat = 'Ikat',
    Foulard = 'Foulard',
    Unkown = 'Unkown',
    LuisaAmatori = 'LuisaAmatori'
}

export enum FluffyBagDetailId {
    fluffyOne = "fluffyBagUno",
    fluffyTwo = "fluffyBagDue",
    fluffyThree = "fluffyBagTre",
    fluffyFour = "fluffyBagQuattro",
    fluffyFive = "fluffyBagCinque",
    fluffySix = "fluffyBagSei",
    fluffySeven = "fluffyBagSette",
    fluffyEight = 'fluffyBagOtto',
    fluffyNine = "fluffyBagNove",
    fluffyTen = "fluffyBagTen",
    fluffyEleven = 'fluffyBagUndici',
    fluffyTwelve = 'fluffyBagDodici',
    fluffyThirteen = 'fluffyBagTredici',
    fluffyFourteen = "fluffyBagQuattordici",
    fluffyFifteen = "fluffyBagQuindici",
    fluffySixteen = "fluffyBagSedici",
    fluffySeventeen = "fluffyBagDiciassette",
    fluffyEigtheen = "fluffyBagDiciotto",
    fluffyNineteen = "fluffyBagDiciannove",
    fluffyTwenty = "fluffyBagVenti",
    fluffyTwentyOne = "fluffyVentuno",
    fluffyTwentyThree = "fluffyVentitre",
    fluffyTwentyFour = "fluffyVentiquattro",
    fluffyTwentyFive = "fluffyVenticinque",
    fluffyTwentySix = "fluffyVentisei",
    fluffyThirty = "fluffyTrenta",
    fluffyThirtyOne = "fluffyTrentuno",
    fluffyThirtyTwo = "fluffyTrentadue",
    fluffyThirtyThree = "fluffyTrentatre",
    fluffyThirtyFour = "fluffyTrentaquattro",
    fluffyThirtyFive = "fluffyTrentacinque",
    fluffyThirtySix = "fluffyTrentasei",
    fluffyThirtySeven = "fluffyTrentasette",
    fluffyThirtyEight = "fluffyTrentotto",
    fluffyThirtyNine = "fluffyTrentanove",
    fluffyForty = "fluffyQuaranta",
}