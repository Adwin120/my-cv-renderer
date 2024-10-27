import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    Image,
    StyleSheet,
    Font,
    Link,
} from "@react-pdf/renderer";
import { Section } from "./components/Section";
import { SectionEntry, entryStyles } from "./components/SectionEntry";
import { TextWithIcon } from "./components/TextWithIcon";
import { Bold } from "./components/Bold";

Font.register({
    family: "Montserrat",
    src: "./assets/fonts/Montserrat-Regular.ttf",
});
Font.register({
    family: "Montserrat",
    src: "./assets/fonts/Montserrat-Bold.ttf",
    fontWeight: "bold",
});
Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
    body: {
        padding: 15,
        paddingBottom: 0,
        fontSize: 11,
        fontFamily: "Montserrat",
        color: "hsl(222, 15%, 17%)",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
        paddingBottom: 8,
    },
    description: {
        fontSize: 11,
        paddingVertical: 8,
    },
    contacts: {
        display: "flex",
        gap: 2,
    },
});

export const pdfContent = (
    <Document
        title="Adam Winnik CV"
        author="Adam Winnik"
        subject="Curriculum Vitae"
        language="en-US"
        pageLayout="singlePage"
        pdfVersion="1.7"
    >
        <Page style={styles.body}>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View>
                    <Text style={styles.title}>Adam Winnik</Text>
                    <Text style={styles.subtitle}>
                        Junior Software Engineer
                    </Text>

                    <View style={styles.contacts}>
                        <TextWithIcon src="./assets/icons/baseline_place_black_24dp.png">
                            Address: Wrocław, Poland
                        </TextWithIcon>
                        <TextWithIcon src="./assets/icons/baseline_email_black_24dp.png">
                            Email: adam.winnik120@gmail.com
                        </TextWithIcon>
                        <TextWithIcon src="./assets/icons/baseline_call_black_24dp.png">
                            Phone: +48 789 158 411
                        </TextWithIcon>
                        <TextWithIcon src="./assets/icons/github.JPG">
                            Github:{" "}
                            <Link src="https://github.com/Adwin120">
                                https://github.com/Adwin120
                            </Link>
                        </TextWithIcon>
                    </View>
                </View>
                <Image
                    style={{ width: 120, borderRadius: 5 }}
                    src="assets/images/me.jpg"
                />
            </View>
            <Text style={styles.description}>
                Solution-focused Fullstack Web Developer with broad knowledge of
                best software development practices and technologies. Able to
                quickly learn new skills and adopt company practices. Aiming to
                always maximize product maintainability to facilitate efficient
                team collaboration.
            </Text>
            <Section title="Work Experience">
                <SectionEntry indentNote="07/2024 - 09/2024">
                    <Text style={entryStyles.title}>
                        Enterprise Engineer Intern
                    </Text>
                    <Text style={entryStyles.subtitle}>
                        Codelab.eu, Wrocław, Dolnośląskie, Poland
                    </Text>
                    <Text>• Maintained and worked on development environment for Web applications in Java Spring and Angular</Text>
                    <Text>
                        • Reduced E2E tests duration by 30min and removed their
                        flakiness
                    </Text>
                    <Text>
                        • Automated processes by shell and cross-platform Node
                        scripts
                    </Text>
                    <Text>
                        • Worked on OAuth integrations, Nginx modules, Gitlab
                        CI/CD orchestration
                    </Text>
                </SectionEntry>
                <SectionEntry indentNote="05/2022 - 03/2023">
                    <Text style={entryStyles.title}>Web Developer Intern</Text>
                    <Text style={entryStyles.subtitle}>
                        Grid Dynamics, Wrocław, Dolnośląskie, Poland
                    </Text>
                    <Text>• Worked in a SCRUM Agile development team</Text>
                    <Text>
                        • Developed user interfaces with React and Angular
                    </Text>
                    <Text>
                        • Implemented testing code for web-based applications
                    </Text>
                    <Text>
                        • Developed user-friendly web forms with validation and
                        error handling
                    </Text>
                </SectionEntry>
            </Section>
            <Section title="Education">
                <SectionEntry indentNote="02/2024 - 06/2025">
                    <Text style={entryStyles.title}>
                        Master of Science: Application of Modern Information
                        Technologies
                    </Text>
                    <Text>
                        Wrocław University of Science and Technology - Wrocław,
                        Dolnośląskie, Poland
                    </Text>
                </SectionEntry>
                <SectionEntry indentNote="10/2020 - 01/2024">
                    <Text style={entryStyles.title}>
                        Bachelor of Science: Applied Computer Science
                    </Text>
                    <Text>
                        Wrocław University of Science and Technology - Wrocław,
                        Dolnośląskie, Poland
                    </Text>
                </SectionEntry>
            </Section>
            <Section title="Skills">
                <SectionEntry>
                    <Text>
                        <Bold>Web Development</Bold> - HTML5, CSS3, ES6+, TS, React.js,
                        Angular, Next.js
                    </Text>
                    <Text><Bold>Backend</Bold> - RESTful API, Node.js, Java Spring</Text>
                    <Text><Bold>Javascript Tooling</Bold> - Webpack, Jest, Vite</Text>
                    <Text><Bold>Project Organization</Bold> - Scrum Agile, Jira, Git</Text>
                    <Text><Bold>System Administration</Bold> - Linux, Bash</Text>
                    <Text><Bold>Object Oriented Programming</Bold> - Java, Python, C#</Text>
                    <Text><Bold>Functional Programming</Bold> - Elixir, Scala, Haskell</Text>
                    <Text>
                        <Bold>Databases</Bold> - MySQL, Firestore, Database Design, Data
                        Warehousing
                    </Text>
                    <Text><Bold>Cloud Providers</Bold> - Google Cloud Platform (GCP)</Text>
                    <Text><Bold>Testing/Integration</Bold> - Gitlab CI/CD, Cypress, Jest</Text>
                </SectionEntry>
            </Section>
            <Section title="Languages">
                <SectionEntry>
                    <Text>• English - C1</Text>
                    <Text>• Polish - native</Text>
                </SectionEntry>
            </Section>
        </Page>
    </Document>
);
