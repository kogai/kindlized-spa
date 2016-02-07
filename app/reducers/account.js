const initialState = {
  isLogin: true,
  button: [
    {
      name: 'ログイン',
      link: '/account/login',
      method: null,
      class: 'default',
      isLogin: false,
    },
    {
      name: 'アカウント作成',
      link: '/account/register',
      method: null,
      class: 'primary',
      isLogin: false,
    },
    {
      name: 'ログアウト',
      link: null,
      method: 'logout',
      class: 'default',
      isLogin: true,
    },
  ],
};

export default function editReducer(state = initialState) {
  return state;
}
