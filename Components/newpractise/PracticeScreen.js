import React from 'react';
import { Picker, StyleSheet, Text, Dimensions, View, ScrollView, Image, TouchableHighlight, TouchableOpacity, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PieChart } from 'react-native-chart-kit';
import * as Progress from 'react-native-progress';
import { Actions } from 'react-native-router-flux';

class PracticeScreen extends React.Component {
    onclickstart = () => {
        Actions.mainquiz()
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.note}>
                        <Text style={styles.NotetextHeader}>Recent Chapter</Text>
                        <TouchableOpacity onPress={() => this.onclickstart()} >
                            <View style={styles.rightBox}>
                                <View style={styles.r1}><Text style={styles.Notetext}>Number Sense</Text></View>
                                <View style={styles.right}>
                                    <TouchableOpacity>
                                        <Icon name="angle-right" size={25} onPress={() => this.onclickstart()} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onclickstart()} >
                            <View style={styles.rightBox}>
                                <View style={styles.r1}><Text style={styles.Notetext}>Computation Operation</Text></View>
                                <View style={styles.right}>
                                    <TouchableOpacity>
                                        <Icon name="angle-right" size={25} onPress={() => this.onclickstart()} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.NotetextHeader}>Chapter</Text>

                        <TouchableOpacity onPress={() => this.onclickstart()} >
                            <View style={styles.rightBox}>
                                <View style={styles.r1}><Text style={styles.Notetext}>Number Sense</Text></View>
                                <View style={styles.right}>
                                    <TouchableOpacity>
                                        <Icon name="angle-right" size={25} onPress={() => this.onclickstart()} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onclickstart()} >
                            <View style={styles.rightBox}>
                                <View style={styles.r1}><Text style={styles.Notetext}>Computation Operation</Text></View>
                                <View style={styles.right}>
                                    <TouchableOpacity>
                                        <Icon name="angle-right" size={25} onPress={() => this.onclickstart()} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onclickstart()} >
                            <View style={styles.rightBox}>
                                <View style={styles.r1}><Text style={styles.Notetext}>Fractions and Decimals</Text></View>
                                <View style={styles.right}>
                                    <TouchableOpacity>
                                        <Icon name="angle-right" size={20} onPress={() => this.onclickstart()} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onclickstart()} >
                            <View style={styles.rightBox}>
                                <View style={styles.r1}><Text style={styles.Notetext}>Measurements</Text></View>
                                <View style={styles.right}>
                                    <TouchableOpacity>
                                        <Icon name="angle-right" size={20} onPress={() => this.onclickstart()} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onclickstart()} >
                            <View style={styles.rightBox}>
                                <View style={styles.r1}><Text style={styles.Notetext}>Angles</Text></View>
                                <View style={styles.right}>
                                    <TouchableOpacity>
                                        <Icon name="angle-right" size={20} onPress={() => this.onclickstart()} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

class AnalysisScreen extends React.Component {
    onclickstart = () => {
        Actions.mainquiz()
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.note}>
                        <Text style={styles.NotetextHeader}>Progress in Practice</Text>
                        <View style={styles.rightBox}>
                            <View style={{ width: 120 }}><Text style={styles.Notetext}>Progress</Text></View>
                            <View style={{ marginRight: 300, height: 20, marginTop: 12 }}>
                                <Progress.Bar progress={0.1} width={200} />
                            </View>
                        </View>
                        <View style={styles.rightBox}>
                            <View style={{ width: 120 }}><Text style={styles.Notetext}>Accuracy</Text></View>
                            <View style={{ marginRight: 300, height: 20, marginTop: 12 }}>
                                <Progress.Bar progress={0.4} width={200} color={'green'} />
                            </View>
                        </View>
                        <Text style={styles.NotetextHeader}>Chapters Breakdown</Text>
                        <View style={styles.rightBox}>
                            <View>

                                <PieChart
                                    data={[
                                        {
                                            name: 'Completed',
                                            chapters: 6,
                                            color: '#008000',
                                            legendFontColor: '#7F7F7F',
                                            legendFontSize: 15,
                                        },
                                        {
                                            name: 'Ongoing',
                                            chapters: 18,
                                            color: '#0088dc',
                                            legendFontColor: '#7F7F7F',
                                            legendFontSize: 15,
                                        },
                                        {
                                            name: 'Not Started',
                                            chapters: 35,
                                            color: '#dfdfdf',
                                            legendFontColor: '#7F7F7F',
                                            legendFontSize: 15,
                                        },
                                    ]}
                                    width={Dimensions.get('window').width - 16}
                                    height={220}
                                    chartConfig={{
                                        backgroundColor: '#1cc910',
                                        backgroundGradientFrom: '#eff3ff',
                                        backgroundGradientTo: '#efefef',
                                        decimalPlaces: 2,
                                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                        style: {
                                            borderRadius: 16,
                                        },
                                    }}
                                    style={{
                                        marginVertical: 8,
                                        borderRadius: 16,
                                    }}
                                    accessor="chapters"
                                    backgroundColor="transparent"
                                    paddingLeft="15"
                                    absolute //for the absolute number remove if you want percentage
                                />
                            </View>

                        </View>
                        <Text style={styles.NotetextHeader}>Questions Breakdown</Text>
                        <View style={styles.rightBox}>
                            <View>

                                <PieChart
                                    data={[
                                        {
                                            name: 'Correct',
                                            questions: 56,
                                            color: '#03bb85',
                                            legendFontColor: '#7F7F7F',
                                            legendFontSize: 15,
                                        },
                                        {
                                            name: 'Incorrect',
                                            questions: 70,
                                            color: '#fc447a',
                                            legendFontColor: '#7F7F7F',
                                            legendFontSize: 15,
                                        },
                                        {
                                            name: 'Skipped',
                                            questions: 90,
                                            color: '#dfdfdf',
                                            legendFontColor: '#7F7F7F',
                                            legendFontSize: 15,
                                        },
                                    ]}
                                    width={Dimensions.get('window').width - 16}
                                    height={220}
                                    chartConfig={{
                                        backgroundColor: '#1cc910',
                                        backgroundGradientFrom: '#eff3ff',
                                        backgroundGradientTo: '#efefef',
                                        decimalPlaces: 2,
                                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                        style: {
                                            borderRadius: 16,
                                        },
                                    }}
                                    style={{
                                        marginVertical: 8,
                                        borderRadius: 16,
                                    }}
                                    accessor="questions"
                                    backgroundColor="transparent"
                                    paddingLeft="15"
                                    absolute //for the absolute number remove if you want percentage
                                />
                            </View>
                        </View>
                        <Text style={styles.NotetextHeader}>Time Breakdown</Text>
                        <View style={styles.rightBox}>
                            <View>

                                <PieChart
                                    data={[
                                        {
                                            name: 'Correct',
                                            time: 26,
                                            color: '#7CFC00',
                                            legendFontColor: '#7F7F7F',
                                            legendFontSize: 15,
                                        },
                                        {
                                            name: 'Incorrect',
                                            time: 56,
                                            color: 'rgba(131, 167, 234, 1)',
                                            legendFontColor: '#7F7F7F',
                                            legendFontSize: 15,
                                        },
                                        {
                                            name: 'Skipped',
                                            time: 80,
                                            color: '#dfdfdf',
                                            legendFontColor: '#7F7F7F',
                                            legendFontSize: 15,
                                        },
                                    ]}
                                    width={Dimensions.get('window').width - 16}
                                    height={220}
                                    chartConfig={{
                                        backgroundColor: '#1cc910',
                                        backgroundGradientFrom: '#eff3ff',
                                        backgroundGradientTo: '#efefef',
                                        decimalPlaces: 2,
                                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                        style: {
                                            borderRadius: 16,
                                        },
                                    }}
                                    style={{
                                        marginVertical: 8,
                                        borderRadius: 16,
                                    }}
                                    accessor="time"
                                    backgroundColor="transparent"
                                    paddingLeft="15"
                                    absolute //for the absolute number remove if you want percentage
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
class SavedQuestionsScreen extends React.Component {
    onclickstart = () => {
        Actions.mainquiz()
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.note}>
                        <Text style={styles.NotetextHeader}>Practice Questions</Text>
                        <TouchableOpacity>
                            <View style={styles.rightBox}>
                                <View style={styles.r1}><Text style={styles.Notetext}>Number Sense</Text></View>
                                <View style={styles.right}>
                                    <TouchableOpacity>
                                        <Icon name="angle-right" size={20} onPress={() => this.onclickstart()} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.rightBox}>
                                <View style={styles.r1}><Text style={styles.Notetext}>Computation Operation</Text></View>
                                <View style={styles.right}>
                                    <TouchableOpacity>
                                        <Icon name="angle-right" size={20} onPress={() => this.onclickstart()} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.NotetextHeader}>Quiz</Text>
                        <TouchableOpacity>
                            <View style={styles.rightBox}>
                                <View style={styles.r1}><Text style={styles.Notetext}>Roman Numbers</Text></View>
                                <View style={styles.right}>
                                    <TouchableOpacity>
                                        <Icon name="angle-right" size={20} onPress={() => this.onclickstart()} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.rightBox}>
                                <View style={styles.r1}><Text style={styles.Notetext}>Multiplications</Text></View>
                                <View style={styles.right}>
                                    <TouchableOpacity>
                                        <Icon name="angle-right" size={20} onPress={() => this.onclickstart()} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.NotetextHeader}>MockTests</Text>
                        <TouchableOpacity>
                            <View style={styles.rightBox}>
                                <View style={styles.r1}><Text style={styles.Notetext}>SOF Olympaid - 2018</Text></View>
                                <View style={styles.right}>
                                    <TouchableOpacity>
                                        <Icon name="angle-right" size={20} onPress={() => this.onclickstart()} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.rightBox}>
                                <View style={styles.r1}><Text style={styles.Notetext}>Measurements</Text></View>
                                <View style={styles.right}>
                                    <TouchableOpacity>
                                        <Icon name="angle-right" size={20} onPress={() => this.onclickstart()} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.NotetextHeader}>Live Test</Text>
                        <TouchableOpacity>
                            <View style={styles.rightBox}>
                                <View style={styles.r1}><Text style={styles.Notetext}>Number Sence - Test 6</Text></View>
                                <View style={styles.right}>
                                    <TouchableOpacity>
                                        <Icon name="angle-right" size={20} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const TabNavigator = createMaterialTopTabNavigator({
    Practice: PracticeScreen,
    Analysis: AnalysisScreen,
    Saved_Questions: SavedQuestionsScreen,
},
    {
        tabBarOptions: {
            scrollEnabled: true,
            labelStyle: {
                fontSize: 10,
                color: 'black'
            },

            tabStyle: {
                width: 130,
            },
            indicatorStyle: {
                backgroundColor: 'black'
            },
            style: {
                borderColor: 'black',
                height: 50,
                backgroundColor: 'white',
                indicatorStyle: '',
                renderIndicator: true,
            },
        }
    }
);

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: 'white'
    },
    header: {
        height: 40,
        backgroundColor: 'white',
        marginTop: 10,
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: "lightblue",

    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        width: "100%"
    },
    note: {
        position: "relative",
        padding: 0,

        borderBottomWidth: 2,
        borderBottomColor: "#ededed",
        marginBottom: 30,
        display: "flex",
        width: '100%',
    },
    Notetext: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
    },
    NotetextHeader: {
        paddingLeft: 20,
        paddingTop: 13,
        paddingBottom: 13,
        backgroundColor: "lightgray",
        width: '100%',
        fontSize: 16,
    },
    notePush: {
        position: "absolute",

        top: 10,
        bottom: 10,
        right: 10,
        marginRight: 30
    },
    notePushText: {
        color: "black"
    },

    icons: {
        flexDirection: "row",
        paddingRight: 25,
        marginTop: 8,
        marginLeft: 210,
        marginBottom: 50,
    },
    bars: {
        flexDirection: "column",
        marginTop: 3,
        marginLeft: 10,
        color: "lightblue"
    },
    center: {
        display: "flex",
        flexDirection: "row"
    },
    picker: {
        position: "absolute",
        top: 1,
        left: 11,
        height: 45,
        width: 220
    },
    statustxt: {
        fontSize: 14,
        color: "#000",
        left: 18,
        fontWeight: "bold"
    },

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
    slide: {
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "lightgray"
    },
    slide1: {
        paddingLeft: 45,
    },
    rightBox: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "lightgray"
    },
    right: {
        marginLeft: '40%',
        height: 20,
    },
    r1: {
        width: 200,
    },
    i1: {
        marginLeft: 6,
    },
    i2: {
        marginLeft: 6,
    },
})
