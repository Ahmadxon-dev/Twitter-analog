import React from "react";
class PostStatusFilter  extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        };
        this.buttons =[
            {name: 'all', label: 'All'},
            {name: 'like', label:'Like'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active =this.props.filter === name;
            const clazz =active ? 'btn-info' : 'btn-outline-secondary';
            return(
                <button onClick={() => this.props.onFilterSelect(name)} key={name} type='button' className={`btn ${clazz}`}>
                    {label}
                </button>
            )
        });
        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }

};
export default PostStatusFilter