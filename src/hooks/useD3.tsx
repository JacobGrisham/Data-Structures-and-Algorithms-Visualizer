import { useLayoutEffect, useRef } from 'react';
import * as d3 from 'd3';

export const useD3 = (renderChartFn: any, dependencies: number[]) => {
    const ref: any = useRef();

    useLayoutEffect(() => {
        renderChartFn(d3.select(ref.current));
        return () => {};
      }, dependencies);
    return ref;
}