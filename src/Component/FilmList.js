import React, {Component} from 'react'
import Film from './Film'

class FilmList extends Component{
render(){

    const filmNodes = this.props.films.map(film => {
        return(
            <Film title={film.name} url={film.url} key={film.id}></Film>
        )
    }) 
    return(
        <div className="comment-list">
            {filmNodes}
        </div>
    )
}

}
export default FilmList
