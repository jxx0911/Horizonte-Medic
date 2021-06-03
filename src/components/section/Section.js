import React from "react";
import { Contact } from "./contact/Contact";
import { CovidRouter } from "../../routers/CovidRouter";

export const Section = () => {
	return (
		<>
			<CovidRouter />
			<Contact />
		</>
	);
};
