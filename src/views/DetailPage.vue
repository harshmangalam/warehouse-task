<template>
  <div>
    <div v-if="getWarehouse">
      <router-link to="/" class="link-back">Go Back</router-link>
      <div v-if="isEdit">
        <div class="form-container">
          <div class="text">
            <label for="Name"> Name</label>

            <input type="text" v-model="getWarehouse.name" />
          </div>

          <div class="text">
            <label for="City">City</label>
            <input type="text" v-model="getWarehouse.city" />
          </div>
          <div class="text">
            <label for="Cluster">Cluster</label>
            <input type="text" v-model="getWarehouse.cluster" />
          </div>
          <div class="text">
            <label for="Code">Code</label>
            <input type="text" v-model="getWarehouse.code" />
          </div>

          <div class="text">
            <label for="Space Available">Space Available</label>
            <input type="text" v-model="getWarehouse.space_available" />
          </div>

          <div class="text">
            <label for="Type">Type</label>
            <input type="text" v-model="getWarehouse.type" />
          </div>
          <div class="text">
            <input
              type="checkbox"
              id="Registered"
              v-model="getWarehouse.is_registered"
            />
            <label for="Registered">Registered</label>
          </div>

          <div class="text">
            <input type="checkbox" id="Live" v-model="getWarehouse.is_live" />
            <label for="true">Live</label>
          </div>
        </div>
      </div>

      <div v-else class="item-container">
        <DetailCard :getWarehouse="getWarehouse" />
      </div>
    </div>

    <div>
      <div v-if="isEdit">
        <button @click="submitWarehouse" class="submitBtn">
          Submit
        </button>
        <button @click="cancelEdit" class="cancelBtn">
          Cancel
        </button>
      </div>
      <button @click="editWarehouse" v-else class="editBtn">
        Edit
      </button>
    </div>
  </div>
</template>


<script>
import DetailCard from "@/components/DetailCard.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isEdit: false,
      getWarehouse: null
    };
  },
  computed: {
    ...mapGetters(["getWarehouses"])
  },

  mounted() {
    this.getWarehouse = this.getWarehouses.find(
      w => w.id === parseInt(this.$route.params.id)
    );
  },

  components: {
    DetailCard
  },

  methods: {
    editWarehouse() {
      this.isEdit = true;
    },
    submitWarehouse() {
      this.$store.dispatch("editWarehouse", this.getWarehouse);
      this.$router.push("/")
    },
    cancelEdit() {
      this.isEdit = false;
    }
  }
};
</script>

<style scoped>
.link-back {
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 16px;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.text {
  margin-top: 8px;
}

label {
  margin-right: 8px;
  font-size: 16px;
}

input {
  padding: 8px;
}

button {
  margin-top: 16px;
  padding: 8px;
  cursor: pointer;
  border: none;
}
.editBtn {
  padding: 8px;
  font-size: 16px;
  background: chocolate;
  color: blanchedalmond;
  cursor: pointer;

  margin-top: 18px;
  width: 100%;
}

.cancelBtn {
  background: tomato;
  color: #fff;
  margin-left: 16px;
  border: none;
}

.submitBtn {
  background: blue;
  color: #fff;
  margin-left: 16px;
  border: none;
}
</style>