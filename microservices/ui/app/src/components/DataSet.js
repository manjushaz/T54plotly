import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FieldSelection from './FieldSelection';

const styles = {
  datasetContainer: {
    margin: 20
  },
  subHeader: {
    fontSize: 20
  }
}

//const API = 'http://127.0.0.1:5000/happiness';
const API = 'https://app.chestnut27.hasura-app.io/happiness';

//const API = 'https://data.chestnut27.hasura-app.io/v1/query';
//const requestOptions = {
//    "method": "POST",
//    "headers": {
//        "Content-Type": "application/json",
//    }
//};

const requestOptions = {
    "method": "GET",
};

//const body = {
//    "type": "select",
//      "args": {
//          "table": "happinessrepo",
//          "columns": [
//            "*"
//          ]
//    }
//};

export default class DataSet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [],
      isLoading: false,
      error: null,
      country: [],
      hRanks: [],
      hScores: [],
      wHighs: [],
      wLows: [],
      ecoGDPPercaps: [],
      familys: [],
      healthLifeExpecs: [],
      freedoms: [],
      generositys: [],
      trustGovCorrups: [],
      dystopiaResids: [],
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
//    requestOptions.body = JSON.stringify(body);

    fetch(API, requestOptions)
    .then(response => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        console.log(response);
        throw new Error('Something went wrong ...');
      }
    })
    .then(data => {
      var list = data;
      var country = [];
      var hRanks = [];
      var hScores = [];
      var wHighs = [];
      var wLows = [];
      var ecoGDPPercaps = [];
      var familys = [];
      var healthLifeExpecs = [];
      var freedoms = [];
      var generositys = [];
      var trustGovCorrups = [];
      var dystopiaResids = [];

      for (var i = 0; i < list.length; i++) {
        country.push(list[i].country);
        hRanks.push(list[i].happy_rank);
        hScores.push(list[i].happy_score);
        wHighs.push(list[i].whisker_high);
        wLows.push(list[i].whisker_low);
        ecoGDPPercaps.push(list[i].eco_gdp_percap);
        familys.push(list[i].family);
        healthLifeExpecs.push(list[i].health_life_expec);
        freedoms.push(list[i].freedom);
        generositys.push(list[i].generosity);
        trustGovCorrups.push(list[i].trust_govt_corrup);
        dystopiaResids.push(list[i].dystopia_residual);
      };
      console.log(country, hRanks, dystopiaResids);
      this.setState({ rows: data,
                      isLoading: false,
                      country: country,
                      hRanks: hRanks,
                      hScores: hScores,
                      wHighs: wHighs,
                      wLows: wLows,
                      ecoGDPPercaps: ecoGDPPercaps,
                      familys: familys,
                      healthLifeExpecs: healthLifeExpecs,
                      freedoms: freedoms,
                      generositys: generositys,
                      trustGovCorrups: trustGovCorrups,
                      dystopiaResids: dystopiaResids})})
    .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { rows, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        <Paper style={styles.datasetContainer} rounded={false} zDepth={1}>

          <Subheader style={styles.subHeader}>World Happines Report</Subheader>
          <Divider />

          <Table showCheckboxes={false} height='200px'>

            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Country</TableHeaderColumn>
                <TableHeaderColumn>Happines Rank</TableHeaderColumn>
                <TableHeaderColumn>Happiness Score</TableHeaderColumn>
                <TableHeaderColumn>Whisker High</TableHeaderColumn>
                <TableHeaderColumn>Whisker Low</TableHeaderColumn>
                <TableHeaderColumn tooltip="Economy.GDP.per Capita">Eco.GDP.perCap</TableHeaderColumn>
                <TableHeaderColumn>Family</TableHeaderColumn>
                <TableHeaderColumn tooltip="Health...Life expectancy">Health.Life expec</TableHeaderColumn>
                <TableHeaderColumn>Freedom</TableHeaderColumn>
                <TableHeaderColumn>Generosity</TableHeaderColumn>
                <TableHeaderColumn tooltip="Trust...Govt...Corruption">Trust.Govt.Corrup</TableHeaderColumn>
                <TableHeaderColumn>Dystopia Residual</TableHeaderColumn>
              </TableRow>
            </TableHeader>

            <TableBody displayRowCheckbox={false}>
              {rows.map(row =>
                <TableRow key={row.happy_rank}>
                  <TableRowColumn>{row.country}</TableRowColumn>
                  <TableRowColumn>{row.happy_rank}</TableRowColumn>
                  <TableRowColumn>{row.happy_score}</TableRowColumn>
                  <TableRowColumn>{row.whisker_high}</TableRowColumn>
                  <TableRowColumn>{row.whisker_low}</TableRowColumn>
                  <TableRowColumn>{row.eco_gdp_percap}</TableRowColumn>
                  <TableRowColumn>{row.family}</TableRowColumn>
                  <TableRowColumn>{row.health_life_expec}</TableRowColumn>
                  <TableRowColumn>{row.freedom}</TableRowColumn>
                  <TableRowColumn>{row.generosity}</TableRowColumn>
                  <TableRowColumn>{row.trust_govt_corrup}</TableRowColumn>
                  <TableRowColumn>{row.dystopia_residual}</TableRowColumn>
                </TableRow>
              )}
            </TableBody>

          </Table>
        </Paper>
        <FieldSelection countryData={this.state.country}
          hRanksData={this.state.hRanks}
          hScoresData={this.state.hScores}
          wHighsData={this.state.wHighs}
          wLowsData={this.state.wLows}
          ecoGDPPercapsData={this.state.ecoGDPPercaps}
          familysData={this.state.familys}
          healthLifeExpecsData={this.state.healthLifeExpecs}
          freedomsData={this.state.freedoms}
          generositysData={this.state.generositys}
          trustGovCorrupsData={this.state.trustGovCorrups}
          dystopiaResidsData={this.state.dystopiaResids}/>
      </div>
    );
  }
}
