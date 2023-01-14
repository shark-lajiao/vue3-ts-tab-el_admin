export function getEqChart(dataSource = { data: [], index: "" }) {
  try {
    const { data, index } = dataSource;
    const _groupData = groupBy(data, "sec_name");

    const _legend = _getLegend(Object.keys(_groupData), index);
    const _xAxis = uniq(data.map((v) => v.dt)).sort(
      (a, b) => Date.parse(a) - Date.parse(b)
    );

    const _series = _legend.map((key) => {
      if (key === index) {
        return {
          name: key,
          data: _groupData[key]?.map((v) => {
            return v.eq_wgt;
          }),
          type: "line",
          symbol: "none",
          yAxisIndex: 1,
          normal: {
            itemStyle: {
              color: "#ededed",
            },
          },
          areaStyle: {},
          lineStyle: {
            width: 0,
          },
        };
      } else {
        return {
          name: key,
          data: _groupData[key]?.map((v) => {
            return [v.dt, v.eq_wgt * 100];
          }),
          type: "line",
          symbol: "none",
        };
      }
    });

    const option: EChartOption = {
      title: {
        ...getChartTitleConfig("股票仓位"),
        show: false,
      },
      animation: false,
      tooltip: {
        ...toolTip,
        formatter: (obj) => {
          if (isArray(obj)) {
            return obj
              .map((child: any) => {
                const { marker, value, seriesName } = child;
                let _value = value;
                if (Array.isArray(value)) {
                  _value = value[1];
                }
                if (isNaN(Number(_value))) {
                  return "";
                }

                return `${marker} ${seriesName}：${Number(_value).toFixed(2)}${
                  seriesName.includes(index) ? "" : "%"
                }</br>`;
              })
              .join("");
          }
        },
      },
      grid,
      color: NewColor,
      legend: {
        data: _legend,
        bottom: 15,
        type: "scroll",
      },
      xAxis: {
        ...getBaseXAxisConfig(_xAxis, "category", 30),
      },
      yAxis: [
        {
          ...getBaseYAxisConfig([], "value", 0, {
            name: "股票仓位",
            axisLabel: {
              formatter(value: number) {
                return value.toFixed(0).concat("%");
              },
            },
          }),
        },
        {
          ...getBaseYAxisConfig([], "value", 0, {
            name: "指数点位",
          }),
        },
      ],
      series: _series,
    };
    return option;
  } catch (error) {}
}
