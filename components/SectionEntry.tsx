import { View } from "@react-pdf/renderer";
import React, { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
    indentNote?: ReactNode;
}
export const SectionEntry: React.FC<Props> = ({ indentNote, children }) => (
    <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={{ width: 150 }}>{indentNote}</View>
        <View>{children}</View>
    </View>
);
