import React from "react";
import img from "../../img/ocupacional.jpg";

export const SaludOcupacional = () => {
	return (
		<div className="salud-ocupacional">
			<div className="s-o-title">
				<h2>SALUD OCUPACIONAL</h2>
			</div>
			<div className="salud-ocupacional-container">
				<div className="s-o-img">
					<img src={img} alt="" />
				</div>
				<div className="s-o-info">
					<ul>
						<li>
							<i className="fas fa-check-circle"></i>Exámenes preocupacionales
						</li>
						<li>
							<i className="fas fa-check-circle"></i>Exámenes periodicos
						</li>
						<li>
							<i className="fas fa-check-circle"></i>Exámenes de retiro
						</li>
						<li>
							<i className="fas fa-check-circle"></i>Exámenes para conducción de
							vehículos
						</li>
						<li>
							<i className="fas fa-check-circle"></i>Exámenes de altura
						</li>
						<li>
							<i className="fas fa-check-circle"></i>Exámenes para trabajos en
							caliente
						</li>
						<li>
							<i className="fas fa-check-circle"></i>Exámenes para espacios
							confinados
						</li>
						<li>
							<i className="fas fa-check-circle"></i>Exámenes para trabajos de
							alto riesgo
						</li>
						<li>
							<i className="fas fa-check-circle"></i>Fist Test
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
