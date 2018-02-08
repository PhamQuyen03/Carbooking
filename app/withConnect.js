/**
 * @providesModule WeFit.Components.StudioDetail.withConnect
 */

import { connect } from 'react-redux';
import { serviceApi } from '../redux/actions';

function mapStateToProps(state) {
//   const { userData } = state.auth;
//   const {
//     fitnessTypeIndices, fitnessTypes, studioByBrandIndices, studiosByCity,
//   } = state.staticData;
  return { state };
}
function mapDispatchToProps(dispatch) {
    return {
        getArticles: type => dispatch(serviceApi.getArticleCategories(type)),
    };
}

export default function withConnect(WrappedComponent) {
  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}
