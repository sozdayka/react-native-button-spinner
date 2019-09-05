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

    render() {
        return (
            <TouchableOpacity
                style={{
                   
                    ...this.props.style,

                    opacity: this.state.opacityStyle
                }}
                disabled={this.state.disabled}
                onPress={async() => {

                    console.log('start Loader::"')
                    this.setState({
                        animation: true
                    })
                    var myfunc = await this.props.onPress();
                    console.log(typeof myfunc)
                    this.setState({
                        animation: false
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
                        <ActivityIndicator size="large" color="#0000ff" />
                    :
                        null
                }
                <Text>{this.props.children}</Text>
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

    style: PropTypes.object
}

ButtonSpinner.defaultProps = {
    disabled: false,
    opacity: 1,
    opacityDisabled: 0.75,

    pendingRequest: true,
    automaticTimeEnable: 0,
    style: {
        backgroundColor: 'red',
    }
};