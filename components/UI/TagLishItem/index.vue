<template>
  <span class="info-equipment--item">{{item.name}}</span>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style>
.info-equipment--item {
  padding: 8px 20px;
  border: 1px solid #3498db;
  border-radius: 6px;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 0.9em;
  position: relative;
  transition: all 0.2s linear;
  overflow: hidden;
}
.info-equipment--item:not(.readonly):before {
  content: "\e609";
  font-family: "Flat-UI-Pro-Icons";
  position: absolute;
  line-height: 20px;
  vertical-align: middle;
  width: 0;
  opacity: 0;
  right: 8px;
  cursor: pointer;
  transition: all 0.2s linear;
}
.info-equipment--item:not(.readonly):hover {
  padding-left: 10px;
  padding-right: 30px;
}
.info-equipment--item:not(.readonly):hover::before {
  width: 15px;
  opacity: 1;
}
</style>
