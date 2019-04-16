import React from 'react';

class Genres extends React.Component {
    constructor() {
        super();

    }

    render() {
        const {
            genre,
            click
        } = this.props;

        return (
            <div className="genre" onClick={ click }>
                {genre}
            </div>
        );
    }
}

export default Genres;
