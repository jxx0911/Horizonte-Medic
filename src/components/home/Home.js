import React from "react";
import { Hye } from "./Hye";
import { Aboutus } from "./Aboutus";
import { Slider } from "./Slider";
import { useAutoplayState } from '../../hooks/useAutoplayState';


export const Home = () => {

	const { autoplay } = useAutoplayState();
	console.log("antes del slider " + autoplay)

	return (
		<>
			<Slider controles={true} autoplay={autoplay} velocidad="500" intervalo="5000"/>
			<Hye />
			<Aboutus />
		</>
	);
};
