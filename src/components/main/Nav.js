import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Logo } from "./Logo";
import { NavResp } from "./NavResp";
import $ from "jquery";

export const Nav = () => {
	window.addEventListener("scroll", () => {
		let barra = document.querySelector("#barra");
		barra.classList.toggle("sticky", window.scrollY > 0);
	});

	function up() {
		$(window).scrollTop(0);
	}

	return (
		<div className="barra" id="barra">
			<nav className="navegacion contenedor ">
				<Logo />
				<ul>
					<li>
						<NavLink
							exact
							activeClassName="active"
							className="nav-item"
							to="/"
							onClick={up}
						>
							Inicio
						</NavLink>
					</li>
					<li>
						<NavLink
							className="nav-item"
							to="/nosotros"
							id="btnNosotros"
							onClick={up}
						>
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
								<NavLink to="/servicios-generales" id="btnSG" onClick={up}>
									Servicios Generales
								</NavLink>
							</li>
							<li>
								<NavLink to="/salud-ocupacional" id="btnSO" onClick={up}>
									Salud Ocupacional
								</NavLink>
							</li>
							<li>
								<NavLink to="/laboratorio" id="btnLab" onClick={up}>
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
								<NavLink to="/sede-pierola" id="btnPierola" onClick={up}>
									Sede N. Pierola
								</NavLink>
							</li>
							<li>
								<NavLink to="/sede-stodominguito" id="btnSD" onClick={up}>
									Sede Sto. Dominguito
								</NavLink>
							</li>
							<li>
								<NavLink to="/sede-huamachuco" id="btnH" onClick={up}>
									Sede Huamachuco
								</NavLink>
							</li>
							<li>
								<NavLink to="/sede-huancayo" id="btnHy" onClick={up}>
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
						<NavLink
							className="login"
							to="/reserva-cita"
							id="rCita"
							onClick={up}
						>
							Reserva tu cita
						</NavLink>
					</li>
				</ul>
			</nav>
			<NavResp />
		</div>
	);
};
