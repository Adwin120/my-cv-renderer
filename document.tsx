import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    Image,
    StyleSheet,
    Font,
    Link
} from "@react-pdf/renderer";
import { Section } from "./components/Section";
import { SectionEntry, entryStyles } from "./components/SectionEntry";
import { TextWithIcon } from "./components/TextWithIcon";


Font.register({
    family: "Montserrat",
    src: "./assets/fonts/Montserrat-Regular.ttf"
})
Font.register({
    family: "Montserrat",
    src: "./assets/fonts/Montserrat-Bold.ttf",
    fontWeight: "bold"
})
Font.registerHyphenationCallback(word => [word]);

const styles = StyleSheet.create({
    body: {
        padding: 16,
        paddingBottom: 0,
        fontSize: 12,
        fontFamily: "Montserrat",
        color: "hsl(222, 15%, 17%)"
    },
    title: {
        fontSize: 41,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 19,
        paddingBottom: 8
    },
    description: {
        fontSize: 13,
        paddingVertical: 8
    },
    contacts: {
        display: "flex",
        gap: 2
    }
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
                    justifyContent: "space-between"
                }}
            >
                <View>
                    <Text style={styles.title}>Adam Winnik</Text>
                    <Text style={styles.subtitle}>
                        Junior Software Engineer
                    </Text>

                    <View style={styles.contacts}>
                        <TextWithIcon src="./assets/icons/baseline_place_black_24dp.png">
                            Location: Wrocław, Poland
                        </TextWithIcon>
                        <TextWithIcon src="./assets/icons/baseline_email_black_24dp.png">
                            Email: adam.winnik120@gmail.com
                        </TextWithIcon>
                        <TextWithIcon src="./assets/icons/baseline_call_black_24dp.png">
                            Phone: +48 789-158-411
                        </TextWithIcon>
                        <TextWithIcon src="./assets/icons/github.JPG">
                            Github: <Link src="https://github.com/Adwin120">
                                Adwin120
                            </Link>
                        </TextWithIcon>
                    </View>
                </View>
                <Image
                    style={{ width: 140, borderRadius: 5 }}
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
            <Section title="Work History">
                <SectionEntry indentNote="05-2022 - 03-2023">
                    <Text style={entryStyles.title}>Web Developer Intern</Text>
                    <Text style={entryStyles.subtitle}>
                        Grid Dynamics, Wrocław, Dolnośląskie, Poland
                    </Text>
                    <Text>• Worked in a SCRUM Agile development team</Text>
                    <Text>
                        • Developed user interfaces with React and Angular
                    </Text>
                    <Text>
                        • Developed testing code for web-based applications
                    </Text>
                    <Text>
                        • Developed user-friendly web forms with validation and
                        error handling
                    </Text>
                </SectionEntry>
            </Section>
            <Section title="Education">
                <SectionEntry indentNote="02.2024 - 06.2025">
                    <Text style={entryStyles.title}>
                        Master of Science: Applicacation of Modern Information
                        Technologies
                    </Text>
                    <Text>
                        Wrocław University of Science and Technology - Wrocław,
                        Dolnośląskie, Poland
                    </Text>
                </SectionEntry>
                <SectionEntry indentNote="10.2020 - 01.2024">
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
                        Web Development - HTML5, CSS3, ES6+, TS, React.JS,
                        Angular, Next.JS
                    </Text>
                    <Text>Backend - RESTful API, Node.JS</Text>
                    <Text>Javascript Tooling - Webpack, Jest, Eslint</Text>
                    <Text>Project Organization - Scrum Agile, Jira, Git</Text>
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
            {/* <View>
                <Text style={{ fontSize: 12 }}>
                    I hereby give consent for my personal data to be processed
                    by [nazwa firmy] for the purpose of conducting recruitment
                    for the position for which I am applying.
                </Text>
            </View> */}
        </Page>
    </Document>
);
