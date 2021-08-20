import React from 'react';
import QueryBuilder from '@ferlab/ui/core/components/QueryBuilder';
import StackLayout from '@ferlab/ui/core/layout/StackLayout';

import history from 'services/history';

import styles from './VariantPageContainer.module.scss';

const VariantPageContainer = () => (
  // Should do something like in StudyPageContainer.tsx

  <StackLayout vertical>
    <QueryBuilder
      className="variant-repo__query-builder"
      cacheKey="variant-repo"
      currentQuery={{}}
      history={history}
      loading={false}
      total={0}
      dictionary={{}}
    />
    <StackLayout vertical className={styles.tableContainer}></StackLayout>
  </StackLayout>
);
export default VariantPageContainer;
