import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";



export default class Mianquiz extends Component {
    constructor() {
        super();
        this.state = {
            selected_option: "",
            activeQuestion: 0,
            selected_quiz: [],
            marked_quiz: [],
            upperIndex: 0,
            lowerIndex: 0,
            color: false,
            circlecolor: false,
            array: [],
            quizval: 0,
            view: 0,
        };
    }
    componentDidMount = () => {
        fetch('http://192.168.0.105:1337/quizzes')
            .then(response => response.json())
            .then(data => {
                let original_data = data
                for (let index = 0; index < data.length; index++) {
                    let option = []
                    for (let opt in data[index]['options']) {
                        option.push(data[index]['options'][opt])
                    }
                    original_data[index]['options'] = option
                }
                this.setState({ array: original_data })
            })
            .catch(err => {
                console.log("inside error");
                console.log(err);
            })
    }

    backscreen = () => {
        Actions.practise();
    };
    submitonclick = () => {
        Actions.quizresults({ output: this.state.selected_quiz, marked: this.state.marked_quiz });
    };
    circleclick = (data, index) => {
        this.setState({ upperIndex: index, selected_option: '', color: false })
    }
    optionvalidation = (values, options, optionindex) => {
        let data = {
            'question': values.question,
            'answer': options,
            'index': optionindex,
            'correct': values.crct,
            'id': values.id
        }
        this.state.selected_quiz.length = values.num
        var joined = this.state.selected_quiz.concat(data);
        this.setState({ selected_quiz: joined, selected_option: optionindex })
    };
    markedclick = (data, index) => {
        let values = {
            'question': data.question,
            'id': data.id,
            'index': index
        }
        var val = this.state.marked_quiz.concat(values);
        if (this.state.marked_quiz[index] != val[index])
            this.setState({ marked_quiz: val })
        if (this.state.color === false) {

            this.setState({ color: true, })
        }
        else {
            this.setState({ color: false })
        }
    };
    render() {
        return (
            <View style={styles.container}>
                {/* header */}
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="white"
                    translucent={true}
                />
                <View style={styles.header}>
                    <View style={styles.bars}>
                        <Icon
                            name="angle-left"
                            size={30}
                            color={"black"}
                            onPress={() => this.backscreen()}
                        />
                    </View>
                    <View style={styles.bars1}>
                        <Icon name="pause-circle-o" size={35} color={"lightgrey"} />
                    </View>
                    <View>
                        <Text style={styles.statustxt}>timer</Text>
                        <View>
                            <Text style={styles.picker}>Number Sense|5</Text>
                        </View>
                    </View>
                    <View style={styles.btnview}>
                        <Button
                            buttonStyle={styles.btnstyle}
                            title="Submit"
                            titleStyle={styles.btntitle}
                            onPress={() => this.submitonclick()}
                        ></Button>
                    </View>
                    <View style={styles.icons}>
                        <Icon
                            style={styles.iconstyle}
                            name="bars"
                            size={25}
                            color="black"
                        />
                    </View>
                </View>
                {/* body */}
                <View style={styles.numbers}>
                    <ScrollView horizontal={true}>
                        {this.state.array.map((data, index) => {
                            return (
                                < View style={this.state.upperIndex === index ? styles.quizcolor : styles.quizcolor1} key={index} >
                                    <View  >
                                        <TouchableOpacity
                                            onPress={() => this.circleclick(data, index)}
                                        >
                                            <View >
                                                <Text >{index + 1}</Text>
                                            </View>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }
                        )}
                    </ScrollView>
                </View>

                <ScrollView>
                    {this.state.array.map((data, index) => {
                        lowerIndex = index
                        if (lowerIndex === this.state.upperIndex) {
                            return (
                                <View key={index}>
                                    <View style={styles.Questionview} >
                                        <View style={styles.upper}>
                                            <View style={styles.num}>
                                                <TouchableOpacity >
                                                    <Text >{index + 1}</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.timer}>
                                                <Text>Timer</Text>
                                            </View>
                                            <View style={styles.questionicons}>
                                                <Icon name="bookmark-o" size={20} style={this.state.color ? styles.markcolor : styles.markcolor1} onPress={() => this.markedclick(data, index)} />
                                            </View>
                                            <View style={styles.questionicons}>
                                                <Icon name="star-o" size={20} color={"black"} />
                                            </View>
                                            <View style={styles.questionicons}>
                                                <Icon
                                                    name="question-circle-o"
                                                    size={20}
                                                    color={"black"}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.mainquestion}>
                                            <Text style={styles.questiontext}>{data.question}</Text>

                                        </View>
                                    </View>

                                    {data.options.map((values, index) => {
                                        return (
                                            <View key={index} >
                                                <TouchableOpacity style={this.state.selected_option === index ? styles.optionscolor1 : styles.optionscolor} onPress={() => this.optionvalidation(data, values, index)}>
                                                    <Text style={this.state.selected_option === index ? styles.optiontext1 : styles.optiontext}>{values}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })}
                                </View>
                            );
                        }
                    })}
                </ScrollView>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    markcolor: {
        color: 'red'
    },
    markcolor1: {
        color: 'black'
    },
    quizcolor: {
        backgroundColor: 'lightgrey',
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
    quizcolor1: {
        backgroundColor: 'lightblue',
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
    container: {
        flex: 1,
        marginTop: 25,
        width: "100%",
        height: "100%",
        backgroundColor: "lightgrey"
    },

    /*header */
    header: {
        backgroundColor: "white",
        flexDirection: "row",
        display: "flex",
        height: 55,
        width: "100%",
        borderBottomWidth: 1.5,
        borderBottomColor: "lightblue"
    },
    bars: {
        flexDirection: "column",
        justifyContent: "center",

        marginLeft: 10,
        color: "lightblue",
        marginRight: 5
    },
    bars1: {
        flexDirection: "column",
        justifyContent: "center",

        marginLeft: 2,
        color: "lightblue",
        marginRight: 5
    },
    statustxt: {
        marginTop: 2,
        marginLeft: 9,
        fontSize: 14,
        color: "#000",
        fontWeight: "bold"
    },
    picker: {
        width: "275%",
        height: 30,
        fontSize: 16,
        color: "#000",
        fontWeight: "bold"
    },
    icons: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconstyle: {
        marginLeft: 8
    },
    btnstyle: {
        height: 20,
        borderRadius: 5
    },
    btnview: {
        display: "flex",
        justifyContent: "center",
        marginLeft: "20%"
    },

    /*body */
    numbers: {
        backgroundColor: "white",
        width: "100%",
        height: 40,
        display: "flex",
        flexDirection: "row"
    },
    numbercircle: {
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

    Questionview: {
        backgroundColor: "white",
        width: "100%",
        height: 120,
        marginTop: 20
    },
    upper: {
        height: 35,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginBottom: "3%"
    },
    num: {

        marginTop: 12,
        marginLeft: 15
    },
    timer: {
        justifyContent: "center",
        marginRight: "50%",
        marginLeft: "2%"
    },
    questionicons: {
        justifyContent: "center",
        marginRight: "3%"
    },
    mainquestion: {
        width: "100%",
        marginLeft: "2%",
        marginRight: "2%"
    },
    questiontext: {
        fontSize: 15
    },
    optionscolor: {
        width: "94%",
        height: 50,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        marginLeft: "3%",
        marginRight: "3%",
        marginTop: "3%"
    },
    optionscolor1: {
        width: "94%",
        height: 50,
        backgroundColor: "green",
        display: "flex",
        flexDirection: "row",
        marginLeft: "3%",
        marginRight: "3%",
        marginTop: "3%"
    },
    optiontext: {
        marginLeft: "3%",
        marginTop: "4%",
    },
    optiontext1: {
        marginLeft: "3%",
        marginTop: "4%",
        color: "#fff"
    }

});


