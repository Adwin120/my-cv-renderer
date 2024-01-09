import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    Image,
    StyleSheet
} from "@react-pdf/renderer";
import { Chip } from "./components/Chip";
import { Section } from "./components/Section";

const styles = StyleSheet.create({
    chipSet: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    }
});

export const pdfContent = (
    <Document
        title="Adam Winnik CV"
        author="Adam Winnik"
        subject="Curriculum Vitae"
        language="en-US"
        pageLayout="singlePage"
    >
        <Page style={{ padding: 16 }}>
            <View>
                <Text>Adam Winnik</Text>
                <Text>Junior Web Developer</Text>
                <Image
                    style={{ width: 200, borderRadius: 5 }}
                    src="images/me.jpg"
                />
            </View>
            <Section title="About me"></Section>
            <Section title="Experience"></Section>
            <Section title="Education"></Section>
            <Section title="Skills">
                <Text>Technologies I'm confidently able to work independently on</Text>
                <Text>Technologies I'm able to work on under senior supervision</Text>
            </Section>
            <Section title="Languages">
                <Text>• English - C1</Text>
                <Text>• Polish - native</Text>
            </Section>
            <Section title="Contact"></Section>
            <View style={styles.chipSet}>
                <Chip iconSrc="icons/haskell.png" title="React" />
            </View>
            <View>
                <Text style={{ fontSize: 12 }}>
                    I hereby give consent for my personal data to be processed
                    by [nazwa firmy] for the purpose of conducting recruitment
                    for the position for which I am applying.
                </Text>
            </View>
        </Page>
    </Document>
);
