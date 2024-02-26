import { StyleSheet, Text, ScrollView, Image, View } from "react-native";

export default function Lacta(){
    return(
        <ScrollView>

            <View style={styles.container}>
                <Text style={styles.texto}>
                    Melhores chocolates do mundo!
                </Text>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 8,
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    texto: {
        fontSize: 35,
        textAlign: 'center',
        color: '#000',
    }
});