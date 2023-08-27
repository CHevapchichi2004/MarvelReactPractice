import ErrorMess from "../ErrorMess/ErrorMess"
import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <>
            <ErrorMess/>
            <p style={{textAlign: 'center', marginTop: '15px'}}>Sorry, there is not page, that u fuckn want</p>
            <Link to='/' style={{display: 'block', textAlign: 'center', color: '#F90013', marginTop: '15px'}}>Go to the main page</Link>
        </>
    )
}
export {Page404}