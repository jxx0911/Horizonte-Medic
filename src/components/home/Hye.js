import React from "react";

export const Hye = () => {
	return (
		<div class="hye">
			<div class="hye-container">
				<div class="caja-horario">
					<div class="h3-horario">
						<i class="fas fa-clock"></i>HORARIO
					</div>
					<div class="p-horario">
						<p>
							Lunes - Sabado <br /> 7:00 a.m. - 7:00 p.m.
						</p>
					</div>
				</div>
				<div class="caja-emergencia">
					<div class="h3-emergencia">
						<i class="fas fa-hospital-symbol"></i>N. DE EMERGENCIA
					</div>
					<div class="p-emergencia">
						<p>
							<i class="fas fa-mobile-alt"></i>990094744 <br />{" "}
							<i class="fas fa-phone-volume"></i>(044) 767608
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
