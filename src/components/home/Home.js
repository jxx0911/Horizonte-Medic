import React from "react";
import { Hye } from "./Hye";
import { Aboutus } from "./Aboutus";
import { Slider } from "./Slider";

export const Home = () => {
	return (
		<>
			<Slider controles={true} autoplay={false} velocidad="500" intervalo="5000"/>
			<Hye />
			<Aboutus />
		</>
	);
};
