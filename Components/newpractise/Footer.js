import React, { Component } from 'react';
import { Picker, StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

class Footer extends Component {
    state = {}
    handlesubmit = () => {
        Actions.Quiz1()
    }
    homeclick = () => {
        Actions.push('/')
    }
    mockclick = () => {
        Actions.mock()
    }
    quizclick = () => {
        Actions.quiz()
    }
    practiseclick = () => {
        Actions.practise()
    }

    render() {
        return (
            <View style={styles.footer}>
                <ScrollView horizontal={true}>
                    <View style={styles.footerIcons1}>
                        <View style={styles.imageIcon}><Icon name='home' size={20} onPress={() => this.homeclick()} /></View>
                        <Text style={{ fontSize: 10 }}>Home</Text>
                    </View>

                    <View style={styles.footerIcons1}>
                        <View style={styles.imageIcon}><Icon name='book' size={20} onPress={() => this.practiseclick()} /></View>
                        <Text style={{ fontSize: 10 }}>Practice</Text>
                    </View>

                    <View style={styles.footerIcons1}>
                        <View style={styles.imageIcon}><Icon name='file-text-o' size={20} onPress={() => this.mockclick()} /></View>
                        <Text style={{ fontSize: 10 }}>Mock Test</Text>
                    </View>

                    <View style={styles.footerIcons1}>
                        <View style={styles.imageIcon}><Icon name='question-circle-o' size={20} onPress={() => this.quizclick()} /></View>
                        <Text style={{ fontSize: 10 }}>Quiz</Text>
                    </View>

                    <View style={styles.footerIcons1}>
                        <View style={styles.imageIcon}><Icon name='newspaper-o' size={20} /></View>
                        <Text style={{ fontSize: 10 }}>Read</Text>
                    </View>

                    <View style={styles.footerIcons1}>
                        <View style={styles.imageIcon}><Icon name='podcast' size={20} /></View>
                        <Text style={{ fontSize: 10 }}>Challenges</Text>
                    </View>

                    <View style={styles.footerIcons1}>
                        <View style={styles.imageIcon}><Icon name='cog' size={20} /></View>
                        <Text style={{ fontSize: 10 }}>Customise</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Footer;


const styles = StyleSheet.create({
    footer: {
        height: 60,
        flexDirection: "row",
        borderTopWidth: 1.5,
        borderBottomColor: "lightgray",
        borderTopColor: "lightgray"

    },
    imageIcon: {
        height: 20,
        width: 20,
    },
    footerIcons1: {
        flexDirection: "column",
        left: 10,
        top: 13,
        marginRight: 20,
        alignItems: "center"
    },
})


