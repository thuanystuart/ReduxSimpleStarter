import React, { PureComponent } from 'react'
import styles from './styles.css'
import classnames from 'classnames'
import PropTypes from 'prop-types'

class TextField extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  render() {
    const { className, children } = this.props

    return (
      <div className={styles.container}>
        <div className={styles['text-field']}>
          <input className={classnames(className, styles.input)} type="text" />
          <label className={styles.label} />
          <div />
        </div>
      </div>
    )
  }
}

export default TextField
