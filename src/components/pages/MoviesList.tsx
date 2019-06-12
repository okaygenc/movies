import React from 'react';
import { Watchable } from "../../models";
import TitleBand from "../common/TitleBand";
import MovieCard from "../common/MovieCard";
import Loading from "../common/Loading";
import { fetchData } from "../../actions";
import { connect } from "react-redux";
import { filterByType } from '../../actions/selectors';

interface Props {
    data: Watchable[],
    loading: boolean,
    fetchData: () => any
}

class MoviesList extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchData();
    }

    renderList = () => {
        if (this.props.loading) return <Loading />;
        
        return this.props.data.map(movie => <MovieCard key={movie.title} movie={movie} />);
    };

    render() {
        return (
            <>
                <TitleBand title={'Popular Movies'}/>
                <div className='container'>
                    <div className='row mt-5 mb-5'>
                        {this.renderList()}
                    </div>
                </div>
            </>
        );
    }
}

const mapSateToProps = (state: any) => ({
    data: filterByType(state, "movie"),
    loading: state.watchables.loading
});

const mapDispatchToProps = {
    fetchData
};

export default connect(mapSateToProps, mapDispatchToProps)(MoviesList);