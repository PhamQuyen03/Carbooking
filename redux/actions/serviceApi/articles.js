/**
 * @providesModule WeFit.Redux.Actions.ServiceApi.Feeds
 */

import { createAction } from 'redux-actions';
// import { Logger } from '@onaclover/react-native-utils';

// Models
// Constants
import { SERVICE_API } from '../../type';

export function getArticleCategories(type) {
  const action = createAction(SERVICE_API.GET_CATEGORIES_CONTENT);
  const dataKey = 'articleCategories';
  return (dispatch, getState) => {
    console.log(getState());
    const request = {
      headers: {
        // Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImI5MTQ2ZWYxZjg0Y2M2YjVkZTk0Y2EyMGJmNDg5ZGQ2ZmY3ZGE2ZTIifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd2VmaXQtZTVmOTkiLCJuYW1lIjoiIiwiYXVkIjoid2VmaXQtZTVmOTkiLCJhdXRoX3RpbWUiOjE1MDQ3NTYwNDMsInVzZXJfaWQiOiJiNWVaNGFXRjVsT0tmMmQ4dUpNRG41YW9oRzkzIiwic3ViIjoiYjVlWjRhV0Y1bE9LZjJkOHVKTURuNWFvaEc5MyIsImlhdCI6MTUwNDc1NjA0MywiZXhwIjoxNTA0NzU5NjQzLCJlbWFpbCI6InF1eWVucHRAd2VmaXQudm4iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicXV5ZW5wdEB3ZWZpdC52biJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.sm5UrDs7UQ1saZsVFxANsFxdMMwwLojeYVEjWeWe3nwYGYmoPemIWhEjYEyykA_aIFFjaivFz0Ne1KJRpkybIfLNp59ou1SKdgnxVV6Uv6CObx3UEFeoL_nVd8tDwRH-zOIn2dJptp7s3pWE7eQ4zQAPJjnj2Y9NQYagjvwvFYz0WPF5WCuwvvvBKjK68BDrDu7FIriF08NDtdhBeX2_dV9sIhpyD9kYLVNUFHsIZzhmNNKFV5sJmnu-BFYoxAsy0pJnI0RFkARufQRSDnZuIzUPXJaMSbaGCtZpUaI-mwKHD6O74X5FOeC8VOCGwtDOpN_RkrAu_JsnYQns8Hk-9A',
        Accept: 'application/json; version=v1',
      },
      transformResponse: ({ result }) => result,
      url: `/terms/${type}`,
    };

    dispatch(action({ dataKey, request }));
  };
}
export const getDataSessionSuccess = () => ({
  type: SERVICE_API.GET_CATEGORIES_CONTENT,
  payload: {
    request: {
      url: '/terms/full-size-articles',
    },
    response: {
      // response object from axios
    },
  
  },
});
