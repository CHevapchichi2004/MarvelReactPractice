import '../SingleComic/SingleComic.css'
import {useMarvelServices} from '../../services/MarvelServices'
import { useEffect, useState } from 'react';
import Spinner from '../somethingElse/Spiner';
import ErrorMess from '../ErrorMess/ErrorMess';
import { Link, useParams } from 'react-router-dom';

const SingleComic = () => {
    const [com, setCom] = useState();

    const params = useParams()

    const {loading, error, getCom} = useMarvelServices();
    useEffect(() => {
        getCom(params.id).then(res => setCom(()=> (res)))
        console.log(com)
    }, [])

    const load = loading ? <Spinner/> : null
    const err = error ? <ErrorMess/> : null
    const cont = !(error || loading || !com) ? <View com={com}/> : null

    return (
        
        <div className="single-comic">
            {load}
            {err}
            {cont}
        </div>
    )
}

const View = ({com}) => {
    return (
        <>
            <img src={com.thumbnail} alt={com.title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{com.title}</h2>
                <p className="single-comic__descr">{com.descr}</p>
                <p className="single-comic__descr">{com.pages}</p>
                <p className="single-comic__descr">Language: {com.lang}</p>
                <div className="single-comic__price">{com.price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </>
    )
}
export {SingleComic}