import {CartItemType} from '../../my-app';

export const mockCartItems: CartItemType[] = [
  {
    id: '1',
    SKU: '1210',
    name: 'Nike Air Relentless 4 Mens Running Shoes',
    brandName: 'Nike',
    mainImage:
      'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/7e386191b2ee40b290886a05d3e10e24_nike-air-relentless-a.jpg',
    price: {
      amount: '45.00',
      currency: 'GBP',
    },
    size: '8',
    colour: 'blue',
    quantity: 1,
  },
  {
    id: '2',
    SKU: '1219',
    name: 'PUMA Future Disc Lite Op V2',
    brandName: 'Puma',
    mainImage:
      'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/a752937bd1be4ca3b6ccba5f7649a21c_35685902_fr_puma_sc7.jpeg',
    price: {
      amount: '90.00',
      currency: 'GBP',
    },
    size: '9',
    colour: 'multicoloured',
    quantity: 2,
  },
  {
    id: '3',
    SKU: '1243',
    name: 'PUMA Soleil v2',
    brandName: null,
    mainImage:
      'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/ce1fbd10feb64bd39816d03a45fa5346_35892701_fr_puma_sc7.jpeg',
    price: {
      amount: '40.00',
      currency: 'GBP',
    },
    size: '10',
    colour: 'black',
    quantity: 3,
  },
];

export const mockProducts = [
  {
    id: '1',
    SKU: '1210',
    name: 'Nike Air Relentless 4 Mens Running Shoes',
    brandName: 'Nike',
    mainImage:
      'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/7e386191b2ee40b290886a05d3e10e24_nike-air-relentless-a.jpg',
    price: {
      amount: '45.00',
      currency: 'GBP',
    },
    sizes: ['8', '9', '10', '11'],
    stockStatus: 'IN STOCK',
    colour: 'blue',
    description:
      'Hit the tracks in these Nike Air Relentless 4 featuring flexible forefoot sole and Reslon midsole underfoot cushioning for superior comfort at each step. The ridged outsole ensures excellent traction while the cushioned ankle collar and the anatomically shaped insole guarantee great support for the whole foot. The mesh upper panels provide breathability and airflow within the shoe.',
  },
  {
    id: '2',
    SKU: '1219',
    name: 'PUMA Future Disc Lite Op V2',
    brandName: 'Puma',
    mainImage:
      'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/a752937bd1be4ca3b6ccba5f7649a21c_35685902_fr_puma_sc7.jpeg',
    price: {
      amount: '90.00',
      currency: 'GBP',
    },
    sizes: ['8', '9', '10', '11'],
    stockStatus: 'IN STOCK',
    colour: 'multicoloured',
    description:
      'A product of the 90s, the PUMA Future Disc Lite OP V2 features the PUMA disc, the fit system that offered those comfort-boosting clicks. Its modern reincarnation is more laid-back, but brings the technology of the original. Features a leather and mesh upper, EVA midsole, and rubber outsole',
  },
  {
    id: '3',
    SKU: '1243',
    name: 'PUMA Soleil v2',
    brandName: null,
    mainImage:
      'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/ce1fbd10feb64bd39816d03a45fa5346_35892701_fr_puma_sc7.jpeg',
    price: {
      amount: '40.00',
      currency: 'GBP',
    },
    sizes: ['8', '9', '10', '11'],
    stockStatus: 'IN STOCK',
    colour: 'black',
    description:
      'Simple and clean, the Soleil v2 exhibits iconic PUMA heritage.Synthetic upper with french piping embellishment and bold ghilles.Rubber outsole supplies durability and traction.',
  },
];
