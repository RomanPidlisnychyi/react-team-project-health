import React from 'react';
import DairyCommon from '../components/Dairy/DairyCommon/DairyCommon';
import Layout from '../components/Layout/Layout';
import RationItemsList from '../components/RationItemsList/RationItemsList';

export default function DiaryView() {
  return (
    <Layout>
      <DairyCommon />
      <RationItemsList />
    </Layout>
  );
}
