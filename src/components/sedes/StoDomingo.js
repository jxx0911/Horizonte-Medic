import React from "react";

export const StoDomingo = () => {
	return (
		<div className="sedes">
			<div className="sedes-info">
				<div className="sedes-info-void"></div>
				<div className="sedes-info-txt">
					<h2>
						Bienvenido a nuestra <br />
						sede Santo Dominguito
					</h2>
					<p>
						<i className="fas fa-map-marker-alt"></i>C. Guillermo Prescott Nº127
						Urb. Santo Dominguito
						<br />
						<i className="far fa-clock"></i>Lunes a Sábado 7:00am - 7:00pm{" "}
						<br />
						<i className="fas fa-phone-alt"></i>(044) 666120 <br />
						<i className="fab fa-whatsapp"></i>964385075 / 990094744
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
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.937172595101!2d-79.01312325434434!3d-8.114274694831973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad162cc143c42b%3A0x76533cae423b57ac!2sPOLICLINICO%20HORIZONTE%20MEDIC!5e0!3m2!1ses-419!2spe!4v1619196703244!5m2!1ses-419!2spe"
						style={{ border: "0" }}
						allowfullscreen=""
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};
