import React from "react";
import PhotoList from "@client/components/templates/PhotoList";
import VideoPlayer from "@client/components/templates/VideoPlayer";
import HeadlineOnlyCTA from "@client/components/templates/HeadlineOnlyCTA";
import TextBlock from "@client/components/templates/TextBlock";
import PDFView from "@client/components/templates/PDFView";
import PDFList from "@client/components/templates/PDFList";
import PatronProdList from "@client/components/templates/PatronProdList";
import Experience from "@client/components/templates/Experience";
import About from "@client/components/templates/About";
import LinkList from "@client/components/templates/LinkList";

const TemplateMap: { [key: string]: any } = {
	'PhotoList': PhotoList,
	'VideoPlayer': VideoPlayer,
	'TextBlock': TextBlock,
	'HeadlineOnlyCTA': HeadlineOnlyCTA,
	'PDFList': PDFList,
	'PDFView': PDFView,
	'PatronProdList': PatronProdList,
	'Experience': Experience,
	'About': About,
	'LinkList': LinkList
}

export default TemplateMap;