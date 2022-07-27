import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../PostStatusFilter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm";
import './App.css'
import React from "react";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'going to learn React Js', like:false, important: false, id: 1},
                {label: 'That is  so good', like:false, important: false, id: 2},
                {label: 'I meet a beak...', like:false, important: false, id: 3},
            ],
            term: '',
            filter: 'all'
        };
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.filterPost = this.filterPost.bind(this);
        this.maxId = 4;
        // this.deleteItem = this.deleteItem.bind(this)
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];
            return {
                data: newArr
            }
        })
    };
    addItem = (body) => {
        const newItem = {
            label: body,
            important:false,
            id: this.maxId++
        };
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{
                data:newArr
            }
        })
    };
    onToggleImportant = (id) =>{
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id ===id);
            // console.log(index)
            const oldItem = data[index];
            // console.log(oldItem);
            const newItem = {...oldItem, important: !oldItem.important};
            // console.log(newItem)
            const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)];

            return {
                data:newArr
            }
        })
    };
    onToggleLiked = (id) =>{
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id ===id);
            // console.log(index)
            const oldItem = data[index];
            // console.log(oldItem);
            const newItem = {...oldItem, like: !oldItem.like};
            // console.log(newItem)
            const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)];

            return {
                data:newArr
            }
        })
    };
    searchPost(items, term){
        if (term.length === 0){
            return items
        }
        return items.filter(item => {
            return item.label.indexOf(term) > -1
        })
    }

    onUpdateSearch(term){
        this.setState({term})
    }
    filterPost(items, filter){
        if (filter === 'like'){
            return items.filter(item => item.like)
        }else{
            return items
        }
    }
    onFilterSelect = (filter) =>{
        this.setState({filter})
    };
    render() {
        const liked = this.state.data.filter(item => item.like).length;
        const allposts = this.state.data.length;

        const visible =this.filterPost(this.searchPost(this.state.data, this.state.term), this.state.filter);
        return (
            <div className='app'>
                <AppHeader likes={liked} allposts={allposts}/>
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter filter={this.state.filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList
                    onDelete={this.deleteItem}
                    data={visible}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}