<template>
  <div class="container">
    <div class="filter-container">
      <div class="search-text">Search By Name</div>
      <input type="search" class="search-input" v-model="search" />

      <div class="filter-text">Filter by Category</div>
      <div class="filter-select">
        <select v-model="filter" class="select-cat">
          <option value="city">City</option>
          <option value="cluster">Cluster</option>
          <option value="space_available">Space Available</option>
        </select>
        <select v-model="order" class="select-ord">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button :disabled="!filter" @click="resetFilter" class="resetBtn">Reset Filter</button>
      </div>
    </div>
    <ul
      class="lists"
      v-for="warehouse in filteredWarehouses"
      :key="warehouse.id"
    >
      <li class="list-item">
        <router-link :to="`/${warehouse.id}`" class="link">
          {{ warehouse.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { filterData, searchData } from "../utils/filterData";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      search: "",
      filter: "",
      order: "asc"
    };
  },

  computed: {
    ...mapGetters(["getWarehouses"]),

    filteredWarehouses() {
      if (this.search) {
        return searchData(this.getWarehouses, this.search);
      }
      if (this.filter) {
        return filterData(this.getWarehouses, this.filter, this.order);
      }
      return this.getWarehouses;
    }
  },

  methods: {
    resetFilter() {
      this.filter = "";
    }
  }
};
</script>

<style scoped>
.filter-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.filter-select {
  flex-direction: row;
  margin-top: 8px;
}

.filter-text {
  margin-top: 16px;
}

.select-cat {
  margin-top: 16px;
  margin-left: 8px;
  margin-right: 8px;
  padding: 8px;
}

.select-ord {
  margin-top: 16px;
  margin-left: 8px;
  margin-right: 8px;
  padding: 8px;
}

.search-input {
  padding: 8px;
  margin-top: 8px;
}

.lists{
  list-style-type: none;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-item{
  border: 2px solid orchid;
  width: 60%;
  align-items: center;
  padding: 8px;
  transition: 0.7s;
}

.link{
  text-decoration: none;
}

.list-item:hover{
  transform: scale(1.1);
  cursor: pointer;
}


.resetBtn{
  padding: 8px;
  background: tomato;
  color: white;
  border: none;
}
</style>

