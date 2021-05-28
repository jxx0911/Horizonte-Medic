import React from "react";

export const Covid = () => {
	return (
		<section className="covid">
			<div className="covid-container">
				<div className="covid-title">
					<h2>
						{" "}
						<b>COVID-19</b> <br /> Pruebas
					</h2>
				</div>
				<div className="covid-pruebas">
					<ul>
						<li id="btnRapida" className="covid-here">
							Rápida
						</li>
						<li id="btnSerologica">Serológica</li>
						<li id="btnAntigeno">Antígeno</li>
						<li id="btnMolecular">Molecular</li>
					</ul>
				</div>
			</div>
			<div className="covid-info">
				<div id="covid-container" className="covid-container">
					<div className="covid-info-txt">
						<h3>PRUEBA RÁPIDA</h3>
						<div className="covid-info-txt-container">
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Placeat ab deserunt voluptatum dolores optio! Corporis vel, enim
								iste repellendus ratione tenetur quia deserunt molestias. Vel
								velit sapiente ea hic inventore.
							</p>
						</div>
					</div>
					<div className="covid-info-img">
						{/* <!-- <img src="../img/covid/rapida.jpg" alt=""> --> */}
					</div>
				</div>
			</div>
		</section>
	);
};
