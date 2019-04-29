import React from 'react';
import '../app.css';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isComplited: false,
            isImportant: false,
        };
    }

    setComplited = () => {
        this.setState({
            isComplited: !this.state.isComplited
        });
    }
    setPriority = () => {
        this.setState({
            isImportant: !this.state.isImportant
        })
    }
    render() {
        const {isComplited, isImportant} = this.state;

        let classes = 'row justify-content-between align-items-center';

        if (isComplited) {
            classes += ' done';
        }

        return (
            <span className={classes}>
            <div>
                <button 
                    className="btn btn-outline-dark btn-sm"
                    onClick={this.setComplited}
                >
                <i className="fas fa-check"></i></button>
                <span className="col col-sm-10" 
                    style={{color: isImportant ? 'tomato' : 'black',
                            fontWeight: isImportant  ? 'bold' : 'normal'}}
                    >{this.props.content}</span>
            </div>
                
            <div>
                <button 
                    className="btn btn-outline-success"
                    onClick={this.setPriority}
                >
                    <i className="fa fa-exclamation"></i>
                </button>
                <button type="button" className="btn btn-outline-danger">
                    <i className="fa fa-trash"></i>
                </button>
            </div>

            </span>
        )
    }
}

export default TodoListItem;