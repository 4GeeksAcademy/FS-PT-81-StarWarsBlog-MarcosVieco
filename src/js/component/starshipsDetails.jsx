import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const StarshipsDetails = (props) => {
    const {store, actions } = useContext(Context);
    console.log(`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`);
    
    return(
        <div className="card">
        <div className="d-flex">
            <figure>
                <img src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`} alt="" />
                <figcaption>
                    {store.detailed?.properties?.name}
                </figcaption>
            </figure>
        </div>
        <div>
            <p>
                {store.detailed?.properties?.model}
            </p>
            <p>
                {store.detailed?.properties?.manufacturer}
            </p>
            <p>
                {store.detailed?.properties?.cost_in_credits}
            </p>
            <p>
                {store.detailed?.properties?.passengers}
            </p>
            <p>
                {store.detailed?.properties?.crew}
            </p>
        </div>
    </div>
    )
}