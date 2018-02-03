import React from 'react';
import Paper from 'material-ui/Paper';

const headStyle = {
  boxSizing: 'border-box',
  width: '100%',
  height: 50,
  position: 'static',
  backgroundColor: '#ab63fa',
  color: 'white',
  textAlign: 'center',
  fontSize: 25,
  paddingTop: 10
}

export default class HeaderArea extends React.Component {
  render() {
    return(
      <div>
        <Paper style={headStyle} rounded={false} zDepth={1}>
          World Happiness Report 2017
        </Paper>
      </div>
    )
  }
}
