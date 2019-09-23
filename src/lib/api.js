import axios from 'axios'

const base = axios.create({
    baseURL: 'https://dapi.kakao.com',
    headers: {
        Authorization: 'KakaoAK b4295efaba583c2e769b0b13490102af',
    }
});

const getBookList = (params) => {
    return base.get('/v3/search/book', {params})
        .then(it => it.data)
};

export const search = async (query) => {
    const params = {
        query: query,
        size: 10
    };
    return await getBookList(params)
};