import React, { Component } from 'react'

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            emailaddress: "",
            password: "",
            editor: "",
            message: "",
            terms: false,
            test: ""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }    

    //é executado em todas as teclas para atualizar o estado React, 
    //o valor exibido será atualizado conforme o usuário digita.
    handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {        
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <section>
                <h2 className="title">Contact</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="fullname" value={this.state.fullname} onChange={this.handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="emailaddress" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" value={this.state.message} onChange={this.handleChange} />
                    </label>
                    <label>
                        Pick your favorite La Croix flavor:
                        <select value={this.state.editor} name="editor" onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <label className="checkbox">
                        <input
                            name="terms"
                            type="checkbox"
                            checked={this.state.terms}
                            onChange={this.handleChange}
                        />
                        I agree to the <a href="https://google.com">terms and conditions</a>
                    </label>

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
                    <input type="submit" value="Submit" />
                </form>
            </section>            
        )
    }
}

export default ContactForm   