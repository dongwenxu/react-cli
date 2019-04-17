import { connect } from "react-redux";
import {bindActionCreators} from 'redux'

export default (action) => {
  return connect(
    state => state,
    dispatch => bindActionCreators(action, dispatch)
  )
}