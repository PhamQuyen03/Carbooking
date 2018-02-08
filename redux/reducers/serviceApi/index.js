/**
 * @providesModule WeFit.Redux.Reducers.ServiceApi
 */

// import { Logger } from '@onaclover/react-native-utils';
import _ from 'lodash';

// Constants
import { PREFIXES, SERVICE_API } from '../../type';

// Locals
// import paginatedTabDataReducer from './paginatedTabDataReducer';
import plainDataReducer from './plainDataReducer';
// import requestStatusReducer from './requestStatusReducer';
import singleTabDataReducer from './singleTabDataReducer';

const DEFAULT_REQUEST_STATUS = { error: undefined, loading: false, progress: 0 };
const DEFAULT_ARRAY_DATA = { data: [], hasMore: false, ...DEFAULT_REQUEST_STATUS };
// const DEFAULT_OBJECT_DATA = { data: undefined, ...DEFAULT_REQUEST_STATUS };

// function defaultTabsData(contentData) {
//   return _.zipObject(_.range(WEEKDAY_TABS_COUNT), Array(WEEKDAY_TABS_COUNT).fill(contentData));
// }

const DEFAULT_STATES = {
  articleCategories: DEFAULT_ARRAY_DATA,
};

export default function serviceApiReducer(state = DEFAULT_STATES, action) {
  const { type } = action;
  if (_.startsWith(type, SERVICE_API.GET_STUDIOS_MAP)) {
    return singleTabDataReducer(state, action);
  }
  if (type === SERVICE_API.RESET_AVATAR_UPLOAD) {
    return { ...state, avatarUpload: DEFAULT_REQUEST_STATUS };
  }
  if (_.startsWith(type, PREFIXES.SERVICE_API)) {
    return plainDataReducer(state, action);
  }
  return state;
}
