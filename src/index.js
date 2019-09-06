import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types'

export default class ButtonSpinner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animation: false,
            disabled: this.props.disabled,
            opacityStyle: this.props.disabled ? this.props.opacityDisabled : this.props.opacity
        }

        // console.log(this.props)
        // console.log(this.props.children)
        // console.log(this.props.children.length)
        // console.log(typeof this.props.children)
    }

    componentDidMount() {

        if (!this.props.pendingRequest) {
            let startTime = setTimeout(() => {
                alert('automaticTimeEnable ' + this.props.children)
                this.setState({
                    disabled: false,
                    opacityStyle: this.props.opacity
                })
                // this.opacityStyle = this.state.disabled ? this.props.opacityDisabled : this.props.opacity;
                clearTimeout(startTime)
            }, this.props.automaticTimeEnable)
        }

    }

    _renderButtonContent() {
        if (typeof this.props.children == 'object') {
            return this.props.children
        }
        return <Text>{this.props.children}</Text>
    }

    _renderIndicator() {
        switch (this.props.typeSpinner) {
            case 'custom':
                return this.props.customSpinnerComponent
            default:
                return (<ActivityIndicator style={this.props.styleSpinner.style} size={this.props.styleSpinner.size} color={this.props.styleSpinner.color} />)

        }
    }


    render() {
        const style = Object.assign({}, this.props.styleButton, this.props.style);
        // console.log(style);
        return (
            <TouchableOpacity
                style={{

                    ...style,

                    opacity: this.state.opacityStyle
                }}
                disabled={this.state.disabled}
                onPress={async () => {

                    console.log('start Loader::"')
                    this.setState({
                        animation: true,
                        disabled: true,
                        opacityStyle: this.props.opacityDisabled
                    })
                    var myfunc = await this.props.onPress();
                    console.log(typeof myfunc)
                    this.setState({
                        animation: false,
                        disabled: false,
                        opacityStyle: this.props.disabled ? this.props.opacityDisabled : this.props.opacity
                    })

                    // this.customOnPress()
                    // console.log(this.props)
                    // console.log(this.props.onPress)
                    // console.log(this.props.onPress.prototype)

                    // console.log(JSON.stringify(this.props.onPress.prototype.toString()))
                    // console.log(this.props.onPress.prototype.valueOf)
                    // this.initLoader();
                    // this.props.onPress.bind(this)();
                }
                }

            >
                {
                    this.state.animation ?
                        this._renderIndicator()
                        :
                        null
                }
                {
                    this._renderButtonContent()
                }

            </TouchableOpacity>
        );
    }

}

ButtonSpinner.propTypes = {
    disabled: PropTypes.bool,
    opacity: PropTypes.number,
    opacityDisabled: PropTypes.number,

    pendingRequest: PropTypes.bool,
    automaticTimeEnable: PropTypes.number,

    style: PropTypes.object,

    styleSpinner: PropTypes.object,
    typeSpinner: PropTypes.string,
    customSpinnerComponent: PropTypes.object
}

ButtonSpinner.defaultProps = {
    disabled: false,
    opacity: 1,
    opacityDisabled: 0.35,

    pendingRequest: true,
    automaticTimeEnable: 0,
    styleButton: {
        alignItems: 'center',

        backgroundColor: 'f5f5f5',
        color: '#dddddd',

        paddingVertical: 10,
        paddingHorizontal: 25,

        margin: 10,

        borderColor: '#c2c2c2',
        borderRadius: 5,
        borderWidth: 1,

        flex: 1,

        flexDirection: 'row',
        justifyContent: 'center',
    },
    styleSpinner: {
        style: {
            marginRight: 15,
        },
        color: '#a6a6a6', //'#dddddd',
        size: 'small', // small | large
    },
    typeSpinner: 'defaut', // defaut | custom
    positionSpinner: 'defaut', // 'left', 'right', 'centered-over-text', 'centered-without-text', 'left-without-left', 'right-without-right', 'above-text', 'below-text'
    customSpinnerComponent: {}

};