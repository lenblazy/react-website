import {Component} from "react";

class Field extends Component {

    render() {
        return (
            <div className={this.props.divCls}>
                {this.props.elementName === "input" ?
                    <input
                        className="form-control"
                        id={this.props.name}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        data-sb-validations="required,email"
                        value={this.props.value}
                        onChange={e => this.props.onChange(e)}
                    /> :
                    <textarea
                        className="form-control"
                        id={this.props.name}
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        onChange={e => this.props.onChange(e)}
                        data-sb-validations="required"
                    />}


                <div className="invalid-feedback" data-sb-feedback="email:required">An email is
                    required.
                </div>
                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.
                </div>
            </div>
        )
    }
}

export default Field;