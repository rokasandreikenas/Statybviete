import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import font from "../../assets/Poppins-Regular.ttf";

Font.register({
  family: "Poppins",
  src: font,
});

const styles = StyleSheet.create({
  table: {
    fontFamily: "Poppins",

    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    margin: 10,
  },
  tableRow: { margin: "auto", flexDirection: "row" },
  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: { margin: "auto", marginTop: 5, fontSize: 10 },
});
const PDFfile = ({ allSpecialitiesSums, totalSum, workInfo }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
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
                  <View style={styles.tableCol}>
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
