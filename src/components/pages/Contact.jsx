import {Component} from "react";
import Field from "../common/Field.jsx";
import {withFormik} from "formik";
import * as Yup from "yup";

const fields = {
    sections: [
        [
            {name: "name", elementName: "input", type: "text", placeholder: "Your Name*", divCls: "form-group"},
            {name: "email", elementName: "input", type: "email", placeholder: "Your Email*", divCls: "form-group"},
            {name: "phone", elementName: "input", type: "text", placeholder: "Your phone number*", divCls: "form-group mb-md-0"},
        ],
        [
            {name: "message", elementName: "textarea", type: "text", placeholder: "Type your Message*", divCls: "form-group  form-group-textarea mb-md-0"},

        ]

    ]
}


class Contact extends Component {

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>

                    <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={this.props.handleSubmit} >
                        <div className="row align-items-stretch mb-5">
                            {
                                fields.sections.map((section, sectionIndex) => {
                                    return (
                                        <div key={sectionIndex} className="col-md-6">
                                            {section.map((field, index) => {
                                                return <Field
                                                    {...field}
                                                    key={index}
                                                    value={this.props.values[field.name]}
                                                    name={field.name}
                                                    onChange={this.props.handleChange}
                                                    onBlur={this.props.onBlur}
                                                    touched={(this.props.touched[field.name])}
                                                    errors={this.props.errors[field.name]}
                                                />;
                                            })}
                                        </div>
                                    )
                                })
                            }

                        </div>

                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center text-white mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br/>
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>

                        <div className="d-none" id="submitErrorMessage">
                            <div className="text-center text-danger mb-3">Error sending message!</div>
                        </div>
                        <div className="text-center">
                            <button
                                className="btn btn-primary btn-xl text-uppercase"
                                id="submitButton"
                                type="submit">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, "Too short").required('Name is required'),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        phone: Yup.string()
            .min(10, "Too short")
            .max(15, "Too long")
            .required('Phone is required'),
        message: Yup.string()
            .min(10, "Too short")
            .required('Message is required'),
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log(JSON.stringify(values));
        alert("Form submitted!", JSON.stringify(values));
    }
})(Contact);