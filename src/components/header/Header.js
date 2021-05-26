import React from "react";
import { HMWebRouter } from "../../router/HMWebRouter";
import { Logo } from "./Logo";
import { NavResp } from "./NavResp";
import { Preheader } from "./Preheader";

export const Header = () => {
	return (
		<>
			<header className="header">
				<Preheader />
			</header>
			<main>
				<div id="barra" className="barra">
					<div className="contenedor">
						<Logo />
						<HMWebRouter />
					</div>

					<NavResp />
				</div>
			</main>
		</>
	);
};
