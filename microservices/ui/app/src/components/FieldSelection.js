
import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Plot from './Plot.js';

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
      valueChart: 1,
      valueX: 1,
      valueY: 1,
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
    var xData = this.props.xData;
    var yData = this.props.yData;
    return (
      <div>
        <div style={styles.container}>
          <SelectField
            floatingLabelText="Chart Type"
            value={this.state.valueChart}
            onChange={this.handleChangeChart}
            style={styles.customWidth}
          >
            <MenuItem value={1} primaryText="Scatter Plot" />
            <MenuItem value={2} primaryText="Line Plot" />
            <MenuItem value={3} primaryText="Bar Chart" />
            <MenuItem value={4} primaryText="Area Chart" />
            <MenuItem value={5} primaryText="Pie Chart" />
          </SelectField>
          <SelectField
            floatingLabelText="X Axis"
            value={this.state.valueX}
            onChange={this.handleChangeX}
            style={styles.customWidth}
          >
            <MenuItem value={1} primaryText="Country" />
            <MenuItem value={2} primaryText="Happines Rank" />
            <MenuItem value={3} primaryText="Happiness Score" />
            <MenuItem value={4} primaryText="Whisker High" />
            <MenuItem value={5} primaryText="Whisker Low" />
            <MenuItem value={6} primaryText="Economy...GDP...per Capita" />
            <MenuItem value={7} primaryText="Family" />
            <MenuItem value={8} primaryText="Health...Life expectancy" />
            <MenuItem value={9} primaryText="Freedom" />
            <MenuItem value={10} primaryText="Generosity" />
            <MenuItem value={11} primaryText="Trust...Govt...Corruption" />
            <MenuItem value={12} primaryText="Dystopia Residual" />
          </SelectField>
          <SelectField
            floatingLabelText="Y Axis"
            value={this.state.valueY}
            onChange={this.handleChangeY}
            style={styles.customWidth}
          >
            <MenuItem value={1} primaryText="Country" />
            <MenuItem value={2} primaryText="Happines Rank" />
            <MenuItem value={3} primaryText="Happiness Score" />
            <MenuItem value={4} primaryText="Whisker High" />
            <MenuItem value={5} primaryText="Whisker Low" />
            <MenuItem value={6} primaryText="Economy...GDP...per Capita" />
            <MenuItem value={7} primaryText="Family" />
            <MenuItem value={8} primaryText="Health...Life expectancy" />
            <MenuItem value={9} primaryText="Freedom" />
            <MenuItem value={10} primaryText="Generosity" />
            <MenuItem value={11} primaryText="Trust...Govt...Corruption" />
            <MenuItem value={12} primaryText="Dystopia Residual" />

          </SelectField>
        </div>
        <RaisedButton label="Plot" style={styles.btnStyle} />
        <Plot
          xData={this.props.xData}
          yData={this.props.yData}
          onPlotClick={this.onPlotClick}
          type="scatter"
        />
      </div>
    );
  }
}
