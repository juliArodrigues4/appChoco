import { StyleSheet, Text, ScrollView, Image, View, Dimensions } from "react-native";

export default function Nestle(){
    return(
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.title}>
                    Poema da Nestlê
                </Text>

                    <Text style={styles.texto}>
                        Com recheios sedutores que nos fazem suspirar, {'\n'}
                        Os bonbons da Nestlé são motivo para celebrar. {'\n'}
                        Do chocolate ao caramelo, uma sinfonia de prazer, {'\n'}
                        Em cada momento, uma doce forma de viver.
                    </Text>

                    <View style={styles.gif}>
                        <Image style={{width: 250, height: 250}} resizeMode="contain"
                        source={require('../assets/chocolate-bar.gif')}/>
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
        marginTop: 50,
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
        padding: 8,
        marginTop: 20,
    },
    title: {
        marginTop: 50,
        textAlignVertical: "top",
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#8B1A1A'
    },
    sub: {
        marginTop: 80,
        textAlignVertical: "bottom",
        textAlign: 'center',
        fontSize: 15,
        fontStyle: 'italic',
    }
});