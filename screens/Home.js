import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

function Home() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
    },
    header: {
        height: 60,
    },
});

export default Home;
