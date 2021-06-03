import React, { useState } from "react";
import $ from "jquery";
import { NavNav } from "./NavNav";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAutoplayState } from "../../hooks/useAutoplayState";

export const Nav = () => {
	//autoplay
	const { autoplay, setAutoplay } = useAutoplayState();

	//click
	const [click, setClick] = useState(false);

	//servicio states
	const [servicioDropdown, setServicioDropdown] = useState(false);
	const [arrowServicio, setArrowServicio] = useState(false);

	//sede states
	const [sedeDropdown, setSedeDropdown] = useState(false);
	const [arrowSede, setArrowSede] = useState(false);

	//navbar sticky
	window.addEventListener("scroll", () => {
		let barra = document.querySelector("#barra");
		barra.classList.toggle("sticky", window.scrollY > 0);
	});

	//handleClick para el boton bars
	const handleClick = () => setClick(!click);

	//funcion para cambiar el estado del autoplay, click y mandar un scrollTop al cargar la vista
	const upAutoplayOn = () => {
		setAutoplay(true);
		setClick(false);
		nonState();
		$(window).scrollTop(0);
	};

	//funcion para cambiar el estado del autoplay, click y mandar un scrollTop al cargar la vista
	const upAutoplayOff = () => {
		setAutoplay(false);
		setClick(false);
		nonState();
		$(window).scrollTop(0);
	};

	const upAutoplayOffDropdown = () => {
		setAutoplay(false);
		setClick(false);
		$(window).scrollTop(0);
	};

	//funcion para alterar los estados del dropdown servicios
	const stateService = () => {
		setServicioDropdown(!servicioDropdown);
		setArrowServicio(!arrowServicio);
		//condicional para cambiar los estados del dropdown sede en caso esten activados
		if (sedeDropdown && arrowSede) {
			setSedeDropdown(!sedeDropdown);
			setArrowSede(!arrowSede);
		}
	};

	//funcion para alterar los estados del dropdown sede
	const stateSede = () => {
		setSedeDropdown(!sedeDropdown);
		setArrowSede(!arrowSede);
		//condicional para cambiar los estados del dropdown servicio en caso esten activados
		if (servicioDropdown && arrowServicio) {
			setServicioDropdown(!servicioDropdown);
			setArrowServicio(!arrowServicio);
		}
	};

	// funcion para regresar los estados por defecto del dropwdown
	const nonState = () => {
		setServicioDropdown(false);
		setArrowServicio(false);
		setSedeDropdown(false);
		setArrowSede(false);
	};

	return (
		<div className="barra" id="barra">
			<nav className="navegacion contenedor ">
				<h1 className="logo">
					<NavLink exact to="/" onClick={upAutoplayOn}>
						<img
							className="logo-img"
							src="images/LOGO_color_HM.png"
							alt="Horizonte Medic"
						/>
					</NavLink>
					<i
						className={
							click ? "fas fa-bars burguer click" : "fas fa-bars burguer "
						}
						onClick={handleClick}
					></i>
				</h1>
				<NavNav />
			</nav>
			<nav className={click ? "nav-resp show" : "nav-resp	"}>
				<ul>
					<li>
						<NavLink
							exact
							activeClassName="active"
							className="nav-item"
							to="/"
							onClick={upAutoplayOn}
						>
							<i className="fas fa-home"></i>Inicio
						</NavLink>
					</li>
					<li>
						<a href="../views/loginUser.html">
							<i className="fas fa-user"></i>Mi cuenta
						</a>
					</li>
					<li>
						<NavLink
							className="login"
							to="/reserva-cita"
							id="rCita"
							onClick={upAutoplayOff}
						>
							<i className="fas fa-calendar-check"></i>Reservar Cita
						</NavLink>
					</li>
					<li>
						<HashLink
							smooth
							className="nav-item"
							to="#cotizar"
							onClick={upAutoplayOff}
						>
							<i className="fas fa-dollar-sign"></i>Cotizar
						</HashLink>
					</li>
					<li>
						<NavLink
							className="nav-item"
							to="/nosotros"
							id="btnNosotros"
							onClick={upAutoplayOff}
						>
							<i className="fas fa-hospital-symbol"></i>Nosotros
						</NavLink>
					</li>
					<li>
						<a
							style={{ cursor: "default" }}
							href="#Servicios"
							onClick={stateService}
							className="serv-resp"
						>
							Servicios
							<i
								className={
									arrowServicio
										? "fas fa-chevron-down arrow first"
										: "fas fa-chevron-down arrow first rotate"
								}
							></i>
						</a>
						<ul className={servicioDropdown ? "serv-show show" : "serv-show"}>
							<li>
								<NavLink
									to="/servicios-generales"
									onClick={upAutoplayOffDropdown}
								>
									Servicios Generales
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/salud-ocupacional"
									onClick={upAutoplayOffDropdown}
								>
									Salud Ocupacional
								</NavLink>
							</li>
							<li>
								<NavLink to="/laboratorio" onClick={upAutoplayOffDropdown}>
									Laboratorio
								</NavLink>
							</li>
						</ul>
					</li>
					<li>
						<a
							style={{ cursor: "default" }}
							href="#Sedes"
							onClick={stateSede}
							className="sede-resp"
						>
							Sedes
							<i
								className={
									arrowSede
										? "fas fa-chevron-down arrow second"
										: "fas fa-chevron-down arrow second rotate"
								}
							></i>
						</a>
						<ul className={sedeDropdown ? "sede-show show1" : "sede-show"}>
							<li>
								<NavLink to="/sede-pierola" onClick={upAutoplayOffDropdown}>
									Sede N. Pierola
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/sede-stodominguito"
									onClick={upAutoplayOffDropdown}
								>
									Sede Sto. Dominguito
								</NavLink>
							</li>
							<li>
								<NavLink to="/sede-huamachuco" onClick={upAutoplayOffDropdown}>
									Sede Huamachuco
								</NavLink>
							</li>
							<li>
								<NavLink to="/sede-huancayo" onClick={upAutoplayOffDropdown}>
									Sede Huancayo
								</NavLink>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	);
};
