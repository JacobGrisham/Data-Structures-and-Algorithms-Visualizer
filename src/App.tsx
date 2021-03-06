import React, { Fragment } from 'react';
import ControlPanel from './components/ControlPanel';
import BarChart from './components/BarChart';
import Tooltip from './components/Tooltip';
import Table from './components/Table';
import RuntimeCard from './components/RuntimeCard';


export default function App() {
  return (
    <Fragment>
      <ControlPanel></ControlPanel>
      <BarChart></BarChart>
      <Tooltip></Tooltip>
      <Table></Table>
      <RuntimeCard></RuntimeCard>
    </Fragment>
  );
}
