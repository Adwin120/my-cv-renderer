import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
export const pdfContent = (
    <Document>
        <Page>
            <View>
                <Text>Hello World</Text>
            </View>
        </Page>
    </Document>
);
