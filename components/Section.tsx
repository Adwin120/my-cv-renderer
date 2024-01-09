import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    Image,
    StyleSheet
} from "@react-pdf/renderer";

interface Props extends React.PropsWithChildren {
    title: string;
}
export const Section: React.FC<Props> = ({ title, children }) => (
    <View>
        <Text style={{fontSize: 24}}>{title}</Text>
        {children}
    </View>
);
