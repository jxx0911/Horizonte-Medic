import React from "react";

export const Contact = () => {
	return (
		<section id="cotizar" className="contacto">
			<section className="cantact_info">
				<section className="info_title">
					<span>
						<i className="fas fa-laptop-medical"></i>
					</span>
					<h2>
						SOLICITA
						<br />
						TU COTIZACIÓN{" "}
					</h2>
					<p>Ingresa tus datos y pronto te contactaremos</p>
				</section>
			</section>

			<form action="" className="form_contact">
				<h2>Envia un mensaje</h2>
				<div className="user_info">
					<label for="names">Nombres *</label>
					<input type="text" id="names" />

					<label for="phone">Telefono / Celular</label>
					<input type="text" id="phone" />

					<label for="email">Correo electronico *</label>
					<input type="text" id="email" />

					<label for="mensaje">Mensaje *</label>
					<textarea id="mensaje"></textarea>

					<input type="button" value="Enviar Mensaje" id="btnSend" />
				</div>
			</form>
		</section>
	);
};
