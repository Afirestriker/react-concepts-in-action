import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            title: "",
            body: "",
        };
    }

    changeHandler = (eve) => {
        const name = eve.target.name;
        const value = eve.target.value;

        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    submitHandler = (eve) => {
        eve.preventDefault();

        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
            .then((response) => {
                if (response.status == 201) {
                    console.log(response);
                    alert("Form Submitted. Check response in console");
                    this.setState({userId: '', title: '', body: ''});
                }
                else alert("Form not submitted");
            })
            .catch((error) => {
                alert("Some error catch in submitting the form");
            });
    };

    render() {
        const { userId, title, body } = this.state;

        return (
            <div>
                <strong>Post Form</strong>

                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>User: </label>
                        <input
                            type="number"
                            name="userId"
                            value={userId}
                            placeholder="User Id"
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <label>Title: </label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            placeholder="Title here"
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <label>Description: </label>
                        <input
                            type="text"
                            name="body"
                            value={body}
                            placeholder="Description here"
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;
