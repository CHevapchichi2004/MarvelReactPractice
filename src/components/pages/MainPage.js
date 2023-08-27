import {RandomChar} from '../RandomChar/RandomChar'
import {CharContent} from '../charContent/charContent'

const MainPage = () => {
    return (
        <>
            <RandomChar/> 
            <CharContent/>
            <img className="bg-decoration" src="./vision.png" alt="vision"></img>
        </>
    )
}

export {MainPage}