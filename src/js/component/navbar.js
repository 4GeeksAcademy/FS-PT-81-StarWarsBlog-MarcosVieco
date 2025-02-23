import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [showDropdown, setShowDropdown] = useState(false);


	const handleShowFavs = () => {
		setShowDropdown(!showDropdown);
	};

	const handleDelete = (fav) => {
		actions.addRemoveFavorite(fav);
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3 px-3 d-flex justify-content-between">
			<div>
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><strong>Star Wars</strong></span>
				</Link>
			</div>

			<div className="favorites-container">
				<div
					className="favorites-button"
					onClick={handleShowFavs}>
					Favorites <span className="favorites-count">{store.favorites.length}</span>
				</div>

				{showDropdown && (
					<div className="favorites-dropdown">
						{store.favorites?.map((el, index) => (
							<div className="d-flex justify-content-between favorites-item">
								<div key={index}>
									{el.name}
								</div>
								<i
									className="fas fa-trash me-0" 
									onClick={() => handleDelete(el)} 
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</nav>
	);
};