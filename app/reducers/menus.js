const initialState = [
  {
    name: '書籍検索',
    link: '/',
    icon: 'search',
  },
  {
    name: 'シリーズ',
    link: '/series',
    icon: 'book',
  },
  {
    name: 'マイページ',
    link: '/mypage',
    icon: 'user',
  },
];

export default function menuReducer(state = initialState) {
  return state;
}
