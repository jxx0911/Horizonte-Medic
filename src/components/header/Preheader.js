import React from "react";

export const Preheader = () => {
	return (
		<nav className="pre-header">
			<div className="p-h-contenedor">
				<ul>
					<li>
						<i className="fas fa-map-marker-alt"></i>
						<a href="#contacto">Contáctanos</a>
					</li>
					<li>
						<i className="far fa-envelope"></i>
						admision.trujillo@horizontemedic.com
					</li>
					<li>
						<i className="fab fa-facebook"></i>
						<a
							href="https://www.facebook.com/HorizonteMedicPeru/"
							target="_blank"
						>
							www.facebook.com/HorizonteMedicPeru
						</a>
					</li>
				</ul>
				<ul>
					<li>
						<i className="fab fa-whatsapp"></i>969603777 - 990094744
					</li>
					<li>
						<a href="../views/loginAdmin.html">
							<i className="fas fa-desktop"></i>Intranet
						</a>
					</li>
					<li>
						<a href="../views/loginUser.html">
							<i className="fas fa-user"></i>Mi cuenta
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
