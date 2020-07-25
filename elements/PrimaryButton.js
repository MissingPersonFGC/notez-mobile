import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { tailwind } from "../lib/tailwind";

export default function PrimaryButton({ text, onPress }) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={tailwind("px-1 py-2 bg-blue-500 rounded mr-1")}
		>
			<Text style={tailwind("text-white font-semibold uppercase text-base")}>
				{text}
			</Text>
		</TouchableOpacity>
	);
}
