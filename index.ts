import ReactPDF, { Font } from "@react-pdf/renderer";
import { pdfContent } from "./document";

const FILE_NAME = "adamWinnikCV";

ReactPDF.render(pdfContent, `${__dirname}/dist/${FILE_NAME}.pdf`);