import React, { useState } from "react";
import { NavResp } from "./NavResp";

export const Logo = () => {
	/* const btnResponsive = () => {
		const burguer = document.querySelector(".burguer");
		let navegacion = document.querySelector(".navegacion");
		const barras = document.querySelectorAll(".burguer span");

		burguer.addEventListener("click", () => {
			navegacion.classList.toggle("activado");
			barras.forEach((child) => {
				child.classList.toggle("animado");
			});
		});
	}; */

	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<>
			<h1 className="logo">
				<img
					className="logo-img"
					src="images/LOGO_color_HM.png"
					alt="Horizonte Medic"
				/>
				<i
					className={
						click ? "fas fa-bars burguer click" : "fas fa-bars burguer "
					}
					onClick={handleClick}
				></i>
			</h1>
			<NavResp navRespClass={click ? "nav-resp show" : "nav-resp	"} />
		</>
	);
};
