
import React from 'react'
import Face from './Face.jsx'

class Analog extends React.Component {

  render () {
    let { hour, min, sec, secs } = this.props

    let size = 64
    let c = size / 2
    let hn = hour % 12 * 30 + min / 2
    let mn = min * 6 + sec * .1
    let sn = (secs + 1) * 6

    let styles = {
      hour: {
        fill: 'none',
        stroke: 'currentcolor'
      },
      hourInner: {
        strokeWidth: 1
      },
      hourOuter: {
        strokeWidth: 2.5,
        strokeLinecap: 'round'
      },
      min: {
        fill: 'none',
        stroke: 'currentcolor'
      },
      minInner: {
        strokeWidth: 1
      },
      minOuter: {
        strokeWidth: 2.5,
        strokeLinecap: 'round'
      },
      sec: {
        fill: 'none',
        stroke: '#ff4136',
        strokeWidth: .5,
        transform: 'rotate(' + sn + 'deg)',
        transformOrigin: c + 'px ' + c + 'px',
        transitionProperty: 'transform',
        transitionDuration: '1s',
        transitionTimingFunction: 'linear'
      },
      secCircle: {
        fill: '#ff4136'
      }
    }

    return (
      <div>
        <svg viewBox={[0, 0, size, size].join(' ')}>
          <Face size={size} />
          <g
            transform={'rotate(' + hn + ' ' + c + ' ' + c + ')'}
            style={styles.hour}>
            <path
              d={[
                'M', c, c,
                'L', c, c / 2
              ].join(' ')}
              style={styles.hourInner} />
            <path
              d={[
                'M', c, c - 6,
                'L', c, 14
              ].join(' ')}
              style={styles.hourOuter} />
          </g>
          <g
            transform={'rotate(' + mn + ' ' + c + ' ' + c + ')'}
            style={styles.min}>
            <path
              d={[
                'M', c, c,
                'L', c, c / 2
              ].join(' ')}
              style={styles.minInner} />
            <path
              d={[
                'M', c, c - 6,
                'L', c, 5
              ].join(' ')}
              style={styles.minOuter} />
          </g>
          <circle
            cx={c}
            cy={c}
            r={2}
            fill='currentcolor' />
          <path
            d={[
              'M', c, c + 8,
              'L', c, 0
            ].join(' ')}
            style={styles.sec} />
          <circle
            cx={c}
            cy={c}
            r={1.25}
            style={styles.secCircle} />
          <circle
            cx={c}
            cy={c}
            r={.75}
            fill='#000' />
        </svg>
      </div>
    )
  }

}

Analog.propTypes = {
  hour: React.PropTypes.number,
  min: React.PropTypes.number,
  sec: React.PropTypes.number,
}

export default Analog

