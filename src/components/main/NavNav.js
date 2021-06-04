import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAutoplayState } from "../../hooks/useAutoplayState";
import $ from "jquery";

export const NavNav = () => {
	const { autoplay, setAutoplay } = useAutoplayState();

	function upAutoplayOn() {
		setAutoplay(true);
		$(window).scrollTop(0);
	}

	function upAutoplayOff() {
		setAutoplay(false);
		$(window).scrollTop(0);
	}

	console.log("dentro del nav" + autoplay);

	return (
		<ul>
			<li>
				<NavLink
					exact
					activeClassName="active"
					className="nav-item"
					to="/"
					onClick={upAutoplayOn}
				>
					Inicio
				</NavLink>
			</li>
			<li>
				<NavLink
					className="nav-item"
					to="/nosotros"
					id="btnNosotros"
					onClick={upAutoplayOff}
				>
					Nosotros
				</NavLink>
			</li>
			<li>
				<a
					className="nav-item"
					activeClassName="active"
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
						<NavLink
							to="/servicio/servicios-generales"
							id="btnSG"
							onClick={upAutoplayOff}
							activeClassName="active"
						>
							Servicios Generales
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/servicio/salud-ocupacional"
							id="btnSO"
							onClick={upAutoplayOff}
						>
							Salud Ocupacional
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/servicio/laboratorio"
							id="btnLab"
							onClick={upAutoplayOff}
						>
							Laboratorio
						</NavLink>
					</li>
				</ul>
			</li>
			<li>
				<a
					className="nav-item"
					style={{ cursor: "default" }}
					href="#Sedes"
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
						<NavLink to="/sede/pierola" id="btnPierola" onClick={upAutoplayOff}>
							Sede N. Pierola
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/sede/stodominguito"
							id="btnSD"
							onClick={upAutoplayOff}
						>
							Sede Sto. Dominguito
						</NavLink>
					</li>
					<li>
						<NavLink to="/sede/huamachuco" id="btnH" onClick={upAutoplayOff}>
							Sede Huamachuco
						</NavLink>
					</li>
					<li>
						<NavLink to="/sede/huancayo" id="btnHy" onClick={upAutoplayOff}>
							Sede Huancayo
						</NavLink>
					</li>
				</ul>
			</li>
			<li>
				<HashLink smooth className="nav-item cotizar" to="#cotizar">
					Cotizar
				</HashLink>
			</li>
			<li>
				<NavLink
					className="login"
					to="/reserva-cita"
					id="rCita"
					onClick={upAutoplayOff}
				>
					Reserva tu cita
				</NavLink>
			</li>
		</ul>
	);
};
