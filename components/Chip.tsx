import React from "react";
import { StyleSheet, View, Image, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    chip: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
        flexGrow: 0,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: "100%",
        borderWidth: 3,
        borderColor: "gold"
    },
    chipIcon: {
        width: 30
    }
});

interface Props {
    iconSrc: string;
    title: string;
}
export const Chip: React.FC<Props> = ({ iconSrc, title }) => (
    <View style={styles.chip}>
        <Image src={iconSrc} style={styles.chipIcon} />
        <Text>{title}</Text>
    </View>
);
