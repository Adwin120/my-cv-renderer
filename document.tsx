import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    Image,
    StyleSheet,
    Font
} from "@react-pdf/renderer";
import { Chip } from "./components/Chip";
import { Section } from "./components/Section";
import { SectionEntry } from "./components/SectionEntry";

Font.register({
    family: "CenturyGothic",
    src: "./assets/fonts/CenturyGothic.ttf"
});

const styles = StyleSheet.create({
    chipSet: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    body: {
        padding: 16,
        fontSize: 16,
        fontFamily: "CenturyGothic"
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
        <Page style={styles.body}>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >
                <View>
                    <Text>Adam Winnik</Text>
                    <Text>Junior Web Developer</Text>
                    <Text>Kamieniec Wrocławski, 55-002, Poland</Text>
                    <Text>789158411</Text>
                    <Text>adam.winnik120@gmail.com</Text>
                </View>
                <Image
                    style={{ width: 200, borderRadius: 5 }}
                    src="assets/images/me.jpg"
                />
            </View>
            <Text>
                Solution-focused Fullstack Web Developer with broad knowledge of
                best software development practices and technologies. Able to
                quickly learn new skills and adopt company practices. Aiming to
                always maximize product maintainability to facilitate efficient
                team collaboration.
            </Text>
            <Section title="Work History">
                <SectionEntry indentNote={<Text>05-2022 - 03-2023</Text>}>
                    <Text>Web Developer Intern</Text>
                    <Text>Grid Dynamics, Wrocław, Dolnośląskie, Poland</Text>
                    <Text>Worked in a SCRUM Agile development team</Text>
                    <Text>
                        Developed user interfaces with React and Angular
                    </Text>
                    <Text>
                        Developed testing code for web-based applications
                    </Text>
                    <Text>
                        Developed user-friendly web forms with validation and
                        error handling
                    </Text>
                </SectionEntry>
            </Section>
            <Section title="Education">
                <SectionEntry>
                    <Text>
                        Master of Science: Applicacation of Modern Information
                        Technologies
                    </Text>
                    <Text>
                        Wrocław University of Science and Technology - Wrocław,
                        Dolnośląskie, Poland
                    </Text>
                </SectionEntry>
                <SectionEntry>
                    <Text>Bachelor of Science: Applied Computer Science</Text>
                    <Text>
                        Wrocław University of Science and Technology - Wrocław,
                        Dolnośląskie, Poland
                    </Text>
                </SectionEntry>
            </Section>
            <Section title="Skills">
                <SectionEntry>
                    <Text>
                        Web Development - HTML5, CSS3, ES6+, TS, React.JS,
                        Angular
                    </Text>
                    <Text>Backend - RESTful API, Node.JS</Text>
                    <Text>Javascript Tooling - Webpack, Jest, Eslint</Text>
                    <Text>Project Organization - Scrum Agile, Jira</Text>
                    <Text>Reactive Programming with ReactiveX</Text>
                    <Text>System Administration - Linux, Bash</Text>
                    <Text>Object Oriented Programming - Java, Python, C#</Text>
                    <Text>Functional Programming - Elixir, Scala, Haskell</Text>
                    <Text>
                        Databases - MySQL, Firestore, Database Design, Data
                        Warehousing
                    </Text>
                    <Text>Cloud Providers - Google Cloud Platform (GCP)</Text>
                </SectionEntry>
            </Section>
            <Section title="Languages">
                <SectionEntry>
                <Text>• English - C1</Text>
                <Text>• Polish - native</Text>
                </SectionEntry>
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
