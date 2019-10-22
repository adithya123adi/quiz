import React, { Component } from "react";
import {
    View,
} from "react-native";
import { Button } from "react-native-elements";
import { Modal } from 'antd'




export default class Modals extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        };
    }
    showModal = () => {
        this.setState({
            visible: true
        });
    };
    handleOk = () => {
        this.setState({
            visible: false
        });
    };
    handleCancel = () => {
        this.setState({
            visible: false
        });
    };
    render() {
        return (
            <View>

                <Button onPress={() => this.showModal()} title='click here'></Button>

                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                </Modal>
            </View>
        );
    }
}
