import { arrangerApiRoot } from 'common/injectGlobals';

import { apiInitialized } from './api';

export const getGenomicSuggestions = async (searchText) =>
  await apiInitialized({
    url: `${arrangerApiRoot}genomicFeature/suggestions/${searchText}`,
    method: 'GET',
  });
