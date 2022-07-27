import './PostListItem.css'
import React from "react";

export default class PostListItem extends React.Component {
    render(props) {

        let className = 'app-list-item d-flex justify-content-between';
        if (this.props.important) {
            className += ' important'
        }
        if (this.props.like) {
            className += ' like'
        }
        return (
            <div className={className}>
                <span className='app-list-item-label' onClick={this.props.onToggleLiked}>{this.props.label}</span>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={this.props.onToggleImportant} type='button' className='btn-star btn-sm'>
                        <i className="fa fa-star"></i>
                    </button>
                    <button onClick={this.props.onDelete} type='button' className='btn-trash btn-sm'>
                        <i className="fa fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        );
    }
}


//Funksiyali
// const PostListItem = ({label, important}) => {
//     let className ='app-list-item d-flex justify-content-between';
//     if (important){
//         className+=' important'
//     }

//     return (
//         <div className={className}>
//             <span className='app-list-item-label'>
//                 {label}
//             </span>
//             <div className="d-flex justify-content-center align-items-center">
//                 <button  type='button' className='btn-star btn-sm'>
//                     <i className="fa fa-star"></i>
//                 </button>
//                 <button type='button' className='btn-trash btn-sm'>
//                     <i className="fa fa-trash"></i>
//                 </button>
//                 <i className="fa fa-heart"></i>
//             </div>
//         </div>
//     )
// };
// export default PostListItem