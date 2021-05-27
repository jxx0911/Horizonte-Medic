import React from "react";

export const Covid = () => {
	return (
		<section class="covid">
			<div class="covid-container">
				<div class="covid-title">
					<h2>
						{" "}
						<b>COVID-19</b> <br /> Pruebas
					</h2>
				</div>
				<div class="covid-pruebas">
					<ul>
						<li id="btnRapida" class="covid-here">
							Rápida
						</li>
						<li id="btnSerologica">Serológica</li>
						<li id="btnAntigeno">Antígeno</li>
						<li id="btnMolecular">Molecular</li>
					</ul>
				</div>
			</div>
			<div class="covid-info">
				<div id="covid-container" class="covid-container">
					<div class="covid-info-txt">
						<h3>PRUEBA RÁPIDA</h3>
						<div class="covid-info-txt-container">
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Placeat ab deserunt voluptatum dolores optio! Corporis vel, enim
								iste repellendus ratione tenetur quia deserunt molestias. Vel
								velit sapiente ea hic inventore.
							</p>
						</div>
					</div>
					<div class="covid-info-img">
						{/* <!-- <img src="../img/covid/rapida.jpg" alt=""> --> */}
					</div>
				</div>
			</div>
		</section>
	);
};
