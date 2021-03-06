import axios  from "axios";
// import {Subject} from 'rxjs'

const KEY = API_KEY

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet, statistics',
        key: KEY,
    }
})

export default instance;

// export const manageData = {
//     getYoutubeTags: async() => {
//         let response = new Subject(await instance.get('/videos'));
//         return response;
//     }
// }

