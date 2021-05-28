import React from "react";

export const Reserve = () => {
	return (
		<div className="cita">
			<div className="cita-title">
				<h2>RESERVA TU CITA</h2>
			</div>
			<div className="cita-container">
				<form className="form-cita" action="">
					<label className="label-1">1. Datos del paciente</label>
					<label className="label-2">2. Reservación</label>
					<div className="cita-img">
						<img src="images/cita/doc-form.jpg" alt="" />
					</div>
					<fieldset className="form-desk">
						<div className="form-cita-item">
							<label>Nombres*</label>
							<input type="text" required />
						</div>
						<div className="form-cita-item">
							<label>Correo Electronico</label>
							<input type="email" required />
						</div>
						<div className="form-cita-item">
							<label>Tipo de Documento*</label>
							<div className="form-row">
								<label>
									<input name="documento" type="radio" />
									Pasaporte
								</label>
								<label>
									<input name="documento" type="radio" />
									D.N.I.
								</label>
							</div>
						</div>
						<div className="form-cita-item">
							<label>Fecha de Nacimiento</label>
							<input type="date" />
						</div>
						<div className="form-cita-item span">
							<label>Sede</label>
							<select name="sede" id="sede" required>
								<option value="pierola">Pierola</option>
								<option value="stodominguito">Sto. Dominguito</option>
								<option value="huamachuco">Huamachuco</option>
								<option value="huancayo">Huancayo</option>
							</select>
						</div>
						<div className="form-cita-item">
							<label>Especialidad</label>
							<input type="list" list="especialidad-list-sg" required />
							<datalist id="especialidad-list-sg">
								<option value="Medicina General"></option>
								<option value="Ginecologia"></option>
								<option value="Pediatria"></option>
								<option value="Cirugia General"></option>
								<option value="Medicina Interna"></option>
								<option value="Gastroenterologia"></option>
								<option value="Cardiologia"></option>
								<option value="Oftalmologia"></option>
								<option value="Radiologia"></option>
								<option value="Otorrinolaringologia"></option>
								<option value="Dermatologia"></option>
								<option value="Psiquiatria"></option>
								<option value="Audiometria"></option>
								<option value="Espirometria"></option>
								<option value="Electrocardiograma"></option>
								<option value="Psicologia Ocupacional"></option>
								<option value="Agudeza Visual"></option>
								<option value="Psicosensometria"></option>
								<option value="Exámen para obtener licencia para portar armas"></option>
								<option value="Exámen para obtener licencia de conducir"></option>
							</datalist>
							{/*  <!-- <datalist id="especialidad-list-so">
                                     <option value="Exámenes preocupacional"></option>
                                     <option value="Exámenes periódicos"></option>
                                     <option value="Exámenes de retiro"></option>
                                     <option value="Exámenes para conducción de vehículos"></option>
                                     <option value="Exámenes de altura"></option>
                                     <option value="Exámenes para trabajos en caliente"></option>
                                     <option value="Exámenes para espacio confinados"></option>
                                     <option value="Exámenes para trabajos de alto riesgo"></option>
                                     <option value="Fist Test"></option>
                             </datalist>
                             <datalist id="laboratorio">
                                 <option value="Laboratorio Clínico"></option>
                                 <option value="Rayos X"></option>
                                 <option value="Ecografías"></option>
                             </datalist>
                             <datalist id="covid">
                                 <option value="Prueba Rápida"></option>
                                 <option value="Serológica"></option>
                                 <option value="Antígeno"></option>
                                 <option value="Molecular"></option>
                             </datalist> --> */}
						</div>
					</fieldset>
					<fieldset className="form-desk">
						<div className="form-cita-item">
							<label>Apellidos*</label>
							<input type="text" required />
						</div>
						<div className="form-cita-item">
							<label>Telefono</label>
							<input type="tel" required />
						</div>
						<div className="form-cita-item">
							<label>Nro. Documento*</label>
							<input type="text" required />
						</div>
						<div className="form-cita-item">
							<label>Sexo</label>
							<div className="form-row">
								<label>
									<input name="sexo" type="radio" />
									Hombre
								</label>
								<label>
									<input name="sexo" type="radio" />
									Mujer
								</label>
							</div>
						</div>
						<div className="form-cita-item span">
							<label>Servicio</label>
							<select name="servicio" id="servicio" required>
								<option value="servicios-generales">Servicios Generales</option>
								<option value="salud-ocupacional">Salud Ocupacional</option>
								<option value="laboratorio">Laboratorio</option>
								<option value="covid">Covid-19</option>
							</select>
						</div>
						<div className="form-cita-item">
							<label>Fecha de Reservación</label>
							<input type="date" required />
						</div>
					</fieldset>
					<button type="submit">ENVIAR</button>
					<fieldset className="form-resp">
						<div className="form-cita-item">
							<label>Nombres*</label>
							<input type="text" required />
						</div>
						<div className="form-cita-item">
							<label>Apellidos*</label>
							<input type="text" required />
						</div>
						<div className="form-cita-item">
							<label>Correo Electronico</label>
							<input type="email" required />
						</div>
						<div className="form-cita-item">
							<label>Telefono</label>
							<input type="tel" required />
						</div>
						<div className="form-cita-item">
							<label>Tipo de Documento*</label>
							<div className="form-row">
								<label>
									<input name="documento" type="radio" />
									Pasaporte
								</label>
								<label>
									<input name="documento" type="radio" />
									D.N.I.
								</label>
							</div>
						</div>
						<div className="form-cita-item">
							<label>Nro. Documento*</label>
							<input type="text" required />
						</div>
						<div className="form-cita-item">
							<label>Fecha de Nacimiento</label>
							<input type="date" />
						</div>
						<div className="form-cita-item">
							<label>Sexo</label>
							<div className="form-row">
								<label>
									<input name="sexo" type="radio" />
									Hombre
								</label>
								<label>
									<input name="sexo" type="radio" />
									Mujer
								</label>
							</div>
						</div>
					</fieldset>
					<fieldset className="form-resp bottom">
						<div className="form-cita-item">
							<label>Sede</label>
							<select name="sede" id="sede-resp" required>
								<option value="pierola">Pierola</option>
								<option value="stodominguito">Sto. Dominguito</option>
								<option value="huamachuco">Huamachuco</option>
								<option value="huancayo">Huancayo</option>
							</select>
						</div>
						<div className="form-cita-item">
							<label>Servicio</label>
							<select name="servicio" id="servicio-resp" required>
								<option value="servicios-generales">Servicios Generales</option>
								<option value="salud-ocupacional">Salud Ocupacional</option>
								<option value="laboratorio">Laboratorio</option>
								<option value="covid">Covid-19</option>
							</select>
						</div>
						<div className="form-cita-item">
							<label>Especialidad</label>
							<input type="list" list="especialidad-list-sg-resp" required />
							<datalist id="especialidad-list-sg-resp">
								<option value="Medicina General"></option>
								<option value="Ginecologia"></option>
								<option value="Pediatria"></option>
								<option value="Cirugia General"></option>
								<option value="Medicina Interna"></option>
								<option value="Gastroenterologia"></option>
								<option value="Cardiologia"></option>
								<option value="Oftalmologia"></option>
								<option value="Radiologia"></option>
								<option value="Otorrinolaringologia"></option>
								<option value="Dermatologia"></option>
								<option value="Psiquiatria"></option>
								<option value="Audiometria"></option>
								<option value="Espirometria"></option>
								<option value="Electrocardiograma"></option>
								<option value="Psicologia Ocupacional"></option>
								<option value="Agudeza Visual"></option>
								<option value="Psicosensometria"></option>
								<option value="Exámen para obtener licencia para portar armas"></option>
								<option value="Exámen para obtener licencia de conducir"></option>
							</datalist>
							{/*  <!-- <datalist id="especialidad-list-so">
                                     <option value="Exámenes preocupacional"></option>
                                     <option value="Exámenes periódicos"></option>
                                     <option value="Exámenes de retiro"></option>
                                     <option value="Exámenes para conducción de vehículos"></option>
                                     <option value="Exámenes de altura"></option>
                                     <option value="Exámenes para trabajos en caliente"></option>
                                     <option value="Exámenes para espacio confinados"></option>
                                     <option value="Exámenes para trabajos de alto riesgo"></option>
                                     <option value="Fist Test"></option>
                             </datalist>
                             <datalist id="laboratorio">
                                 <option value="Laboratorio Clínico"></option>
                                 <option value="Rayos X"></option>
                                 <option value="Ecografías"></option>
                             </datalist>
                             <datalist id="covid">
                                 <option value="Prueba Rápida"></option>
                                 <option value="Serológica"></option>
                                 <option value="Antígeno"></option>
                                 <option value="Molecular"></option>
                             </datalist> --> */}
						</div>
						<div className="form-cita-item">
							<label>Fecha de Reservación</label>
							<input type="date" required />
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	);
};
