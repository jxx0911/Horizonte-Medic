import React, { useState } from "react";
import $ from "jquery";
import { NavNav } from "./NavNav";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAutoplayState } from "../../hooks/useAutoplayState";

export const Nav = () => {

	const { autoPlayOff, autoPlayOn  } = useAutoplayState();

	window.addEventListener("scroll", () => {
		let barra = document.querySelector("#barra");
		barra.classList.toggle("sticky", window.scrollY > 0);
	});

	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	function upAutoplayOn() {
		$(window).scrollTop(0);
		setClick(false);
	}

	function upAutoplayOff() {
		$(window).scrollTop(0);
		setClick(false);
	}

	$(".serv-resp").click(function () {
		$("nav ul .serv-show").toggleClass("show");
		$("nav ul .first").toggleClass("rotate");
	});

	$(".sede-resp").click(function () {
		$("nav ul .sede-show").toggleClass("show1");
		$("nav ul .second").toggleClass("rotate");
	});

	return (
		<div className="barra" id="barra">
			<nav className="navegacion contenedor ">
				<h1 className="logo">
					<img
						className="logo-img"
						src="images/LOGO_color_HM.png"
						alt="Horizonte Medic"
					/>
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
						<HashLink smooth className="nav-item" to="#cotizar">
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
							onclick="return false;"
							className="serv-resp"
						>
							Servicios<i className="fas fa-chevron-down arrow first"></i>
						</a>
						<ul className="serv-show">
							<li>
								<a href="#ServiciosGenerales" id="btnSGR">
									Servicios Generales
								</a>
							</li>
							<li>
								<a href="#SaludOcupacional" id="btnSOR">
									Salud Ocupacional
								</a>
							</li>
							<li>
								<a href="#laboratorio" id="btnLabR">
									Laboratorio
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a
							style={{ cursor: "default" }}
							href="#"
							onclick="return false;"
							className="sede-resp"
						>
							Sedes<i className="fas fa-chevron-down arrow second"></i>
						</a>
						<ul className="sede-show">
							<li>
								<a href="#Pierola" id="btnPierolaR">
									Sede N. Pierola
								</a>
							</li>
							<li>
								<a href="#StoDominguito" id="btnSDR">
									Sede Sto. Dominguito
								</a>
							</li>
							<li>
								<a href="#Huamachuco" id="btnHR">
									Sede Huamachuco
								</a>
							</li>
							<li>
								<a href="#Huancayo" id="btnHyR">
									Sede Huancayo
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	);
};
