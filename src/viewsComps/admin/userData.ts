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
