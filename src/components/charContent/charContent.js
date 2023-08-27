import '../charContent/charContent.css'
import CharList from '../CharList/CharList'
import CharInfo from "../CharInfo/CharInfo";
import ErrBoundary from '../errBoundary/ErrBound';
import { useState } from 'react';

const CharContent = () => {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         charSelected: null
    //     }
    // }
    const [charSelected, setCharSelected] = useState(null);

    return (
        <div className="char__content">
            <CharList onCharSelected={setCharSelected}/>
            <ErrBoundary>
                <CharInfo id={charSelected}/>
            </ErrBoundary>
        </div>
    )
}

export {CharContent}