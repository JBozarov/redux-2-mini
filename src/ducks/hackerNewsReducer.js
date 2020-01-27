import axios from 'axios'; 


const initialState = {
    loading: false, 
    articles: []
}


//action builder: 

const REQUEST_ARTICLES = 'REQUEST_ARTICLES'; 


export const requestArticles = () => {  //sometimes called dispatchers 
    let articles = axios.get('/api/hacker-news')
    .then(res=>res.data)
    .catch(err=>err.message); 

    return {
        type: REQUEST_ARTICLES, 
        payload: articles
    }
}


//
export default function reducer (state=initialState, action) {
    const {type, payload} = action 
    switch (type) {
        case REQUEST_ARTICLES + '_PENDING' : return {...state, loading: true }; 
        case REQUEST_ARTICLES + '_FULFILLED' : return {...state, articles: payload, loading: false }; 
        case REQUEST_ARTICLES + '_REJECTED' : return {...state, loading: false }; 
        default: return state; 
    }
}