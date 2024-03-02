import React from "react";
import { TemplatesEnum } from "../models/model-types";
import PhotoList from "./components/templates/PhotoList";
import VideoPlayer from "./components/templates/VideoPlayer";
import HeadlineOnlyCTA from "./components/templates/HeadlineOnlyCTA";
import TextBlock from "./components/templates/TextBlock";
import PDFView from "./components/templates/PDFView";
import PDFList from "./components/templates/PDFList";
import PatronProdList from "./components/templates/PatronProdList";
import Experience from "./components/templates/Experience";
import About from "./components/templates/About";

const TemplateMap: { [key in TemplatesEnum]: any } = {
	'PhotoList': PhotoList,
	'VideoPlayer': VideoPlayer,
	'TextBlock': TextBlock,
	'HeadlineOnlyCTA': HeadlineOnlyCTA,
	'PDFList': PDFList,
	'PDFView': PDFView,
	'PatronProdList': PatronProdList,
	'Experience': Experience,
	'About': About
}

export default TemplateMap;