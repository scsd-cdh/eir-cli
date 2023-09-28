<script setup lang="ts">
import { Dropdown, ListGroup, ListGroupItem } from "flowbite-vue";

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
let options = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    text: "Product Trends by Month",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
};
let series = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 92],
  },
];
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <div class="flex pt-8">
      <apexchart
        class="flex border"
        type="line"
        height="350"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
    <dropdown text="Click me" placement="bottom">
      <list-group>
        <list-group-item>Item #1</list-group-item>
        <list-group-item>Item #2</list-group-item>
        <list-group-item>Item #3</list-group-item>
      </list-group>
    </dropdown>
  </div>
</template>
