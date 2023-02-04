import {JokeSourceURL} from './const';

export const getJoke = () => {
    return fetch(JokeSourceURL)
      .then(response => response.json())
      .then(data => {
        return {setup: data.setup, punchline: data.punchline};
      });
  };

//   export const LoginAPI = (username, password) =>{
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     var raw = JSON.stringify({
//     "username": username,
//     "password": password
//     });
//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw
//     };
//     return fetch(serverRoutes.Login, requestOptions)
// }