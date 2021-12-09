<template>
  <div class="search">
    <div class="input-text">
      <form action="">
        <input
          type="text"
          v-model="searchValues"
          @focus="cleanDafault"
          size="45px"
        />
        <input type="text" style="display: none" />
      </form>
    </div>
  </div>
</template>
<script>
import { _debounce } from "../../../utils/uctil";
export default {
  name: "Search",
  data() {
    return {
      searchValues: "搜索",
    };
  },
  methods: {
    cleanDafault() {
      this.searchValues = "";
    },
  },

  created() {
    //防抖
    this.$watch(
      "searchValues",
      _debounce((searchValues) => {
        this.$emit("handleSearchValues", searchValues);
      }, 200)
    );
  },
};
</script>

<style scoped>
@import "./search-component.css";
</style>