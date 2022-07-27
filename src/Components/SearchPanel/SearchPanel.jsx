import './SearchPanel.css'
import React from "react";
class SearchPanel extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            term: ''
        };
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }
    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({
            // term:term
            term
        });
        // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            // agar term: term bo'lsa term ni o'zini yozib qo'ysa bo'ladi yani term bilan term bitta narsa bosa argumentmas imenno bir xil bo'sa term ni o'zini yozsa bo'ladi
        // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        this.props.onUpdateSearch(term)
    }
    render() {
        return (
            <input
                type="text"
                className='form-control search-input'
                placeholder='Search by posts'
                onChange={this.onUpdateSearch}
            />
        )
    }
}
export default SearchPanel