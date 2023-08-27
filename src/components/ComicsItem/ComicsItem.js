import { Link } from "react-router-dom"

export const ComicsItem = (props) => {
    return (
        <li className="comics__item">
            <Link to={`/comics/${props.id}`}>
                <img src={props.thumbnail} alt={props.title} className="comics__item-img" style={props.thumbnail=== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {objectFit: 'inherit'} : null}/>
                <div className="comics__item-name">{props.title}</div>
                <div className="comics__item-price">{props.price}</div>
            </Link>
        </li>
    )
}