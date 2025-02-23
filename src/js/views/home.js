import React, { useContext } from "react";

import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const {store, actions} = useContext(Context)

	return (
	<div className="text-center mt-5">
		<section>
			<h3>People</h3>
			<div className="row">
			{
				store.people?.map(el => <Card type={'people'} key={el.uid} name={el.name} uid={el.uid} img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}/>)
			}
			</div>
		</section>
		<section>
			<h3>Planets</h3>
			<div className="row">
			{
				store.planets?.map(el => <Card type={'planets'} key={el.uid} name={el.name} uid={el.uid} img={`https://starwars-visualguide.com/assets/img/planets/${el.uid}.jpg`}/>)
			}
			</div>
		</section>
	</div>
	)
};
