import axios from 'axios'; 



const initialState = {
    loading: false, 
    articles: [], 
}

const REQUEST_ARTICLE = 'REQUEST_ARTICLE'; 

export const dispatcher = () => {
    let articles = axios.get('/api/reddit')
                   .then(res=>res.data)
                   .catch(err=>err.message); 

    return {
        type: REQUEST_ARTICLE, 
        payload: articles
    }
}


export default function reducer (state=initialState, action) {
    const {type, payload } = action; 
    switch(type) {
        case REQUEST_ARTICLE + '_PENDING' : return {...state, loading: true }
        case REQUEST_ARTICLE + '_FULFILLED' : return {...state, articles: payload, loading: false }
        case REQUEST_ARTICLE + '_REJECTED' : return {...state, loading: false }
        default: return state; 
    }
}