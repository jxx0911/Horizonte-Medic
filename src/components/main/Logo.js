import React from "react";

export const Logo = () => {
	const btnResponsive = () => {
		const burguer = document.querySelector(".burguer");
		let navegacion = document.querySelector(".navegacion");
		const barras = document.querySelectorAll(".burguer span");

		burguer.addEventListener("click", () => {
			navegacion.classList.toggle("activado");
			barras.forEach((child) => {
				child.classList.toggle("animado");
			});
		});
	};

	return (
		<>
			<h1 className="logo">
				<img
					className="logo-img"
					src="images/LOGO_color_HM.png"
					alt="Horizonte Medic"
				/>
				<i className="fas fa-bars burguer " onClick={btnResponsive}></i>
			</h1>
		</>
	);
};
