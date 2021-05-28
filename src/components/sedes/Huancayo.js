import React from "react";

export const Huancayo = () => {
	return (
		<div class="sedes">
			<div class="sedes-info">
				<div class="sedes-info-void"></div>
				<div class="sedes-info-txt">
					<h2>
						Bienvenido a nuestra <br />
						sede Huancayo
					</h2>
					<p>
						<i class="fas fa-map-marker-alt"></i>Av. Huancavelica Nº2225
						<br />
						<i class="far fa-clock"></i>Lunes a Sábado 7:00am - 7:00pm <br />
						<i class="fas fa-phone-alt"></i>(044) 659554 <br />
					</p>
				</div>
			</div>
			<div class="sedes-map">
				<div class="sedes-map-title">
					<h2>
						<i class="fas fa-map-marked-alt"></i> ¿Cómo llegar?
					</h2>
				</div>
				<div class="sedes-map-map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.954160865516!2d-75.22926343479489!3d-12.049828605761952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e9619dbd26dcf%3A0x7a1e251da584bf3e!2sAv.%20Huancavelica%202225%2C%20Huancayo%2012006!5e0!3m2!1ses-419!2spe!4v1619197763964!5m2!1ses-419!2spe"
						style={{ border: "0" }}
						allowfullscreen=""
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};
