import './CharList.css'
import CharListItem from '../CharListItem/CharListItem'
import { Component, useEffect, useMemo, useState } from 'react'
import {useMarvelServices} from '../../services/MarvelServices'
import Spinner from '../somethingElse/Spiner';
import ErrorMess from '../ErrorMess/ErrorMess';
import PropTypes from 'prop-types' ;


const CharList = (props) => {

    const [chars, setChars] = useState([]),
          [count, setCount] = useState(0),
          [newItemLoading, setNewItemLoading] = useState(false),
          [endChar, setEndChar] = useState(false),
          [iter, setIter] = useState(0);

    const {loading, error, getSomeChar, clearError} = useMarvelServices();

    // onError = () => {
    //     this.setState({
    //         error: true,
    //         loading: false,
    //     })
    // }

    // charLoaded = (chars) => {
    //     this.setState({chars, loading: false, newItemLoading: false})
    // }


    useEffect(() => {
        charUpdate(true)
    }, [])

    const charUpdate = (initial) => {
        clearError()
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        getSomeChar(0).then(chars => {
            setChars(chars)
            setNewItemLoading(false)
        })
        setIter(() => {
            return iter + 9
        })
    }

    const onDopeChar = () => {
        setIter(() => {
            return iter + 9
        })
        setNewItemLoading(true)
        
        getSomeChar(iter).then((characters) => {
            if (characters.length < 8) {
                setEndChar(true)
            }

            setChars(() => [...chars, ...characters])
            setNewItemLoading(() => false)

        })
    }


    const load = (loading && !newItemLoading) ? <Spinner/> : null
    const err = (error) ? <ErrorMess/> : null
    const cont = <View chars={chars} onCharSelected={props.onCharSelected}/>

    return (
        <div className="char__list">
            {load}
            {err}
            {cont}
            <button 
            onClick={() => onDopeChar()} 
            className="button button__main button__long"
            disabled={newItemLoading}
            style={{'display': (endChar) ? 'none' : 'block'}}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
    
}

class View extends Component  {
    render() {
        const {chars, onCharSelected} = this.props
        const characters = chars.map((char => <CharListItem id ={char.id} key={char.id} name={char.name} img={char.img} onCharSelected={onCharSelected}/>))
        return(
            <ul className="char__grid">
                {characters}
            </ul>
        )
    }
}
CharList.propTypes = {
    onCharSelected: PropTypes.func,
}
export default CharList