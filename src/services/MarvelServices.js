import { useHttp } from "../components/hooks/http.hook";

const useMarvelServices = () => {

    const {loading, request, error, clearError} = useHttp()

    const _apiKey = 'apikey=4113d08642616b6827ef911f4007f3dc'
    const _apiBase = 'https://gateway.marvel.com:443/v1/public'

    

    const getAllCharacters = () => {
        return request(`${_apiBase}/characters?limit=9&offset=210&${_apiKey}`);
    }

    const _transformComs = (res) => ({
        id: res.id,
        thumbnail: res.thumbnail.path +'.' + res.thumbnail.extension,
        title: res.title,
        descr: res.description || 'There is not description',
        price: res.prices[0].price === 0 ? 'NOT AVAILABLE' : res.prices[0].price + ' $',
        pages: res.pageCount ? `${res.pageCount} p.` : 'No info about page count',
        lang: res.textObjects[0]?.language || 'en-rus',

    })

    const _transfromChar = (res) => {
        return {
            name: res.name,
            img: res.thumbnail.path + '.' + res.thumbnail.extension,
            descr: res.description,
            home: res.urls[0].url,
            wiki: res.urls[1].url,
            id: res.id,
            comics: res.comics.items
        }
    }

    const getCharacter = async (id) => {
        const res =  await request(`${_apiBase}/characters/${id}?${_apiKey}`);
        return _transfromChar(res.data.results[0])
    }

    const getSomeChar = async (i) => {
        const res = await request((`${_apiBase}/characters?limit=9&offset=${288+i}&${_apiKey}`))
        return res.data.results.map(_transfromChar)
    }

    const getComs = async (i = 0) => {
        const res = await request(`${_apiBase}/comics?limit=8&offset=${i+40}&${_apiKey}`);
        return res.data.results.map(_transformComs)
    }

    const getCom = async (id) => {
        const res = await request(`${_apiBase}/comics/${id}?${_apiKey}`);
        return _transformComs(res.data.results[0])
    }

    return { loading, error, getAllCharacters, getCharacter, getSomeChar, clearError, getComs, getCom}
}

export {useMarvelServices}
