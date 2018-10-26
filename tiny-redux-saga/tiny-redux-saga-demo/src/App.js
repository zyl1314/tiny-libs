import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  update = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'FEATCH_LIST'
    })
  }

  clear = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'CLEAR'
    })
  }

  render() {
    const { list } = this.props;
    const { update, clear } = this;
    return (
      <div>
        <ul>
          {
            list.map((item, idx) => <li key={idx}>{item.desc}</li>)
          } 
        </ul>
        <p>
          <button style={{marginRight: "20px"}} onClick={update}>更新</button>
          <button onClick={clear}>清除</button>
        </p>
      </div>
    );
  }
}

export default connect(state => ({
  list: state.list
}))(App);
