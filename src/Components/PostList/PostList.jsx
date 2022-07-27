import PostListItem from "../PostListItem";
import './PostList.css'

const PostList = ({data, onDelete, onToggleImportant, onToggleLiked}) => {
    const elements = data.map(item => {
        const {id, ...idSiz} = item;
        return <li key={id} className='list-group-item'>
            <PostListItem
                // label={item.label}
                // important={item.important}
                {...idSiz}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => onToggleLiked(id)}
            />
        </li>
    });
    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
};
export default PostList