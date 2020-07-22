import React, { Component } from "react";
import SearchBar from '../SearchBar/search-bar';
import Spinner from '../Spinner/spinner';
import SeriesInfo from './series-info';

class Series extends Component {
  state = {
    series: null,
    queryName: '',
    isFetching: false,
    episodes: [],
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isFetching: true })
    fetch(`https://api.tvmaze.com/singlesearch/shows/?q=${this.state.queryName}&embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({ series: json, isFetching: false, queryName: '', episodes: json._embedded.episodes }));

  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ queryName: value })

  };

  render () {
    const { queryName, isFetching, series, episodes } = this.state
    return (
      <div>
        <SearchBar
          queryName={ queryName }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit }
        />
        { isFetching && <Spinner /> }
        { series ? (
          <SeriesInfo
            series={ series }
            episodes={ episodes }
          />
        ) : null }

      </div>
    );
  }
}

export default Series;