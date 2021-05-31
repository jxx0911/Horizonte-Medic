import React from "react";

export const NavResp = ({ navRespClass }) => {
	return (
		<nav className={navRespClass}>
			<ul>
				<li>
					<a href="../index.html">
						<i className="fas fa-home"></i>Inicio
					</a>
				</li>
				<li>
					<a href="../views/loginUser.html">
						<i className="fas fa-user"></i>Mi cuenta
					</a>
				</li>
				<li>
					<a href="#" id="rCitaR">
						<i className="fas fa-calendar-check"></i>Reservar Cita
					</a>
				</li>
				<li>
					<a href="#contacto">
						<i className="fas fa-dollar-sign"></i>Cotizar
					</a>
				</li>
				<li>
					<a href="#Nosotros" id="btnNosotrosR">
						<i className="fas fa-hospital-symbol"></i>Nosotros
					</a>
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
	);
};
