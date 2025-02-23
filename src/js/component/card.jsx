import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Card = (props) => {
    const {store, actions} = useContext(Context);

    const handleFav = () => {
        const fav = {...props}
        console.log(fav)
        actions.addRemoveFavorite(fav)
    }

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <figure>
                    <img className="card-img-top" src={props.img} alt={props.name} />
                    <figcaption>{props.name}</figcaption>
                </figure>
                <div className="d-flex justify-content-around">
                    <Link to={`/details/${props.type}/${props.uid}`}>
                        <button className="btn btn-primary">Learn more</button>
                    </Link>
                    <button className="btn btn-outline-secondary"
                    onClick={handleFav}
                    > Add/Delete fav</button>
                </div>
            </div>
        </div>
    )
}