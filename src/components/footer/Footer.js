import React from "react";

export const Footer = () => {
	return (
		<footer id="footer" class="footer">
			<div class="layout">
				<div class="layout-container">
					<img src="images/montanaFooterPng.png" alt="" />
				</div>
			</div>
			<div class="relleno-footer">
				<div class="r-f-container">
					<div class="txt-footer">
						<p>© 2021 Horizonte Medic - Todos los derechos reservados</p>
					</div>
					<div class="r-footer">
						<ul>
							<li>
								<a
									href="https://www.facebook.com/HorizonteMedicPeru/"
									target="_blank"
								/>
								<i class="fab fa-facebook"></i>
								<p>www.facebook.com/HorizonteMedicPeru</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
