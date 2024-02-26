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
                <Text>Kamieniec Wrocławski, 55-002, Dolnośląskie Poland</Text>
                <Text>789158411</Text>
                <Text>adam.winnik120@gmail.com</Text>
            </View>
            <Section title="About me">
            Solution-focused Fullstack Web Developer with broad knowledge of best software development practices and technologies. Able to quickly learn new skills and adapt company practices. Aiming to always maximize product maintainability to facilitate efficient team collaboration.
            </Section>
            <Section title="Work History">
                <Text>Web Developer Intern</Text>
                <Text>Grid Dynamics, Wrocław, Dolnośląskie, Poland</Text>
                <Text>05-2022 - 03-2023</Text>
                <Text>Worked in a SCRUM Agile development team</Text>
                <Text>Developed user interfaces with React and Angular</Text>
                <Text>Developed testing code for web-based applications</Text>
                <Text>Developed user-friendly web forms with validation and error handling</Text>
            </Section>
            <Section title="Education">
                <Text>Master of Science: Applicacation of Modern Information Technologies</Text>
                <Text>Wrocław University of Science and Technology - Wrocław, Dolnośląskie, Poland</Text>
                <Text>Bachelor of Science: Applied Computer Science</Text>
                <Text>Wrocław University of Science and Technology - Wrocław, Dolnośląskie, Poland</Text>
            </Section>
            <Section title="Skills">
                <Text>Web Development - HTML5, CSS3, ES6+, TS, React.JS, Angular, Node.JS</Text>
                <Text>Javascript Tooling - Webpack, Jest, Eslint</Text>
                <Text>Project Organization - Scrum Agile, Jira</Text>
                <Text>Reactive Programming with ReactiveX</Text>
                <Text>System Administration - Linux, Bash</Text>
                <Text>Object Oriented Programming - Java, Python, C#</Text>
                <Text>Functional Programming - Elixir, Scala, Haskell</Text>
                <Text>Databases - MySQL, Firestore, Database Design, Data Warehousing</Text>
                <Text>Cloud Providers - Google Cloud Platform (GCP)</Text>
            </Section>
            <Section title="Languages">
                {/* <Text>• German - A1</Text> */}
                <Text>• English - C1</Text>
                <Text>• Polish - native</Text>
            </Section>
            {/* <Section title="Contact"></Section> */}
            {/* <View style={styles.chipSet}>
                <Chip iconSrc="icons/react.png" title="React" />
            </View> */}
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
