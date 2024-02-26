import React, { PropsWithChildren } from "react";
import { Image, Text, View } from "@react-pdf/renderer";

interface Props extends PropsWithChildren {
    size?: number;
    src: string;
}
export const TextWithIcon: React.FC<Props> = ({ src, size = 15, children }) => (
    <View style={{ display: "flex", flexDirection: "row" }}>
        <Image
            src={src}
            style={{ width: size, height: size, marginRight: 4 }}
        />
        <Text>{children}</Text>
    </View>
);
