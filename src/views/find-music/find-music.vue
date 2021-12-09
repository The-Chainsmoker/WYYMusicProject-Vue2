<template>
  <div class="find-music">
    <div class="top-nav-bar">
      <div
        v-for="(item, index) in mvType"
        :key="index"
        @click="itemClick(index)"
        class="nav-bar"
        :class="currentIndex === index ? 'active' : ''"
      >
        {{ item }}
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "FindMusic",
  data() {
    return {
      mvType:['最新MV','相似MV','推荐MV','MV排行'],
      currentIndex:0,
    }
  },
  methods: {
    itemClick(index){
            switch (index){
                case 0:
                this.$router.push('/newmv');
                this.currentIndex=index
                break;
                case 1:
                this.$router.push('/similarmv');
                this.currentIndex=index
                break;
                case 2:
                this.$router.push('/recommendmv');
                this.currentIndex=index
                break;
                case 3:
                this.$router.push('/rankmv');
                this.currentIndex=index
                break;
            }
        },
  },
  created() {
        this.itemClick(this.currentIndex)
    },
    activated() {
        this.itemClick(this.currentIndex)
    },
};
</script>

<style scoped>
.top-nav-bar{
    display: flex;
    width: 100%;
    text-align: center;
    color: black;;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
}
.top-nav-bar .nav-bar{
    flex: 1;
}
.top-nav-bar > .active{
    color: black;
    background-color: rgba(202, 202, 202, 0.582);
    font-size: 17px;
    font-weight: 900;
}
</style>