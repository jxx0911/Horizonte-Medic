import React from "react";
import { Myv } from "./Myv";

export const About = () => {
	return (
		<>
			<div className="nosotros">
				<div className="nosotros-title">
					<h2>NOSOTROS</h2>
				</div>
				<div className="nosotros-logo">
					<div className="nosotros-logo-container">
						<img src="images/nosotros/LOGO_azul_HM23234.png" alt="" />
					</div>
				</div>
				<div className="nosotros-info">
					<div className="nosotros-info-container">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quos
						sed facilis quisquam inventore ullam repellat animi at, numquam
						placeat, suscipit nobis! Numquam itaque consequatur incidunt
						repellat provident animi quos! Lorem, ipsum dolor sit amet
						consectetur adipisicing elit. Perferendis doloribus quod assumenda
						beatae natus tempora eius ipsum! Libero sint unde repellat est
						molestiae mollitia tempore numquam officiis, ex dicta consequatur?
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</div>
				</div>
			</div>
			<Myv />
		</>
	);
};
