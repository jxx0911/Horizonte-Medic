import React from "react";
import img1 from "../../img/laboratorio/laboratorioClinico.jpg";
import img2 from "../../img/laboratorio/rayosX.jpg";
import img3 from "../../img/laboratorio/ultrasonido.jpg";

export const Laboratorio = () => {
	return (
		<div class="tarjetas">
			<div class="laboratorio-title">
				<h2>LABORATORIO</h2>
			</div>
			<div class="container-tarjetas">
				<div class="card" style={{ width: "19rem" }}>
					<img src={img1} alt="" />
					<h4>Laboratorio Clínico</h4>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						accusantium assumenda, in adipisci?
					</p>
				</div>
				<div class="card" style={{ width: "19rem" }}>
					<img src={img2} alt="" />
					<h4>Rayos X</h4>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						accusantium assumenda, in adipisci?
					</p>
				</div>
				<div class="card" style={{ width: "19rem" }}>
					<img src={img3} alt="" />
					<h4>Ecografías</h4>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						accusantium assumenda, in adipisci?
					</p>
				</div>
			</div>
		</div>
	);
};
