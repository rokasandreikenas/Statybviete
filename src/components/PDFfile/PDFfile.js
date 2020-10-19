import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import font from "../../assets/fonts/Poppins-Regular.ttf";

Font.register({
  family: "Poppins",
  src: font,
});

const styles = StyleSheet.create({
  page: { fontFamily: "Poppins" },

  summaryContainer: { display: "flex", flexDirection: "row", margin: 20 },
  summary: {
    width: "50%",
    paddingBottom: 40,
    fontSize: 12,
  },
  summaryText: {
    display: "flex",
    flexDirection: "row",
    width: 200,
    title: {
      width: "70%",
    },
    value: { width: "30%" },
  },

  priceContainer: {
    backgroundColor: "#ececec",
    fontSize: 10,
    width: 200,
    padding: 10,
  },

  totalSum: {
    backgroundColor: "#428bff",
    fontSize: 10,
    width: 200,
    paddingLeft: 10,
    height: 30,
    justifyContent: "center",
  },

  heading: {
    fontSize: 24,
    margin: 20,
  },

  date: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 10,
  },

  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  tableRow: { margin: "auto", flexDirection: "row" },
  tableRowHeader: {
    margin: "auto",
    flexDirection: "row",
    backgroundColor: "#428bff",
  },
  tableColFirst: {
    width: "40%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: "15%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
});
const PDFfile = ({ allSpecialitiesSums, totalSum, workInfo }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.heading}>Darbų samata</Text>
        </View>
        <View style={styles.summaryContainer}>
          <View style={styles.summary}>
            <View style={styles.summaryText}>
              <Text style={styles.summaryText.title}>Kambarių skaičius:</Text>
              <Text style={styles.summaryText.value}>0</Text>
            </View>
            <View style={styles.summaryText}>
              <Text style={styles.summaryText.title}>Kambarių plotas:</Text>
              <Text style={styles.summaryText.value}>0 m2</Text>
            </View>
            <View style={styles.summaryText}>
              <Text style={styles.summaryText.title}>WC ir vonios plotas:</Text>
              <Text style={styles.summaryText.value}>0 m2</Text>
            </View>
          </View>
          <View style={styles.summary}>
            <View style={styles.priceContainer}>
              <View style={styles.summaryText}>
                <Text style={styles.summaryText.title}>Dažymo darbai:</Text>
                <Text style={styles.summaryText.value}>0 €</Text>
              </View>
              <View style={styles.summaryText}>
                <Text style={styles.summaryText.title}>
                  Grindų klojimo darbai:
                </Text>
                <Text style={styles.summaryText.value}>0 €</Text>
              </View>
              <View style={styles.summaryText}>
                <Text style={styles.summaryText.title}>Elektros darbai:</Text>
                <Text style={styles.summaryText.value}>0 €</Text>
              </View>
              <View style={styles.summaryText}>
                <Text style={styles.summaryText.title}>
                  Vonios įrengimo darbai:
                </Text>
                <Text style={styles.summaryText.value}>0 €</Text>
              </View>
              <View style={styles.summaryText}>
                <Text style={styles.summaryText.title}>
                  Plytelių klijavimo darbai:
                </Text>
                <Text style={styles.summaryText.value}>0 €</Text>
              </View>
            </View>
            <View style={styles.totalSum}>
              <View style={styles.summaryText}>
                <Text style={styles.summaryText.title}>Viso:</Text>
                <Text style={styles.summaryText.value}>0 €</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRowHeader}>
            <View style={styles.tableColFirst}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Darbų kaina, €</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Kiekis</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Mato vienetas</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Suma, €</Text>
            </View>
          </View>

          {workInfo.map((work) => {
            const inputs = Object.values(work.inputs);
            return work.list.map((item, index) => {
              const title = item.title;
              const price = item.price;
              const quantity = inputs[index];
              const unit = item.unit;
              const sum = quantity * price;
              return (
                <View style={styles.tableRow} key={index}>
                  <View style={styles.tableColFirst}>
                    <Text style={styles.tableCell}>{title}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{price}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{quantity}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{unit}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{sum}</Text>
                  </View>
                </View>
              );
            });
          })}
        </View>
      </Page>
    </Document>
  );
};

export default PDFfile;
