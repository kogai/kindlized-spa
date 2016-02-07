const initialState = [
  {
    name: '書籍検索',
    link: '/',
  },
  {
    name: 'シリーズ',
    link: '/series',
  },
  {
    name: 'アカウント',
    link: '/account',
  },
];

export default function menuReducer(state = initialState) {
  return state;
}
