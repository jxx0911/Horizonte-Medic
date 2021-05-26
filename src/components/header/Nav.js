import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
	return (
		<nav className="navegacion">
			<ul>
				<li>
					<Link className="nav-item active" to="/">
						Inicio
					</Link>
				</li>
				<li>
					<Link className="nav-item" to="/nosotros" id="btnNosotros">
						Nosotros
					</Link>
				</li>
				<li>
					<a
						className="nav-item"
						style={{ cursor: "default" }}
						href="#Servicios"
						onclick="return false;"
					>
						Servicios
						<i
							style={{ paddingLeft: ".5rem" }}
							className="fas fa-chevron-down"
						></i>
					</a>
					<ul>
						<li>
							<Link to="/servicios-generales" id="btnSG">
								Servicios Generales
							</Link>
						</li>
						<li>
							<Link to="/salud-ocupacional" id="btnSO">
								Salud Ocupacional
							</Link>
						</li>
						<li>
							<Link to="/laboratorio" id="btnLab">
								Laboratorio
							</Link>
						</li>
					</ul>
				</li>
				<li>
					<a
						className="nav-item"
						style={{ cursor: "default" }}
						href="#"
						onclick="return false;"
					>
						Sedes
						<i
							style={{ paddingLeft: ".5rem" }}
							className="fas fa-chevron-down"
						></i>
					</a>
					<ul>
						<li>
							<Link to="/sede-pierola" id="btnPierola">
								Sede N. Pierola
							</Link>
						</li>
						<li>
							<Link to="/sede-stodominguito" id="btnSD">
								Sede Sto. Dominguito
							</Link>
						</li>
						<li>
							<Link to="/sede-huamachuco" id="btnH">
								Sede Huamachuco
							</Link>
						</li>
						<li>
							<Link to="/sede-huancayo" id="btnHy">
								Sede Huancayo
							</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link className="nav-item" to="/cotizar">
						Cotizar
					</Link>
				</li>
				<li>
					<Link className="login" to="/reserva-cita" id="rCita">
						Reservar tu cita
					</Link>
				</li>
			</ul>
		</nav>
	);
};
