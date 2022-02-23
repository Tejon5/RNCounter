import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fab from '../components/Fab';


const CounterScreen = () =>{

    const [counter, setCounter] = useState(0);

    const add = () =>{
        setCounter(counter+1)
    }

    const substract = ()=>{
        setCounter(counter-1)
    }


    return(
        <>
        <View style={styles.container}>
            <Text style={styles.title}
            >Contador: {counter}</Text>
            <Fab title='-1' onPress={()=>substract()} position='L'/>
            <Fab title='+1' onPress={()=>add()} position='R'/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    title:{
        fontSize:40,
        fontWeight:'bold',
        alignSelf:'center',
        top:-15
    }
})
export default CounterScreen;
