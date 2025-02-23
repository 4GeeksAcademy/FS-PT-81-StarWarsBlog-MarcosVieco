import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { PeopleDetails } from "../component/peopleDetails.jsx";
import { PlanetsDetails } from "../component/planetsDetails.jsx";


export const Details = () => {

    const { store, actions } = useContext(Context);

    const params = useParams()

    useEffect(() => {
        actions.getOne(params.type, params.uid)
    }, [])

    console.log(params)

    return (
        <div className="container">
          {params.type==='people' && <PeopleDetails type={'characters'} uid={params.uid} />}
          {params.type==='planets' && <PlanetsDetails type={params.type} uid={params.uid} />}
        </div>

    )
}