import axios from 'axios';

import { LOG_IN, USER_INSCRIPTION, saveUserLogin, saveUserInscription, errorInscription, errorLogin, emailInUse } from 'src/actions/user';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, pass } = store.getState().user;
      axios.post('http://localhost:8000/api/login_check', {
        username: email,
        password: pass,
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response, 'success login');
          store.dispatch(saveUserLogin(response.data.token));
        })
        .catch((error) => {
          console.log(error, 'Je suis dans le middleware LOGIN error');
          store.dispatch(errorLogin());
        });
      next(action);
      break;
    }
    case USER_INSCRIPTION: {
      const { email, confirmEmail, pass, confirmPass, name } = store.getState().user;
      if (email === confirmEmail && pass === confirmPass && email !== '' && pass !== '' && name !== '') {
        axios.post('http://localhost:8000/api/v1/users/add', {
          email,
          password: pass,
          pseudo: name,
        },
        {
          headers: {
            // Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            console.log(response, 'post success');
            store.dispatch(saveUserInscription());
          })
          .catch((response) => {
            console.log(response, 'Je suis dans le middleware LOGIN error');
            store.dispatch(emailInUse());
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
