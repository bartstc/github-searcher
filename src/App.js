import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from './modules/fetchedRepos/fetchedActions';
import './App.css';

import SearchForm from './components/SearchForm';
import ReposList from './components/ReposList';
import SavedRepos from './components/SavedRepos';

export class App extends Component {
  state = {
    query: '',
    limit: 10
  };

  onFetchRepos = () => this.props.fetchRepos(this.state.query, this.state.limit);

  onChange = e => this.setState({ query: e.target.value });

  render() {
    const { repos } = this.props;

    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid mt-5">
          <div className="container">
            <h1 className="display-4 text-warning">Repo searcher</h1>
            <p className="lead">Enter the topic that interests you.</p>
          </div>
        </div>

        <SearchForm
          onChange={this.onChange}
          fetchRepos={this.onFetchRepos}
        />
        <ReposList repos={repos} />
        <SavedRepos />
      </div>
    );
  }
};

export default connect(({ fetchedRepos }) => ({ repos: fetchedRepos }), { fetchRepos })(App);