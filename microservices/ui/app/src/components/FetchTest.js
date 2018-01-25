import React, { Component } from 'react';

const API = 'https://data.chestnut27.hasura-app.io/v1/query';

const requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer f63982e4dc4cb97093395cb3ccadab6953289a1db940d37d"
    }
};

const body = {
    "type": "select",
    "args": {
        "table": "article",
        "columns": [
            "*"
        ]
    }
};

class FetchTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    requestOptions.body = JSON.stringify(body);

    fetch(API, requestOptions)
    .then(response => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
    .then(data => this.setState({ hits: data, isLoading: false }))
    .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { hits, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        {hits.map(hit =>
          <div key={hit.id}>
            <p>{hit.content}</p>
          </div>
        )}
      </div>
    );
  }
}

export default FetchTest;
