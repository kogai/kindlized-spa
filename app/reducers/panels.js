const initialState = [
  {
    title: 'お前ら全員めんどくさい! (1) (メテオCOMICS)',
    url: 'http://goo.gl/HJxN6C/',
    imgSrc: 'http://ecx.images-amazon.com/images/I/51952ZAt-DL._SL160_.jpg',
    isKindlized: false,
    isRegistered: true,
    isLoading: false,
  },
  {
    title: 'アバンチュリエ(4) (イブニングKC)',
    url: 'http://goo.gl/HJxN6C/',
    imgSrc: 'http://ecx.images-amazon.com/images/I/515btz%2B9xRL._SL160_.jpg',
    isKindlized: true,
    isRegistered: true,
    isLoading: true,
  },
  {
    title: 'ヒストリエ 7 (アフタヌーンKC)	',
    url: 'http://goo.gl/HJxN6C/',
    imgSrc: 'http://ecx.images-amazon.com/images/I/51IiLXijtmL._SL160_.jpg',
    isKindlized: true,
    isRegistered: true,
    isLoading: false,
  },
];

export default function panelReducer(state = initialState) {
  return state;
}
