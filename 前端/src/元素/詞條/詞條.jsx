
import React from 'react';
import Transmit from 'react-transmit';
import {Link} from 'react-router';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';

var debug = Debug('kaxabu:詞條');

class 詞條 extends React.Component {

  componentWillMount () { this.props.setQueryParams(this.props); }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params === this.props.params) return;
    this.props.setQueryParams(nextProps);
  }

  render () {
    let {資料} = this.props

    return (
        <tr>
            <td>{資料.語詞編號}</td>
            <td>{資料.噶哈巫語教材標記法}</td>
            <td>{資料.噶哈巫語潘永歷標記法}</td>
            <td>{資料.中文譯解}</td>
            <td>{資料.臺語譯解}</td>
            <td>{資料.備註}</td>
            <td>{資料.出處}</td>
        </tr>
      );
  }
}

export default Transmit.createContainer(詞條, {
  queries: {
  },
});
