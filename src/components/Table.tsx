import React from 'react';
import { useD3 } from '../hooks/useD3';
import * as d3 from "d3"

export default function Table() {

  return (
  <div className="container mt-5">
    <div className="row">
      <table className="table table-dark table-responsive">
        <tbody><tr id="data"></tr></tbody>
      </table>
    </div>
  </div>
  )
}