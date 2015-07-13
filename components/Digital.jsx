
import React from 'react'
import { padLeft } from 'lodash'
import LED from './LED.jsx'

class Digital extends React.Component {

  render () {
    let { hour, min, sec, secs } = this.props
    let style = {
      fontWeight: 'bold',
    }


    return (
      <div>
        <div style={style}>{hour % 12}:{padLeft(min, 2, '0')}:{padLeft(sec, 2, '0')} {hour % 12 ? 'pm' : 'am'}</div>
        <pre>{sec} sec / {secs % 60} . {secs} secs / {Math.floor(secs / 60)} elapsed minutes</pre>
        <div style={{ color: 'red' }}>
          <LED number={Math.floor(hour / 10)} />
          <LED number={hour % 10} />
          <LED number={Math.floor(min / 10)} />
          <LED number={min % 10} />
          <LED number={Math.floor(sec / 10)} />
          <LED number={sec % 10} />
        </div>
      </div>
    )
  }

}

export default Digital

