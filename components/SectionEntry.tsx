import { View, StyleSheet, Text } from "@react-pdf/renderer";
import React, { PropsWithChildren, ReactNode } from "react";

export const entryStyles = StyleSheet.create({
    title: {
        fontSize: 13,
        fontWeight: "bold",
        lineHeight: 1,
        paddingBottom: 8,
    },
    subtitle: {
        fontSize: 11,
        // fontStyle: "italic"
    },
});

interface Props extends PropsWithChildren {
    indentNote?: ReactNode;
}
export const SectionEntry: React.FC<Props> = ({ indentNote, children }) => (
    <View style={{ display: "flex", flexDirection: "row", lineHeight: 1.5 }}>
        <View style={{ width: 120 }}>
            <Text style={{ fontSize: 11, paddingTop: 2 }}>{indentNote}</Text>
        </View>
        <View style={{ maxWidth: "75%" }}>{children}</View>
    </View>
);
