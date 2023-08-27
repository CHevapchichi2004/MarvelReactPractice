import '../ComicsList/ComicsList.css'
import {useMarvelServices} from '../../services/MarvelServices'
import { useEffect, useState } from 'react';
import { ComicsItem } from '../ComicsItem/ComicsItem';
import ErrorMess from '../ErrorMess/ErrorMess';
import Spinner from '../somethingElse/Spiner';

const ComicsList = () => {
    const {getComs, loading, error, clearError} = useMarvelServices();
    const [coms, setComs] = useState([]);
    const [iter, setIter] = useState(0);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        updateComs()
    }, [])


    const updateComs = () => {
        clearError()
        getComs(iter).then(comsLoaded)
    }

    const comsLoaded = (res) => {
        if (res.length < 8) {
            setIsEnd(true)
        }
        setComs(() => ([...coms, ...res]))
        setIter(() => (iter + 45))
    }

    const onDoperChar = () => {
        clearError()
        getComs(iter).then(comsLoaded)
    }


    const err = error ? <ErrorMess/> : null
    const load = loading ? <Spinner/> : null
    const content = coms.map((item) => {
        return <ComicsItem key = {item.id} thumbnail = {item.thumbnail} title = {item.title} price={item.price} id={item.id}/>
    })

    console.log('render')
    return (
        <div className="comics__list">
            <ul className="comics__grid">
                {content}
            </ul>
            {load}
            {err}
            {isEnd ? 'Комиксы закончились!' : (
                <button onClick={onDoperChar} className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            )
            }
        </div>
    )
}
export default ComicsList