import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box';
import  uuid  from 'react-native-uuid';

function ToDoList() {
    const [checkBoxStates, setCheckBoxStates] = useState({});


    const list = [
        { text: 'Поцілувати Назара', key: uuid.v4() },
        { text: 'Погладити Адольфа', key: uuid.v4()},
        { text: 'півпівпівп', key: uuid.v4() },
        { text: 'івпівп', key: uuid.v4() }
    ];

    const handleCheckBoxClick = (key) => {
        setCheckBoxStates((prevState) => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Today Habit</Text>
                <Text style={styles.button}>See all</Text>
            </View>
            <View style={styles.listWrapper}>
                {list.map((item) => (
                    <View style={styles.listItem} key={item.key}>
                        <Text>{item.text}</Text>
                        <CheckBox
                            isChecked={checkBoxStates[item.key]}
                            onClick={() => handleCheckBoxClick(item.key)}
                            checkBoxColor='black'
                            checkedCheckBoxColor='#37C871'
                        />
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        fontSize: 21,
        color: '#2F2F2F',
        fontWeight: 'bold'
    },
    button: {
        color: '#FF5C00',
        fontWeight: 'bold'
    },
    checkbox: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 30,
        height: 30,
    },
    listWrapper: {
        paddingTop: 16
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 5
    }
});

export default ToDoList;
