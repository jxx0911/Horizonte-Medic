import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAutoplayState } from '../../hooks/useAutoplayState'
import $ from "jquery";

export const NavNav = () => {

	const { autoplay, setAutoplay  } = useAutoplayState();

	/* function upAutoplayOn() {
		$(window).scrollTop(0);
		autoPlayOn();
		autoPlayOn();

	}

	function upAutoplayOff() {
		autoPlayOff();
		autoPlayOff();
		$(window).scrollTop(0);
		
	} */

	console.log("dentro del nav" + autoplay);

	return (
		<ul>
			<li>
				<NavLink
					exact
					activeClassName="active"
					className="nav-item"
					to="/"
					onClick={()=>setAutoplay(true)}
				>
					Inicio
				</NavLink>
			</li>
			<li>
				<NavLink
					className="nav-item"
					to="/nosotros"
					id="btnNosotros"
					onClick={()=>setAutoplay(false)}
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
						<NavLink to="/servicios-generales" id="btnSG" onClick={()=>setAutoplay(false)}>
							Servicios Generales
						</NavLink>
					</li>
					<li>
						<NavLink to="/salud-ocupacional" id="btnSO" onClick={()=>setAutoplay(false)}>
							Salud Ocupacional
						</NavLink>
					</li>
					<li>
						<NavLink to="/laboratorio" id="btnLab" onClick={()=>setAutoplay(false)}>
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
						<NavLink to="/sede-pierola" id="btnPierola" onClick={()=>setAutoplay(false)}>
							Sede N. Pierola
						</NavLink>
					</li>
					<li>
						<NavLink to="/sede-stodominguito" id="btnSD" onClick={()=>setAutoplay(false)}>
							Sede Sto. Dominguito
						</NavLink>
					</li>
					<li>
						<NavLink to="/sede-huamachuco" id="btnH" onClick={()=>setAutoplay(false)}>
							Sede Huamachuco
						</NavLink>
					</li>
					<li>
						<NavLink to="/sede-huancayo" id="btnHy" onClick={()=>setAutoplay(false)}>
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
				<NavLink className="login" to="/reserva-cita" id="rCita" onClick={()=>setAutoplay(false)}>
					Reserva tu cita
				</NavLink>
			</li>
		</ul>
	);
};
