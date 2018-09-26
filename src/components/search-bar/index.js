import React, { PureComponent } from 'react'
import styles from './styles.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { fetchWeather } from '../../actions'

class SearchBar extends PureComponent {
  state = {
    searchTerm: '',
  }

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value })
  }

  onFormSubmit = event => {
    event.preventDefault()
    this.props.fetchWeather(this.state.searchTerm)
    this.setState({ searchTerm: '' })
  }

  render() {
    const { searchTerm } = this.state

    return (
      <form onSubmit={this.onFormSubmit} className={styles.form}>
        <TextField
          className={styles.input}
          placeholder="Get a five-day forecast in your favorite cities"
          autoFocus={true}
          value={searchTerm}
          onChange={this.onInputChange}
        />
        <Button className={styles.button} type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  fetchWeather,
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar)
