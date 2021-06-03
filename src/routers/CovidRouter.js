import React from "react";
import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Switch,
} from "react-router-dom";
import { Covid } from "../components/section/covid/Covid";
import { Rapida } from "../components/section/covid/Rapida";
import { Serologica } from "../components/section/covid/Serologica";
import { Antigeno } from "../components/section/covid/Antigeno";
import { Molecular } from "../components/section/covid/Molecular";

export const CovidRouter = () => {
	return (
		<Router>
			<section className="covid">
				<Covid />
				<div>
					<Switch>
						<Route exact path="/covid-prueba-rapida">
							<Rapida />
						</Route>
						<Route exact path="/covid-prueba-serologica">
							<Serologica />
						</Route>
						<Route exact path="/covid-prueba-antigeno">
							<Antigeno />
						</Route>
						<Route exact path="/covid-prueba-molecular">
							<Molecular />
						</Route>
					</Switch>
				</div>
			</section>
		</Router>
	);
};
