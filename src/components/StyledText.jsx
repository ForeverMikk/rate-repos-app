import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: 'grey'
    },
    bold: {
        fontWeight: 'bold'
    },
    blue: {
        color: 'blue'
    },
    big: {
        fontSize: 20
    },
    small: {
        fontSize: 10
    }
})

export default function StyledText ({ bold, blue, big, children, small}) {

    const textStyles = [
        styles.text,
        blue && styles.blue, // Aqui se va a evaluar si la prop existe
        bold && styles.bold, // Y si existe la va a agregar
        big && styles.big,
        small && styles.small
    ]

    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}