import React from 'react';

class ItemFilter extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-outline-secondary">All</button>
                <button className="btn btn-outline-secondary">Active</button>
                <button className="btn btn-outline-secondary">Done</button>
            </div>
        )
    }
}

export default ItemFilter;