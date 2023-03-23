import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/action/counter/CounterAction';

const CounterScreen = () => {
    const countReducerData = useSelector((state) => state.CounterReducer);
    console.log(countReducerData.count);
    const dispatch = useDispatch();
    const incrementHandler = () => {
        dispatch(increment())
    }
    const decrementHandler = () => {
        dispatch(decrement())
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.text_style, { fontSize: 30 }]}>Counter</Text>
            <View style={styles.top_container}>
                <TouchableOpacity onPress={decrementHandler}>
                    <Text style={styles.text_style}>--</Text>
                </TouchableOpacity>
                <Text style={styles.text_style}>{countReducerData.count}</Text>
                <TouchableOpacity onPress={() => incrementHandler()}>
                    <Text style={styles.text_style}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CounterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'

    },
    top_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 40,
        width: '100%',
        marginVertical: 50

    },
    text_style: {
        fontSize: 25,
        color: '#fff'
    }

})