import { StyleSheet, Text, ScrollView, Image, View, Dimensions } from "react-native";

export default function Lacta(){
    return(
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.title}>
                    Poema da Lacta
                </Text>

                    <Text style={styles.texto}>
                        Com o aroma sedutor que nos envolve, {'\n'}
                        Os chocolates da Lacta, paixão que se resolve. {'\n'}
                        Do chocolate ao leite ao irresistível meio amargo, {'\n'}
                        Cada mordida é um momento de puro afago.
                    </Text>

                    <View style={styles.gif}>
                        <Image style={{width: 250, height: 250}} resizeMode="contain"
                        source={require('../assets/valentine-valentine-day.gif')}/>
                    </View>
                 

                <Text style={styles.sub}>
                   - Poema feito pelo Chat GPT -
                </Text>

            </View>
        </ScrollView>
    );
}

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container:{
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        textAlign: 'left',
        color: '#000',
        paddingLeft: 10,
        marginTop: 70,
    },
    lacta: {
        width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    gif: {
        width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 8
    },
    title: {
        marginTop: 50,
        textAlignVertical: "top",
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#0000CD'
    },
    sub: {
        marginTop: 110,
        textAlignVertical: "bottom",
        textAlign: 'center',
        fontSize: 15,
        fontStyle: 'italic',
    }
});