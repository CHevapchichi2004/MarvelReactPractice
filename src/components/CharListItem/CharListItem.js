import '../CharListItem/CharListItem.css'
import { Component } from 'react'

export default class CharListItem extends Component {
    render() {
        const {name, img, id} = this.props
        return (
            <li onClick={() => this.props.onCharSelected(id)} className="char__item char__item_selected">
                <img src={img} alt="abyss"/>
                <div className="char__name">{name}</div>
            </li>
        )
    }
}