import axios from 'axios';

import { LOG_IN, saveUserLogin } from 'src/actions/user';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, pass } = store.getState().user;
      axios.post('LE BACK', {
        email,
        pass,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUserLogin(response.LEBACK, response.LEBACKname));
        })
        .catch((error) => {
          console.log(error, 'Je suis dans le middleware LOGIN');
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default user;