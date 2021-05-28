import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Logo } from "./Logo";
import { NavResp } from "./NavResp";

export const Nav = () => {
	return (
		<>
			<nav className="navegacion contenedor ">
				<Logo />
				<ul>
					<li>
						<NavLink exact activeClassName="active" className="nav-item" to="/">
							Inicio
						</NavLink>
					</li>
					<li>
						<NavLink className="nav-item" to="/nosotros" id="btnNosotros">
							Nosotros
						</NavLink>
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
								<NavLink to="/servicios-generales" id="btnSG">
									Servicios Generales
								</NavLink>
							</li>
							<li>
								<NavLink to="/salud-ocupacional" id="btnSO">
									Salud Ocupacional
								</NavLink>
							</li>
							<li>
								<NavLink to="/laboratorio" id="btnLab">
									Laboratorio
								</NavLink>
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
								<NavLink to="/sede-pierola" id="btnPierola">
									Sede N. Pierola
								</NavLink>
							</li>
							<li>
								<NavLink to="/sede-stodominguito" id="btnSD">
									Sede Sto. Dominguito
								</NavLink>
							</li>
							<li>
								<NavLink to="/sede-huamachuco" id="btnH">
									Sede Huamachuco
								</NavLink>
							</li>
							<li>
								<NavLink to="/sede-huancayo" id="btnHy">
									Sede Huancayo
								</NavLink>
							</li>
						</ul>
					</li>
					<li>
						<HashLink smooth className="nav-item" to="#cotizar">
							Cotizar
						</HashLink>
					</li>
					<li>
						<NavLink className="login" to="/reserva-cita" id="rCita">
							Reserva tu cita
						</NavLink>
					</li>
				</ul>
			</nav>
			<NavResp />
		</>
	);
};
