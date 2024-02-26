import ReactPDF, { Font } from "@react-pdf/renderer";
import { pdfContent } from "./document";

const FILE_NAME = "adam-winnik-cv";

ReactPDF.render(pdfContent, `${__dirname}/dist/${FILE_NAME}.pdf`);