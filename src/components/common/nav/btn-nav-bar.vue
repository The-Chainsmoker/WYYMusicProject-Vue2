<template>
  <div class="btn-nav-bar">
      <div v-for="(item,index) in findMusictype" :key="index" @click="itemClick(index)"
           class="nav-bar" :class="currentIndex === index? 'active':''">
          {{item}}
      </div>
  </div>
</template>

<script>
export default {
    name:"BtnNavBar",
    data() {
        return {
            currentIndex:0,
            findMusictype:['首页','发现','我的']
        }
    },
    methods: {
        itemClick(index){
            switch (index){
                case 0:
                this.$router.push('/mv');
                this.currentIndex=index
                break;
                case 1:
                this.$router.push('/findmusic');
                this.currentIndex=index
                break;
                case 2:
                this.$router.push('/my');
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
}
</script>

<style scoped>
.btn-nav-bar{
    display: flex;
    width: 100%;
    text-align: center;
    color: black;;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
}
.btn-nav-bar .nav-bar{
    flex: 1;
}
.btn-nav-bar > .active{
    color: black;
    background-color: rgba(204, 204, 204, 0.726);
    font-size: 17px;
    font-weight: 900;
    border-bottom: 3.5px solid black;
}
</style>