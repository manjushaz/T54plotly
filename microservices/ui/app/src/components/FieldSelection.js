/* global Plotly:true */

import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import createPlotlyComponent from 'react-plotly.js/factory'

const Plot = createPlotlyComponent(Plotly);

const styles = {
  customWidth: {
    width: 200,
  },
  container: {
    marginLeft: 20,
  },
  btnStyle: {
    marginLeft: 20,
  }
};

export default class FieldSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueChart: 'line',
      valueX: [],
      valueY: [],
    };
    this.handleChangeChart = this.handleChangeChart.bind(this);
    this.handleChangeX = this.handleChangeX.bind(this);
    this.handleChangeY = this.handleChangeY.bind(this);
  };

  handleChangeChart = (event, index, value) => this.setState({valueChart: value});
  handleChangeX = (event, index, value) => this.setState({valueX: value});
  handleChangeY = (event, index, value) => this.setState({valueY: value});

  onPlotClick = (data) => {
    console.log(data.points[0].x);
    console.log(data.points[0].y)
  };

  render() {

    const plotJSON = {
        data: [{
            x: this.state.valueX,
            y: this.state.valueY,
            type: this.state.valueChart,
            marker: {color: '#ab63fa'},
            name: 'Bar'
        }],
        layout: {
            plotBackground: '#f3f6fa',
            margin: {t:0, r: 0, l: 20, b: 30},
        }
    };

    var countryData = this.props.countryData;
    var hRanksData = this.props.hRanksData;
    var hScoresData = this.props.hScoresData;
    var wHighsData = this.props.wHighsData;
    var wLowsData = this.props.wLowsData;
    var ecoGDPPercapsData = this.props.ecoGDPPercapsData;
    var familysData = this.props.familysData;
    var healthLifeExpecsData = this.props.healthLifeExpecsData;
    var freedomsData = this.props.freedomsData;
    var generositysData = this.props.generositysData;
    var trustGovCorrupsData = this.props.trustGovCorrupsData;
    var dystopiaResidsData = this.props.dystopiaResidsData;

    return (
      <div>
        <div style={styles.container}>
          <SelectField
            floatingLabelText="Chart Type"
            value={this.state.valueChart}
            onChange={this.handleChangeChart}
            style={styles.customWidth}
          >
            <MenuItem value={'line'} primaryText="Line Plot" />
            <MenuItem value={'bar'} primaryText="Bar Chart" />
          </SelectField>
          <SelectField
            floatingLabelText="X Axis"
            value={this.state.valueX}
            onChange={this.handleChangeX}
            style={styles.customWidth}
          >
            <MenuItem value={countryData} primaryText="Country" />
            <MenuItem value={hRanksData} primaryText="Happines Rank" />
            <MenuItem value={hScoresData} primaryText="Happiness Score" />
            <MenuItem value={wHighsData} primaryText="Whisker High" />
            <MenuItem value={wLowsData} primaryText="Whisker Low" />
            <MenuItem value={ecoGDPPercapsData} primaryText="Economy...GDP...per Capita" />
            <MenuItem value={familysData} primaryText="Family" />
            <MenuItem value={healthLifeExpecsData} primaryText="Health...Life expectancy" />
            <MenuItem value={freedomsData} primaryText="Freedom" />
            <MenuItem value={generositysData} primaryText="Generosity" />
            <MenuItem value={trustGovCorrupsData} primaryText="Trust...Govt...Corruption" />
            <MenuItem value={dystopiaResidsData} primaryText="Dystopia Residual" />
          </SelectField>
          <SelectField
            floatingLabelText="Y Axis"
            value={this.state.valueY}
            onChange={this.handleChangeY}
            style={styles.customWidth}
          >
            <MenuItem value={countryData} primaryText="Country" />
            <MenuItem value={hRanksData} primaryText="Happines Rank" />
            <MenuItem value={hScoresData} primaryText="Happiness Score" />
            <MenuItem value={wHighsData} primaryText="Whisker High" />
            <MenuItem value={wLowsData} primaryText="Whisker Low" />
            <MenuItem value={ecoGDPPercapsData} primaryText="Economy...GDP...per Capita" />
            <MenuItem value={familysData} primaryText="Family" />
            <MenuItem value={healthLifeExpecsData} primaryText="Health...Life expectancy" />
            <MenuItem value={freedomsData} primaryText="Freedom" />
            <MenuItem value={generositysData} primaryText="Generosity" />
            <MenuItem value={trustGovCorrupsData} primaryText="Trust...Govt...Corruption" />
            <MenuItem value={dystopiaResidsData} primaryText="Dystopia Residual" />
          </SelectField>

        </div>
        <div style={{margin: 50}}>
          <Plot
              data={plotJSON.data}
              layout={plotJSON.layout}
              config={{displayModeBar: false}}
          />
      </div>
      </div>
    );
  }
}
