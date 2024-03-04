import ReactPDF, { Font } from "@react-pdf/renderer";
import { pdfContent } from "./document";
import fs from "fs"

const FILE_NAME = "adamWinnikCV";
const DIST_PATH = `${__dirname}/dist`;

fs.existsSync(DIST_PATH) || fs.mkdirSync(DIST_PATH)
ReactPDF.render(pdfContent, `${DIST_PATH}/${FILE_NAME}.pdf`);