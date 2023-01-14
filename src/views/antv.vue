<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script lang="ts">
import { Scene, PointLayer, Popup } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
let data = [
  {
    j: 110,
    w: 31.847,
    name: "成都",
    t: 40,
    pic: "https://ts3.cn.mm.bing.net/th?id=OIP-C.0DQkAYscBFja9vVfKt5rtQHaKe&w=210&h=297&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    j: 120,
    w: 31.847,
    name: "南京",
    t: 40,
    pic: "https://ts3.cn.mm.bing.net/th?id=OIP-C._CwYur4hTPgdlp6779MlIQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    j: 130,
    w: 31.847,
    name: "北京",
    t: 40,
    pic: "https://ts3.cn.mm.bing.net/th?id=OIP-C.gi6xy9SFY_QdzD9miHZbugHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
];
const scene = new Scene({
  id: "map",
  map: new GaodeMap({
    pitch: 60,
    style: "dark",
    center: [110, 31.847],
    rotation: 0,
    zoom: 4,
  }),
});
scene.on("loaded", () => {
  const pointLayer = new PointLayer({ depth: false })
    .source(data, {
      parser: {
        type: "json",
        x: "j",
        y: "w",
      },
    })
    .shape("cylinder")
    .size("t", function (level) {
      return [1, 1, level * 2 + 20];
    })
    .active(true)
    .color("#006CFF")
    .style({
      opacity: 1,
      opacityLinear: {
        enable: true, // true - false
        dir: "up", // up - down
      },
      lightEnable: false,
    });
  pointLayer.on("mousemove", (e) => {
    console.log(e);

    const popup = new Popup({
      offsets: [0, 0],
      closeButton: false,
    }).setLnglat(e.lngLat).setHTML(`
      <span>用户名:${e.feature.name}</span>
      <img src="${e.feature.pic}" style="width:100px;height:100px;"/>`);
    scene.addPopup(popup);
  });
  scene.addLayer(pointLayer);
});
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

html,
body {
  overflow: hidden;
  margin: 0;
}

#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
