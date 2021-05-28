import React from "react";

export const Pierola = () => {
	return (
		<div className="sedes">
			<div className="sedes-info">
				<div className="sedes-info-void"></div>
				<div className="sedes-info-txt">
					<h2>
						Bienvenido a nuestra <br />
						sede Nicolas de Pierola
					</h2>
					<p>
						<i className="fas fa-map-marker-alt"></i>Av. Nicolás de Piérola 1106
						Urb. San Fernando <br />
						<i className="far fa-clock"></i>Lunes a Sábado 7:00am - 7:00pm{" "}
						<br />
						<i className="fab fa-whatsapp"></i>969603777 - 990094744
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
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.0256213046923!2d-79.03844759954477!3d-8.098869215596913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d9411fe7179%3A0xacf1f607c39f0e10!2sAv.%20Nicol%C3%A1s%20de%20Pi%C3%A9rola%201106%2C%20Trujillo%2013001!5e0!3m2!1ses-419!2spe!4v1619194778396!5m2!1ses-419!2spe"
						style={{ border: "0" }}
						allowfullscreen=""
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};
