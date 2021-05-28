import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "../components/main/Nav";
import { About } from "../components/about/About";
import { ServGenerales } from "../components/servicios-generales/ServGenerales";
import { SaludOcupacional } from "../components/salud-ocupacional/SaludOcupacional";
import { Laboratorio } from "../components/laboratorio/Laboratorio";
import { Pierola } from "../components/sedes/Pierola";
import { StoDomingo } from "../components/sedes/StoDomingo";
import { Huamachuco } from "../components/sedes/Huamachuco";
import { Huancayo } from "../components/sedes/Huancayo";
import { Reserve } from "../components/reserve/Reserve";
import { Home } from "../components/home/Home";

export const HMWebRouter = () => {
	return (
		<Router>
			<Nav />
			<div className="switch" style={{ position: "relative", top: "7rem" }}>
				<Switch>
					<Route path="/nosotros">
						<About />
					</Route>
					<Route path="/servicios-generales">
						<ServGenerales />
					</Route>
					<Route path="/salud-ocupacional">
						<SaludOcupacional />
					</Route>
					<Route path="/laboratorio">
						<Laboratorio />
					</Route>
					<Route path="/sede-pierola">
						<Pierola />
					</Route>
					<Route path="/sede-stodominguito">
						<StoDomingo />
					</Route>
					<Route path="/sede-huamachuco">
						<Huamachuco />
					</Route>
					<Route path="/sede-huancayo">
						<Huancayo />
					</Route>
					<Route path="/reserva-cita">
						<Reserve />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
