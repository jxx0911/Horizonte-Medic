import React from "react";

export const Footer = () => {
	return (
		<footer id="footer" className="footer">
			<div className="layout">
				<div className="layout-container">
					<img src="images/montanaFooterPng.png" alt="" />
				</div>
			</div>
			<div className="relleno-footer">
				<div className="r-f-container">
					<div className="txt-footer">
						<p>© 2021 Horizonte Medic - Todos los derechos reservados</p>
					</div>
					<div className="r-footer">
						<ul>
							<li>
								<a
									href="https://www.facebook.com/HorizonteMedicPeru/"
									target="_blank"
								/>
								<i className="fab fa-facebook"></i>
								<p>www.facebook.com/HorizonteMedicPeru</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
