import './PostAddForm.css'
import React from "react";

export default class PostAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onValueChange = this.onValueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onValueChange = (e) => {
        this.setState({text: e.target.value})
    };
    onSubmit = (e) => {
        e.preventDefault();//qayta yuklamidi knopka bosilganda
        if (this.state.text === '') {
                const div = document.querySelector('.warning-text')
                div.innerHTML = `<h6 class="text-danger">Please enter the fields</h6>`
                setTimeout(() => {
                    div.innerHTML =``
                }, 3000)
        } else {
            this.props.onAdd(this.state.text);
            this.setState({
                text: ''
            });
        }

    };

    render() {
        return (
            <>
                <div className="warning-text"></div>
                <form className='bottom-panel d-flex' onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder='What are you thinking about'
                        className='form-control new-post-label'
                        onChange={this.onValueChange}
                        value={this.state.text}
                    />
                    <button type='submit' className="btn btn-outline-secondary">Add post</button>
                </form>
            </>
        )
    }
};
