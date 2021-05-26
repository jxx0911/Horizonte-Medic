import React from "react";

export const NavResp = () => {
	return (
		<nav class="nav-resp">
			<ul>
				<li>
					<a href="../index.html">
						<i class="fas fa-home"></i>Inicio
					</a>
				</li>
				<li>
					<a href="../views/loginUser.html">
						<i class="fas fa-user"></i>Mi cuenta
					</a>
				</li>
				<li>
					<a href="#" id="rCitaR">
						<i class="fas fa-calendar-check"></i>Reservar Cita
					</a>
				</li>
				<li>
					<a href="#contacto">
						<i class="fas fa-dollar-sign"></i>Cotizar
					</a>
				</li>
				<li>
					<a href="#Nosotros" id="btnNosotrosR">
						<i class="fas fa-hospital-symbol"></i>Nosotros
					</a>
				</li>
				<li>
					<a
						style={{ cursor: "default" }}
						href="#Servicios"
						onclick="return false;"
						class="serv-resp"
					>
						Servicios<i class="fas fa-chevron-down arrow first"></i>
					</a>
					<ul class="serv-show">
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
						class="sede-resp"
					>
						Sedes<i class="fas fa-chevron-down arrow second"></i>
					</a>
					<ul class="sede-show">
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
