import React from "react";

export const Hye = () => {
	return (
		<div className="hye">
			<div className="hye-container">
				<div className="caja-horario">
					<div className="h3-horario">
						<i className="fas fa-clock"></i>HORARIO
					</div>
					<div className="p-horario">
						<p>
							Lunes - Sabado <br /> 7:00 a.m. - 7:00 p.m.
						</p>
					</div>
				</div>
				<div className="caja-emergencia">
					<div className="h3-emergencia">
						<i className="fas fa-hospital-symbol"></i>N. DE EMERGENCIA
					</div>
					<div className="p-emergencia">
						<p>
							<i className="fas fa-mobile-alt"></i>990094744 <br />{" "}
							<i className="fas fa-phone-volume"></i>(044) 767608
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
