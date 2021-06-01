import React from "react";
import Slider from "./slider/Slider";
import { Hye } from "./Hye";
import { Aboutus } from "./Aboutus";
import Images from "./Images";

export const Home = () => {
	return (
		<>
			<Slider slides={Images} />
			<Hye />
			<Aboutus />
		</>
	);
};
