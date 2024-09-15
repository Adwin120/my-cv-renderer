import React, { type PropsWithChildren } from "react";
import { Text } from "@react-pdf/renderer";

export const Bold: React.FC<PropsWithChildren> = ({ children }) => (
    <Text style={{ fontWeight: "bold" }}>{children}</Text>
);
