//Make Network calls
//fetch() Promise API's
//catch block/error handdling shoud be invoked outside, or else req can fail silently
//without the caller being notified
import axios from 'axios';

const makeGETCall = (url) => {
    return axios.get(url).then((axiosResponse) => {
        console.log(axiosResponse);
        if(axiosResponse.status === 200){
            return axiosResponse.data;
        }
    })
        .catch(function (error) {
            // handle error
            console.log(error);
            throw new Error(error);
        })
}

//You can add more types of call below eg. POST, PUT, PATCH etc. 
//or generalize the method above.

export {makeGETCall};
