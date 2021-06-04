import React from "react";
import { ServiciosItems } from "./ServiciosItems";

export const ServGenerales = () => {
	return (
		<div className="tarjetas">
			<div className="s-g-title">
				<h2>SERVICIOS GENERALES</h2>
			</div>
			<div className="container-tarjetas">
				{ServiciosItems.map((item) => (
					<div className="card">
						<img src={item.src} alt="" />
						<h4>{item.title}</h4>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};
