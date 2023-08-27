import '../AppBanner/AppBanner.css'
import Avengers_logo from '../../resources/img/Avengers_logo.png'
import Avengers from '../../resources/img/Avengers.png'

const AppBanner = () => {
    return (
    <div className="app__banner">
        <img src={Avengers} alt="Avengers"/>
        <div className="app__banner-text">
            New comics every week!<br/>
            Stay tuned!
        </div>
        <img src={Avengers_logo} alt="Avengers logo"/>
    </div>
    )
}
export default AppBanner