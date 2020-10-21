<template>
  <div class="container">
    <div class="item">ID : {{ getWarehouse.id }}</div>
    <div class="item">Name : {{ getWarehouse.name }}</div>
    <div class="item">City : {{ getWarehouse.city }}</div>
    <div class="item">Cluster : {{ getWarehouse.cluster }}</div>
    <div class="item">Code : {{ getWarehouse.code }}</div>
    <div class="item">Registered : {{ getWarehouse.is_registered }}</div>
    <div class="item">Live : {{ getWarehouse.is_live }}</div>
    <div class="item">Space Available : {{ getWarehouse.space_available }}</div>
    <div class="item">Type : {{ getWarehouse.type }}</div>
  </div>
</template>

<script>
export default {
  props: ["getWarehouse"]
};
</script>

<style scoped>
.container{
  border: 2px solid blueviolet;
  padding: 8px;
}
.item {
  margin-top: 8px;
  padding: 8px;
}


</style>