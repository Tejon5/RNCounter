import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Platform, TouchableNativeFeedback } from 'react-native';

interface Props {
    title:string,
    onPress:()=>void,
    position: 'R' | 'L'
}

const Fab = ({title, onPress, position}:Props)=>{

    const ios = () =>{
        return(
            <>
            <TouchableOpacity style={[styles.fabLocation, (position === 'L') ? styles.left  : styles.right] }
            activeOpacity={0.8}
            onPress={onPress}
            >
                <View style={styles.fab}>
                <Text style={styles.fabText}>{title}</Text>
                </View>
    
            </TouchableOpacity>
            </>
        )
    }

    const android = ()=>{
        return(
            <>
            {/*en android el style de la ubicacion se definio en el view porque acomodaba mal los botones */}
            <View style={[styles.fabLocation, (position === 'L') ? styles.left  : styles.right] }>
            <TouchableNativeFeedback 
            background={TouchableNativeFeedback.Ripple('black', false, 30)}
            onPress={onPress}
            >
                <View style={styles.fab}>
                <Text style={styles.fabText}>{title}</Text>
                </View>
    
            </TouchableNativeFeedback>
            </View>
            </>
        )
    }
    
    return (Platform.OS === 'android') ? android() : ios();

}

const styles = StyleSheet.create({
    fabLocation:{
        position:'absolute',
        bottom:25
    },
    right:{
        right:25,
    },
    left:{
        left:25
    },
    fab:{
        width:60,
        height:60,
        borderRadius:100,
        backgroundColor:'#2196F3',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fabText:{
        fontSize:25,
        color:'white',
        fontWeight:'bold',
        alignSelf:'center'

    }
    
    })
export default Fab;