import React from 'react';
// import DairyCommon from '../components/Dairy/DairyCommon/DairyCommon';
import App from '../components/Dairy/App';
import Layout from '../components/Layout/Layout';
import RationItemsList from '../components/RationItemsList/RationItemsList';

export default function DiaryView() {
  return (
    <Layout>
      <App />
      <RationItemsList />
      
    </Layout>
  );
}
