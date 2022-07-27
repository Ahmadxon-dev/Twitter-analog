import './AppHeader.css'
const AppHeader = ({likes, allposts}) => {
    return(
        <div className='app-header d-flex'>
            <h1>Ahmadxon Abdullayev</h1>
            <h2>{allposts <=1 ? `${allposts} post` : `${allposts} posts`}, { likes <=1 ? `like ${likes}` : `likes ${likes}` }</h2>
        </div>
    )
};
export default AppHeader