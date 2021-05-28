import React from "react";

export const Huamachuco = () => {
	return (
		<div className="sedes">
			<div className="sedes-info">
				<div className="sedes-info-void"></div>
				<div className="sedes-info-txt">
					<h2>
						Bienvenido a nuestra <br />
						sede Huamachuco
					</h2>
					<p>
						<i className="fas fa-map-marker-alt"></i>Jr. Leoncio Prado Nº786{" "}
						<br />
						<i className="far fa-clock"></i>Lunes a Sábado 7:00am - 7:00pm{" "}
						<br />
						<i className="fas fa-phone-alt"></i>(044) 348070 <br />
					</p>
				</div>
			</div>
			<div className="sedes-map">
				<div className="sedes-map-title">
					<h2>
						<i className="fas fa-map-marked-alt"></i> ¿Cómo llegar?
					</h2>
				</div>
				<div className="sedes-map-map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.3261828592836!2d-78.04778897109743!3d-7.815028129219824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda96e49f5e3836a3!2sCLINICA%20HORIZONTE%20MEDIC!5e0!3m2!1ses-419!2spe!4v1619196353909!5m2!1ses-419!2spe"
						style={{ border: "0" }}
						allowfullscreen=""
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};
