import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/app';
import { getAwsData } from '../redux/actions/aws'

const mapStateToProps = (state, ownProps) => {
   console.log(state)
  return {
    home: state.home,
    aws: state.aws
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  //return bindActionCreators({}, dispatch)
  getAwsData: () => dispatch(getAwsData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// const mapStateToProps = (state) => {
//   return state.user;
// }
// const mapDispatchToProps = (dispatch) => ({
//   fetchUsers: () => dispatch(fetchUsers())
// });