import axios from 'axios';
import {configs} from "../env/rick"

function apiRick(url) {
  return axios.get(!url ? configs.RICK : url)
    .then(function (response) {
      // handle success
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

export default apiRick;