import axios from 'axios';

import { LOG_IN, USER_INSCRIPTION, saveUserLogin, saveUserInscription, errorInscription, errorLogin } from 'src/actions/user';

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
          store.dispatch(errorLogin());
        });
      next(action);
      break;
    }
    case USER_INSCRIPTION: {
      const { email, confirmEmail, pass, confirmPass, name } = store.getState().user;
      if (email === confirmEmail && pass === confirmPass && email !== '' && pass !== '' && name !== '') {
        axios.post('LE BACK', {
          email,
          pass,
          name,
        }, {
          withCredentials: true,
        })
          .then((response) => {
            store.dispatch(saveUserInscription(response.LEBACK, response.LEBACKname));
          })
          .catch((error) => {
            console.log(error, 'Je suis dans le middleware LOGIN');
          });
      }
      else {
        store.dispatch(errorInscription());
      }
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default user;
