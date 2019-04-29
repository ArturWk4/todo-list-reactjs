import React from 'react';
import ItemFilter from './item-status-filter';

class SearchPanel extends React.Component {
    render() {
        return (
            <div className="row mb-4">
                <input type="text" placeholder="search" className="col col-sm-8 search-panel"/>
                <ItemFilter/>
            </div>
        )
    }
}

export default SearchPanel;