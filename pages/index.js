import 'react-native-gesture-handler';
import React from 'react'; 
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function Index(props) {

  return (
    <ScrollView>
      <View style={styles.container}>

        <View  style={styles.header}>
          <Text style={styles.headerText}>Chocôtonya</Text>
        </View>

            <TouchableOpacity style={styles.to} onPress={() => {props.navigation.navigate('Lacta')}} >
              <View style={styles.box}>
                  <Image source={require('../assets/lacta-fotor-bg-remover-2024022622731.png')} style={styles.img}/>
                  <Text style={styles.imgText}>Bombons Lacta</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.to} onPress={() => {props.navigation.navigate('Garoto')}}>
              <View style={styles.box}>
                  <Image source={require('../assets/download-fotor-bg-remover-20240222151619.png')} style={styles.img}/>
                  <Text style={styles.imgText}>Bombons Garoto</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.to} onPress={() => {props.navigation.navigate('Nestle')}}>
              <View style={styles.box}>
                  <Image source={require('../assets/nestle-fotor-bg-remover-2024022622813.png')} style={styles.img}/>
                  <Text style={styles.imgText}>Bombons Nestlê</Text>
              </View>
            </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#724629',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: 80,
    marginTop: 0,
    borderBottomLeftRadius: 100, // Raio para o canto inferior esquerdo
    borderBottomRightRadius: 100, // Raio para o canto inferior direito

  },
  container: {
    marginTop: 0,
    marginBottom: 50,
    padding: 0,
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
  },
  to:{
    width: 300,
    height: 300,
    marginTop: 30,
  }
});
