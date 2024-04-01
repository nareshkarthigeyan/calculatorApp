import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Calculator</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1E1E1E",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        color: "white",
        padding: 10,
        paddingLeft: 20,
        width: "100%",
        fontSize: 22,
        fontFamily: "inter",
        fontWeight: "800",
    },
});

export default Header;
