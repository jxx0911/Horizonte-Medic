import React from "react";
import { NavLink } from "react-router-dom";

export const Covid = () => {
	return (
		<div className="covid-container">
			<div className="covid-title">
				<h2>
					{" "}
					<b>COVID-19</b> <br /> Pruebas
				</h2>
			</div>
			<div className="covid-pruebas">
				<ul>
					<NavLink exact to="/covid-prueba-rapida" activeClassName="covid-here">
						<li>Rapida</li>
					</NavLink>

					<NavLink
						exact
						to="/covid-prueba-serologica"
						activeClassName="covid-here"
					>
						<li>Serológica</li>
					</NavLink>

					<NavLink
						exact
						to="/covid-prueba-antigeno"
						activeClassName="covid-here"
					>
						<li>Antígeno</li>
					</NavLink>

					<NavLink
						exact
						to="/covid-prueba-molecular"
						activeClassName="covid-here"
					>
						<li>Molecular</li>
					</NavLink>
				</ul>
			</div>
		</div>
	);
};
