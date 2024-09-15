import React from "react";
import { Text, View } from "@react-pdf/renderer";

interface Props extends React.PropsWithChildren {
    title: string;
}
export const Section: React.FC<Props> = ({ title, children }) => (
    <View>
        <Text
            style={{
                fontSize: 16,
                fontWeight: "bold",
                borderBottom: "1px solid black",
                marginBottom: 4,
            }}
        >
            {title}
        </Text>
        <View style={{ display: "flex", gap: 8 }}>{children}</View>
    </View>
);
