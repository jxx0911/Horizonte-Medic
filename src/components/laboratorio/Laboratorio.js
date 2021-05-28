import React from "react";

export const Laboratorio = () => {
	return (
		<div class="tarjetas">
			<div class="laboratorio-title">
				<h2>LABORATORIO</h2>
			</div>
			<div class="container-tarjetas">
				<div class="card" style={{ width: "19rem" }}>
					<img src="images/laboratorio/laboratorioClinico.jpg" alt="" />
					<h4>Laboratorio Clínico</h4>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						accusantium assumenda, in adipisci?
					</p>
				</div>
				<div class="card" style={{ width: "19rem" }}>
					<img src="images/laboratorio/rayosX.jpg" alt="" />
					<h4>Rayos X</h4>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						accusantium assumenda, in adipisci?
					</p>
				</div>
				<div class="card" style={{ width: "19rem" }}>
					<img src="images/laboratorio/ultrasonido.jpg" alt="" />
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
