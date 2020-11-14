import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import file from "../../../assets/icons/file.svg";
import gear from "../../../assets/icons/settings.svg";
import PDFfile from "../../PDFfile/PDFfile";
import Button from "../../Button";
import PropTypes from "prop-types";

import "./ExportButton.scss";
const ExportButton = ({
  documentGenerated,
  setDocumentGenerated,
  allSpecialitiesSums,
  totalSum,
  tabPanel,
  propertyInfo,
}) => {
  return (
    <div className="export-button">
      {documentGenerated ? (
        <PDFDownloadLink
          document={
            <PDFfile
              allSpecialitiesSums={allSpecialitiesSums}
              totalSum={totalSum}
              workInfo={tabPanel}
              propertyInfo={propertyInfo}
            />
          }
          fileName="Sąmata.pdf"
        >
          {({ loading }) => (
            <Button className={loading ? "button loading" : "button"}>
              <img src={file} alt={file} />
              <span>Atsisiųsti PDF</span>
            </Button>
          )}
        </PDFDownloadLink>
      ) : (
        <Button onClick={() => setDocumentGenerated(true)}>
          <img src={gear} alt={gear} />
          <span>Generuoti PDF</span>
        </Button>
      )}
    </div>
  );
};

ExportButton.propTypes = {
  documentGenerated: PropTypes.bool.isRequired,
  setDocumentGenerated: PropTypes.func.isRequired,
  allSpecialitiesSums: PropTypes.array.isRequired,
  totalSum: PropTypes.number.isRequired,
  tabPanel: PropTypes.array.isRequired,
  propertyInfo: PropTypes.array.isRequired,
};

export default ExportButton;
