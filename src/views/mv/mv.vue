<template>
  <div class="mv">
    <div class="new-mv">
      <div class="top">
        <i class="el-icon-arrow-left"></i>
        <div class="title">网易云MV</div>
      </div>
      <search-component
        @handleSearchValues="handleSearchValues"
      ></search-component>

      <div class="all-card">
        <mv-card
          v-for="item in MvInfo"
          :key="item.id"
          :id="item.id"
          :pic="item.cover"
          :playcount="item.playCount"
          :singer="item.artists.map(({ name }) => name)"
          :text="item.name"
          class="item"
        ></mv-card>
      </div>
    </div>
  </div>
</template>

<script>
import MvCard from "../../components/common/recommend-mv/mv-card.vue";
import { getCloudSearch } from "../../network/api";
import SearchComponent from "../../components/common/search/search-component.vue";
export default {
  components: { MvCard, SearchComponent },
  name: "MV",
  data() {
    return {
      currentArea: "",
      MvInfo: [],
    };
  },
  methods: {
    async handleSearchValues(v) {
      //处理发出来的搜索关键词 子需要搜索mv的
      const { data } = await getCloudSearch(v, 1004);
      console.log(data);
      this.MvInfo = data.result.mvs;
      this.$store.commit("setMvId", data.result.mvs[0].id);
    },
    
  },
  async created() {
    const { data } = await getCloudSearch("blackpink", 1004);
    this.MvInfo = data.result.mvs;
    this.$store.commit("setMvId", data.result.mvs[0].id);
  },
};
</script>

<style scoped>
@import "./mv.css";
</style>