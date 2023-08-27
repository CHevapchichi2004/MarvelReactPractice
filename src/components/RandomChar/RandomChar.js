import { useEffect, useState } from 'react';
import '../RandomChar/RandomChar.css';
import mjolnir from '../../../src/resources/img/mjolnir.png';
import {useMarvelServices} from '../../services/MarvelServices';
import Spinner from '../somethingElse/Spiner';
import ErrorMess from '../ErrorMess/ErrorMess';



const RandomChar = () => {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         char: {},
    //         loading: true,
    //         error: false
    //     }
    // }

    const [char, setChar] = useState({});
    const {loading, error, getCharacter, clearError} = useMarvelServices()

    useEffect(() => {
        updateChar()
    }, [])


    const onCharLodaed = (char) => {
        if (char.descr.length > 150) {
            char.descr = char.descr.slice(0,150) + `...(Read more on Wiki page of ${char.name})`
        } else if (char.descr.length === 0) {
            char.descr = `Read about '${char.name}' on Wiki or Home pages`
        }   
        setChar(char);
        
    }

    const updateChar = () => {
        clearError()
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        getCharacter(id).then(res => {onCharLodaed(res)});
    }

    const err = (error) ? <ErrorMess/> : null
    const spinner = (loading) ? <Spinner/> : null
    const content = !(error || loading) ? <View char={char}/> : null
    return(
        <div className="randomchar">
            {err}
            {spinner}
            {content}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button onClick={updateChar} className="button button__main">
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}


const View = ({char}) => {
    const {name, descr, img, home, wiki} = char;
    return (
    <div className="randomchar__block">
        {(img === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") ? (<img src={img} style={{objectFit: 'contain'}} alt="Random character" className="randomchar__img"/>) : (<img src={img} alt="Random character" className="randomchar__img"/>)}
        <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">{descr}</p>
            <div className="randomchar__btns">
                <a href={home} className="button button__main">
                    <div className="inner">homepage</div>
                </a>
                <a href={wiki} className="button button__secondary">
                    <div className="inner">Wiki</div>
                </a>
            </div>
        </div>
    </div>)
}

export {RandomChar}