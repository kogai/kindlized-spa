const initialState = [
  {
    name: '青空エール',
    isEditing: false,
  },
  {
    name: 'ヒストリエ',
    isEditing: true,
  },
  {
    name: 'よつばと',
    isEditing: false,
  },
];

export default function seriesReducer(state = initialState) {
  return state;
}
