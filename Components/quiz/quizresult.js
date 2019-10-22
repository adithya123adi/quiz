import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Picker, StatusBar, ScrollView, TouchableHighlight, YellowBox, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

export default class Statistics extends React.Component {
    state = {
        laptop: 1,
        index: 0,
        routes: [
            { key: 'correct', title: 'Correct' },
            { key: 'incorrect', title: 'Incorrect' },
            { key: 'marked', title: 'marked' }
        ],
    };
    goback = () => {
        Actions.push('/')
    }
    Correct = () => (
        <ScrollView>
            <View>
                {this.props.output.map((data, index) => (
                    data.correct === data.answer ?
                        <View key={index} >
                            <View style={styles.Questionview} >
                                <View style={styles.upper} >
                                    <View style={styles.num}>
                                        <TouchableOpacity>
                                            <Text>{data.id}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.timer}>
                                        <Text>Timer</Text>
                                    </View>
                                    <View style={styles.questionicons}>
                                        <Icon name="bookmark-o" size={20} color={"black"} />
                                    </View>

                                    <View style={styles.questionicons}>
                                        <Icon
                                            name="question-circle-o"
                                            size={20}
                                            color={"black"}
                                        />
                                    </View>
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text>{data.question}</Text>
                                    <Text>Selected Answer :  {data.answer}</Text>
                                </View>
                            </View>
                        </View>
                        : <View key={index}></View>
                ))
                }
            </View >
        </ScrollView>
    )
    Incorrect = () => (

        <ScrollView>
            <View>
                {this.props.output.map((data, index) => (
                    data.correct !== data.answer ?
                        <View key={index} >
                            <View style={styles.Questionview} >
                                <View style={styles.upper}>
                                    <View style={styles.num}>
                                        <TouchableOpacity>
                                            <Text>{data.id}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.timer}>
                                        <Text>Timer</Text>
                                    </View>
                                    <View style={styles.questionicons}>
                                        <Icon name="bookmark-o" size={20} color={"black"} />
                                    </View>

                                    <View style={styles.questionicons}>
                                        <Icon
                                            name="question-circle-o"
                                            size={20}
                                            color={"black"}
                                        />
                                    </View>
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text>{data.question}</Text>
                                    <Text>Selected Answer :  {data.answer}</Text>
                                </View>
                            </View>
                        </View>
                        : <View key={index}></View>
                ))
                }
            </View >
        </ScrollView>

    )
    Marked = () => (
        <ScrollView>
            <View>
                {this.props.marked.map((data, index) => {
                    return (
                        <View key={index}>
                            <View style={styles.Questionview}>
                                <View style={styles.upper}>
                                    <View style={styles.num}>
                                        <TouchableOpacity>
                                            <Text>{data.id}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.timer}>
                                        <Text>Timer</Text>
                                    </View>
                                    <View style={styles.questionicons}>
                                        <Icon name="bookmark-o" size={20} color={"black"} />
                                    </View>

                                    <View style={styles.questionicons}>
                                        <Icon
                                            name="question-circle-o"
                                            size={20}
                                            color={"black"}
                                        />
                                    </View>
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text>{data.question}</Text>
                                    <Text>{data.answer}</Text>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.bars}>
                        <Icon name="angle-left" size={32} color={"black"} onPress={() => this.goback()} />
                    </View>
                    <View style={styles.statustxt}>
                        <Text style={styles.texts} >Number Scene | 5 results</Text>
                    </View>
                </View>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        correct: this.Correct,
                        incorrect: this.Incorrect,
                        marked: this.Marked
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}
                    renderTabBar={props =>
                        <TabBar
                            {...props}
                            indicatorStyle={{ backgroundColor: 'black' }}
                            style={{ backgroundColor: 'white' }}
                            activeColor='black'
                            inactiveColor='black'
                        />
                    }
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    /*header */
    container: {
        flex: 1,
        marginTop: 25,
        width: "100%",
        backgroundColor: 'white',

    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        display: 'flex',
        height: 55,
        width: "100%",
        borderBottomWidth: 1.5,
        borderBottomColor: "lightblue",
    },

    bars: {
        flexDirection: "column",
        justifyContent: 'center',
        marginLeft: 10,

        color: "lightblue",
        marginRight: 5
    },
    statustxt: {
        flexDirection: "column",
        justifyContent: 'center',
        marginLeft: 10,

    },
    texts: {
        fontSize: 20,
        color: "#000",
        fontWeight: "bold"
    },
    /* */
    Questionview: {
        backgroundColor: "white",
        width: "100%",
        height: 120,
        marginTop: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    upper: {
        height: 35,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginBottom: "3%"
    },
    num: {
        width: 30,
        height: 30,
        borderRadius: 360,
        borderColor: "black",
        borderWidth: 1,
        marginLeft: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5
    },
    timer: {
        justifyContent: "center",
        marginRight: "60%",
        marginLeft: "2%"
    },
    questionicons: {
        justifyContent: "center",
        marginRight: "3%"
    },

})