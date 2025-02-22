import {Component} from "react";
import log from "eslint-plugin-react/lib/util/log.js";

class Field extends Component {

    render() {
        console.log(this.props);
        return (
            <div className={this.props.divCls}>
                {this.props.elementName === "input" ?
                    <input
                        className="form-control"
                        id={this.props.name}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        required="required"
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    /> :
                    <textarea
                        className="form-control"
                        id={this.props.name}
                        placeholder={this.props.placeholder}
                        required="required"
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />}
                <p className="help-block text-danger">
                    {
                        (this.props.touched && this.props.errors) &&
                        <span>This field is required</span>
                    }
                </p>
            </div>
        )
    }
}

export default Field;