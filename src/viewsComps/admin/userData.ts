import { reactive } from "vue";

interface card {
  id: number;
  title: string;
  color: string;
  price: number;
  priceIcon: string;
  total: string;
  totalNum: number;
}

export const cards: card[] = reactive([
  {
    id: 1,
    title: "国家A",
    color: "#f50",
    price: 12313,
    priceIcon: "fa-solid fa-hand-holding-dollar",
    total: "总人数",
    totalNum: 56735,
  },
  {
    id: 2,
    title: "国家C",
    color: "#2db7f5",
    price: 82911,
    priceIcon: "fa-solid fa-dollar-sign",
    total: "总人数",
    totalNum: 96792,
  },
  {
    id: 3,
    title: "国家B",
    color: "#87d068",
    price: 67919,
    priceIcon: "fa-brands fa-ethereum",
    total: "总人数",
    totalNum: 56679,
  },
  {
    id: 4,
    title: "国家D",
    color: "#108ee9",
    price: 16793,
    priceIcon: "fa-solid fa-yen-sign",
    total: "总人数",
    totalNum: 6795,
  },
]);

export const echartsA = {
  title: {
    text: "商品销售",
  },
  tooltip: {},
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

// export const echartsA = {
//   tooltip: {
//     trigger: "axis",
//     axisPointer: {
//       lineStyle: {
//         width: 1,
//         color: "#019680",
//       },
//     },
//   },
//   xAxis: {
//     type: "category",
//     boundaryGap: false,
//     data: [
//       "6:00",
//       "7:00",
//       "8:00",
//       "9:00",
//       "10:00",
//       "11:00",
//       "12:00",
//       "13:00",
//       "14:00",
//       "15:00",
//       "16:00",
//       "17:00",
//       "18:00",
//       "19:00",
//       "20:00",
//       "21:00",
//       "22:00",
//       "23:00",
//     ],
//     splitLine: {
//       show: true,
//       lineStyle: {
//         width: 1,
//         type: "solid",
//         color: "rgba(226,226,226,0.5)",
//       },
//     },
//     axisTick: {
//       show: false,
//     },
//   },
//   yAxis: [
//     {
//       type: "value",
//       max: 80000,
//       splitNumber: 4,
//       axisTick: {
//         show: false,
//       },
//       splitArea: {
//         show: true,
//         areaStyle: {
//           color: ["rgba(255,255,255,0.2)", "rgba(226,226,226,0.2)"],
//         },
//       },
//     },
//   ],
//   grid: { left: "1%", right: "1%", top: "2  %", bottom: 0, containLabel: true },
//   series: [
//     {
//       smooth: true,
//       data: [
//         111, 222, 4000, 18000, 33333, 55555, 66666, 33333, 14000, 36000, 66666, 44444, 22222, 11111, 4000, 2000, 500, 333, 222,
//         111,
//       ],
//       type: "line",
//       areaStyle: {},
//       itemStyle: {
//         color: "#5ab1ef",
//       },
//     },
//     {
//       smooth: true,
//       data: [33, 66, 88, 333, 3333, 5000, 18000, 3000, 1200, 13000, 22000, 11000, 2221, 1201, 390, 198, 60, 30, 22, 11],
//       type: "line",
//       areaStyle: {},
//       itemStyle: {
//         color: "#019680",
//       },
//     },
//   ],
// };

export const echartsB = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};

export const echartsC = {
  title: {
    text: "日温差",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {},

  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value} °C",
    },
  },
  series: [
    {
      name: "Highest",
      type: "line",
      data: [10, 11, 13, 11, 12, 12, 9],
      markPoint: {
        data: [
          { type: "max", name: "Max" },
          { type: "min", name: "Min" },
        ],
      },
      markLine: {
        data: [{ type: "average", name: "Avg" }],
      },
      smooth: true,
    },
    {
      name: "Lowest",
      type: "line",
      data: [1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
      },
      markLine: {
        data: [
          { type: "average", name: "Avg" },
          [
            {
              symbol: "none",
              x: "90%",
              yAxis: "max",
            },
            {
              symbol: "circle",
              label: {
                position: "start",
                formatter: "Max",
              },
              type: "max",
              name: "最高点",
            },
          ],
        ],
      },
      smooth: true,
    },
  ],
};
