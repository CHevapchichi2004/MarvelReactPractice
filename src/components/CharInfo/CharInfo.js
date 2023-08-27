import '../CharInfo/CharInfo.css';
import Spinner from '../somethingElse/Spiner';
import ErrorMess from '../ErrorMess/ErrorMess';
import Skeleton from '../Skeleton/Skeleton';
import { useEffect, useState } from 'react';
import {useMarvelServices} from '../../services/MarvelServices';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharInfo = (props) => {

    const [character, setCharacter] = useState(null);




    // const marvelServices = useMemo(() => {
    //     return new MarvelServices()   
    // }, [])

    const {loading, error, getCharacter} = useMarvelServices()


    useEffect(() => {
        if (!props.id) {
            return;
        }

        getCharacter(props.id).then((res) => {
            setCharacter(res)
        })

    }, [props.id])


    const load = (loading) ? <Spinner/> : null,
            err = (error) ? <ErrorMess/> : null,
            content = !(error || loading || !character) ? <View char={character}/> : null,
            skeleton = (loading || error || character) ? null : <Skeleton/>

    console.log(character)
    return (
        <div className="char__info">
            {load}
            {err}
            {content}
            {skeleton}
        </div>
    )
    
}


const View = (props) => {
    
    const renderComList = () => {
        if (props.char.comics.length === 0) {
            return 'Sorry, we cant find any comics'
        } else if (props.char.comics.length < 10) {
            return props.char.comics.map((item,i) => {
                console.log(item.resourceURI.slice(item.resourceURI.lastIndexOf('/')))
                return <Link style={{display: 'block'}} key={item.resourceURI.slice(item.resourceURI.lastIndexOf('/')+ 1)}  to={'/comics' + item.resourceURI.slice(item.resourceURI.lastIndexOf('/'))}><li className="char__comics-item">{item.name}</li></Link>
            })
        } else {
            return props.char.comics.splice(0,10).map((item,i) => {
                return <Link style={{display: 'block'}} key={item.resourceURI.slice(item.resourceURI.lastIndexOf('/')+ 1)}  to={'/comics' + item.resourceURI.slice(item.resourceURI.lastIndexOf('/'))}><li className="char__comics-item">{item.name}</li></Link>
            })
        }
    }
    
    const char = props.char
    console.log(char)
        
    return(
        <>
            <div className="char__basics">
                {(char.img === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') ? (<img src={char.img} style= {{objectFit: 'initial'}} alt={char.name}/>) : <img src={char.img} alt={char.name}/>}
                <div>
                    <div className="char__info-name">{char.name}</div>
                    <div className="char__btns">
                        <a href={char.home} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={char.wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {char.descr}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {renderComList()}
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    id: PropTypes.number
}

export default CharInfo;