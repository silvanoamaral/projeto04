import React, { Component } from 'react'

const required = fieldValue => fieldValue ? undefined : "Please enter a value";
const lessThanValue = value => fieldValue =>
  fieldValue < value ? undefined : `Value must be less than ${value}`;

const greaterThanField = (fieldName) => (fieldValue,state) =>
  fieldValue > state[fieldName] ? undefined : `Value must be greater that ${fieldName}`;

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            fullname: '',
            formErrors: {email: '', fullname: ''},
            emailValid: false,
            nameValid: false,
            formValid: false,
            error:{}
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //é executado em todas as teclas para atualizar o estado React, 
    //o valor exibido será atualizado conforme o usuário digita.
    handleChange(event) {
        const target = event.target;
        const fieldValue = target.type === "checkbox" ? target.checked : target.value;
        const fieldName = target.name;
        
        //let statusCopy = Object.assign({}, this.state);
        //statusCopy.form[fieldName] = fieldValue;

        this.setState(
            { [fieldName]: fieldValue },
            () => {
                this.validateField(fieldName, fieldValue) 
            }
        );
    }
    
    validateField (fieldName,fieldValue) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let nameValid = this.state.nameValid;
      
        switch(fieldName) {
          case 'email':
            emailValid = fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'fullname':
            nameValid = fieldValue.length >= 6;
            fieldValidationErrors.fullname = nameValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            nameValid: nameValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.nameValid});
    }

    handleSubmit(event) {        
        event.preventDefault();
        if(this.state.formValid){
            console.log('Formulário com campos validado.',this.state);
        }else{
            console.log('Formulário com erro.',this.state);
        }
    }

    render() {
        return (
            <section>
                <h2 className="title">Contact</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="fullname">Name:</label>
                        <input type="text" name="fullname" value={this.state.fullname} onChange={this.handleChange} />
                        <span className="error-message">{this.state.formErrors.fullname}</span>
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        <span className="error-message">{this.state.formErrors.email}</span>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" value={this.state.message} onChange={this.handleChange} />
                    </div>
                    <div className="field">
                        <label>Pick your favorite La Croix flavor:</label>
                        <select value={this.state.editor} name="editor" onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input
                                name="terms"
                                type="checkbox"
                                checked={this.state.terms}
                                onChange={this.handleChange}
                            />
                            I agree to the <a href="https://google.com">terms and conditions</a>
                        </label>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="label">Do you test your React code?</label>
                            <label className="radio">
                                <input type="radio"
                                    name="test"
                                    onChange={this.handleChange}
                                    value="Yes"
                                    checked={this.state.test === 'Yes'}
                                />
                                Yes
                            </label>
                            <label className="radio">
                                <input type="radio"
                                    name="test"
                                    onChange={this.handleChange}
                                    value="No"
                                    checked={this.state.test === 'No'}
                                />
                                No
                            </label>
                        </div>
                    </div>
                    <div className="field">
                        <input type="submit" value="Submit" className="button" />
                    </div>
                </form>
            </section>            
        )
    }
}

export default ContactForm   