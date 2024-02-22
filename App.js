import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
0

export default function App() {
  return (
    <ScrollView>
       <View style={styles.container}>

        <ImageBackground
          source={require('./assets/melting-chocolate-bar-png-melted-chocolate-png-image-2403.png')}
          style={styles.image}
        >
          <Text style={styles.headerText}>Chocôtonya</Text>
        </ImageBackground>

            <View style={styles.box}>
                <Image source={require('./assets/download-fotor-bg-remover-20240222151619.png')} style={styles.img}/>
                <Text style={styles.imgText}>Bombons Garoto</Text>
            </View>

            <View style={styles.box}>
                <Image source={require('./assets/download-fotor-bg-remover-20240222151619.png')} style={styles.img}/>
                <Text style={styles.imgText}>Chocotônya</Text>
            </View>

            <View style={styles.box}>
                <Image source={require('./assets/download-fotor-bg-remover-20240222151619.png')} style={styles.img}/>
                <Text style={styles.imgText}>Chocotônya</Text>
            </View>

            <View style={styles.box}>
                <Image source={require('./assets/download-fotor-bg-remover-20240222151619.png')} style={styles.img}/>
                <Text style={styles.imgText}>Chocotônya</Text>
            </View>

            <View style={styles.box}>
                <Image source={require('./assets/download-fotor-bg-remover-20240222151619.png')} style={styles.img}/>
                <Text style={styles.imgText}>Chocotônya</Text>
            </View>

        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // header: {
  //   // backgroundColor: '#724629',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   textAlign: 'center',
  //   width: '100%',
  //   height: 'auto',
  //   // borderBottomLeftRadius: 100, // Raio para o canto inferior esquerdo
  //   // borderBottomRightRadius: 100, // Raio para o canto inferior direito

  // },
  container: {
    flex: 1,
    backgroundColor: '#f5fffa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
    backgroundColor: '#724628',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    marginBottom: 15,
    marginTop: 30,
    borderRadius: 180,
  },
  img: {
    width: 185,
    height: 185,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  imgText: {
    fontSize: 18,
    color: 'white',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
