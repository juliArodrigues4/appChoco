import { StyleSheet, Text, View, Scrollview, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
        <View style={styles.header}>
            <Text style={styles.headerText}>Chocotônya</Text>
        </View>

        <View style={styles.container}>

            <View style={styles.box}>
                <Text>Chocotônya</Text>
                <Image source={require('./assets/download.jpeg')} style={styles.img}/>
            </View>

            <View style={styles.box}>
                <Text>Chocotônya</Text>
                <Image source={require('./assets/download.jpeg')} style={styles.img}/>
            </View>

            <View style={styles.box}>
                <Text>Chocotônya</Text>
                <Image source={require('./assets/download.jpeg')} style={styles.img}/>
            </View>

            <View style={styles.box}>
                <Text>Chocotônya</Text>
                <Image source={require('./assets/download.jpeg')} style={styles.img}/>
            </View>

            <View style={styles.box}>
                <Text>Chocotônya</Text>
                <Image source={require('./assets/download.jpeg')} style={styles.img}/>
            </View>

        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    width: '100%',
    height: 100,
    borderTopLeftRadius: 100, // Raio para o canto superior esquerdo
    borderTopRightRadius: 5, // Raio para o canto superior direito
    borderBottomLeftRadius: 10, // Raio para o canto inferior esquerdo
    borderBottomRightRadius: 70, // Raio para o canto inferior direito
    backgroundColor: 'rgba(255, 255, 255, .5)',

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    width: 350,
    height: 350,
    marginBottom: 15,
    marginTop: 30
  },
  img: {
    width: 250,
    height: 250,
  },
  headerText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  }
});

