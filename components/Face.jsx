
import React from 'react'

class Face extends React.Component {

  render () {
    let { size } = this.props
    let c = size / 2

    let hours = []
    let minutes = []

    for (var i = 0; i < 12; i++) {
      hours.push({
        rotation: i * 30
      })
    }
    for (var i = 0; i < 60; i++) {
      if (i % 5) {
        minutes.push({
          rotation: i * 6
        })
      }
    }

    let styles = {
      hour: {
        fill: 'none',
        stroke: 'currentcolor',
        strokeWidth: 1.5
      },
      minute: {
        fill: 'none',
        stroke: 'currentcolor',
        strokeWidth: .5
      }
    }

    return (
      <g>
        {hours.map(function(hour, i) {
          return (
            <path
              key={i}
              d={[
                'M', c, 0,
                'L', c, 5
              ].join(' ')}
              transform={'rotate(' + hour.rotation + ' ' + c + ' ' + c + ')'}
              style={styles.hour} />
          )
        })}
        {minutes.map(function(minute, i) {
          return (
            <path
              key={i}
              d={[
                'M', c, 0,
                'L', c, 3
              ].join(' ')}
              transform={'rotate(' + minute.rotation + ' ' + c + ' ' + c + ')'}
              style={styles.minute} />
          )
        })}
      </g>
    )
  }

}

export default Face

