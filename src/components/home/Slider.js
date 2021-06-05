import React, { useRef, useEffect, useCallback } from "react";
import { ReactComponent as FlechaIzquierda } from "../../img/iconmonstr-angel-left-thin.svg";
import { ReactComponent as FlechaDerecha } from "../../img/iconmonstr-angel-right-thin.svg";
import styled from "styled-components";
import img1 from "../../img/slider/Copia_de_seguridad_de_bienvenida-doc-transparencia.png";
import img2 from "../../img/sun-in-the-mountains-landscape-vector.jpg";
import img3 from "../../img/jarvis.jpg";
import img4 from "../../img/blur-hospital.jpg";
import { useAutoplayState } from "../../hooks/useAutoplayState";

export const Slider = ({
	controles = false,
	autoPlay = false,
	velocidad = "500",
	intervalo = "5000",
}) => {
	const slideshow = useRef(null);
	const intervaloSlideShow = useRef(null);
	const { autoplay } = useAutoplayState();

	autoPlay = autoplay;

	const siguiente = useCallback(() => {
		if (slideshow.current) {
			//Comprobamos que el slideshow tenga elementos
			if (slideshow.current.children.length > 0) {
				//Obtenemos el primer elemento del slideshow
				const primerElemento = slideshow.current.children[0];

				//Establecemos la transicion para el slideshow
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;

				const tamanoSlide = slideshow.current.children[0].offsetWidth;

				//Movemos el slideshow
				slideshow.current.style.transform = `translateX(-${tamanoSlide}px)`;

				const transicion = () => {
					//Reiniciamos la posicion del slideshow
					slideshow.current.style.transition = "none";
					slideshow.current.style.transform = `translateX(0)`;

					//Tomamos el primer elemento y lo mandamos al final
					slideshow.current.appendChild(primerElemento);

					slideshow.current.removeEventListener("transitionend", transicion);
				};

				//EventListener para cuando termina la animacion
				slideshow.current.addEventListener("transitionend", transicion);
			}
		} else {
			return;
		}
	}, [velocidad]);

	const anterior = () => {
		console.log("anterior");
		if (slideshow.current.children.length > 0 && slideshow.current) {
			//Obtenemos el ultimo elemento del slideshow
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(
				ultimoElemento,
				slideshow.current.firstChild
			);

			slideshow.current.style.transition = "none";

			const tamanoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamanoSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		} else if (!slideshow.current) {
			return;
		}
	};

	useEffect(() => {
		if (autoPlay) {
			intervaloSlideShow.current = setInterval(() => {
				siguiente();
			}, intervalo);

			//Eliminamos los intervalos
			slideshow.current.addEventListener("mouseenter", () => {
				clearInterval(intervaloSlideShow.current);
			});

			//Volvemos a poner el intervalo cuando sacan el cursor del slideshow
			slideshow.current.addEventListener("mouseleave", () => {
				intervaloSlideShow.current = setInterval(() => {
					siguiente();
				}, intervalo);
			});
		} else {
			clearInterval(intervaloSlideShow.current);
		}
	}, [autoPlay, intervalo, siguiente]);

	return (
		<ContenedorPrincipal>
			<ContenedorSlideshow ref={slideshow}>
				<Slide>
					<img className="slider__img" src={img1} alt="" />
				</Slide>
				<Slide>
					<img className="slider__img" src={img2} alt="" />
				</Slide>
				<Slide>
					<img className="slider__img" src={img3} alt="" />
				</Slide>
				<Slide>
					<img className="slider__img" src={img4} alt="" />
				</Slide>
			</ContenedorSlideshow>

			{controles && (
				<Controles>
					<Boton onClick={anterior}>
						<FlechaIzquierda />
					</Boton>
					<Boton derecho onClick={siguiente}>
						<FlechaDerecha />
					</Boton>
				</Controles>
			)}
		</ContenedorPrincipal>
	);
};

const ContenedorPrincipal = styled.div`
	position: relative;
	overflow: hidden;
`;

const ContenedorSlideshow = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

const Slide = styled.div`
	min-width: 100%;
	transition: 0.3s ease all;
	z-index: 10;
	max-height: 77vh;
`;

const Controles = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 11;
	pointer-events: none; /* esto es en caso la imagen tenga una etiqueta <a></a> */
`;

const Boton = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 100%;
	text-align: center;
	position: absolute;
	transition: 0.3s ease all;
	color: #234187;

	&:hover {
		background: rgba(35, 65, 135, 0.8);
		path {
			fill: #fff;
		}
	}

	path {
		filter: ${(props) =>
			props.derecho
				? "drop-shadow(-2px 0px 0px #fff)"
				: "drop-shadow(2px 0px 0px #fff)"};
	}

	${(props) => (props.derecho ? "right: 0" : "left: 0")}
`;
