import React, { PureComponent } from 'react'
import styles from './styles.css'
import classnames from 'classnames'
import PropTypes from 'prop-types'

class SubmitButton extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  render() {
    const { className, children } = this.props

    return (
      <button
        className={classnames(className, styles.ripple, styles['submit-button'])}
        type="submit"
      >
        {children}
      </button>
    )
  }
}

export default SubmitButton
