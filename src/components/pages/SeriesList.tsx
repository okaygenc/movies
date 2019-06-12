import React from 'react';
import { connect } from "react-redux";
import { fetchData } from "../../actions";
import { filterByType } from "../../actions/selectors";
import TitleBand from "../common/TitleBand";
import MovieCard from "../common/MovieCard";
import Loading from '../common/Loading';
import { Watchable } from '../../models';

interface Props {
    data: Watchable[],
    loading: boolean,
    fetchData: () => any
}

class SeriesList extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchData();
    }

    renderList = () => {
        if (this.props.loading) return <Loading />;
        
        return this.props.data.map(movie => <MovieCard key={movie.title} movie={movie} />);
    };

    render(){
        return(
            <>
                <TitleBand title={'Popular Series'}/>
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
    data: filterByType(state, "series"),
    loading: state.watchables.loading
});

const mapDispatchToProps = {
    fetchData
};

export default connect(mapSateToProps, mapDispatchToProps)(SeriesList);