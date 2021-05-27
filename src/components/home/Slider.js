import React from "react";

export const Slider = () => {
	return (
		<div className="slider-contenedor">
			<div className="slider" id="slider">
				<div className="slider__section">
					<img
						src="images/slider/doc-trans-responsive.png"
						alt=""
						className="slider__img img-responsive"
					/>
					<img
						src="images/slider/Copia_de_seguridad_de_bienvenida-doc-transparencia.png"
						alt=""
						className="slider__img img-alfa"
					/>
				</div>
				<div className="slider__section">
					<img
						src="images/sun-in-the-mountains-landscape-vector.jpg"
						alt=""
						className="slider__img"
					/>
				</div>
				<div className="slider__section">
					<img src="images/jarvis.jpg" alt="" className="slider__img" />
				</div>
				<div className="slider__section">
					<img src="images/blur-hospital.jpg" alt="" className="slider__img" />
				</div>
			</div>
			<div className="slider__btn slider__btn-right" id="btn-right">
				&#62;
			</div>
			<div className="slider__btn slider__btn-left" id="btn-left">
				&#60;
			</div>
		</div>
	);
};
