<template>
  <div class="mv-detail">
    <div class="content">
      <div class="detail">
        <div class="title"><i class="el-icon-arrow-left"></i>
        <div class="back" @click="clickBack">返回</div>
        <div class="name">{{artistName}}</div>
        </div>
        <div class="video">
          <video
            :src="mvUrl"
            controls
            autoplay="autoplay"
            width="375px"
          ></video>
        </div>
        <div class="mv-artist">
          <img :src="artistImg" alt="" />
          <span v-for="item in artist" :key="item" class="item">{{
            item
          }}</span>
        </div>
        <div class="mv-info">
          <div class="name" v-show="Number(this.$route.params.id)">
            {{ artistName }}
          </div>
          <div class="title" v-show="!Number(this.$route.params.id)">
            {{ title }}
          </div>
          <span class="send">发布：{{ publishTime }}</span>
          <span class="play">播放：{{ playCount }}</span>
        </div>
        <div class="comment">
          <div class="title-comment">评论({{ commentCount }})</div>
          <comment-card v-for="(item,index) in commentInfo" :key="index"
                        :likedCount="item.likedCount" :name="item.user.nickname"
                        :pic="item.user.avatarUrl" :text="item.content" :time="item.time"
                        :uid="item.commentId"  @handleReplyComment="handleReplyComment">

          </comment-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentCard from "../../components/common/recommend-mv/comment-card.vue";
import {
  getMvDetail,
  getMvUrl,
  getMvComment,
  getRecommentMv,
} from "../../network/api";
export default {
  components: { CommentCard },
  name: "MvDetail",
  data() {
    return {
      mvUrl: "",
      commentInfo: [],
      artistImg: "",
      artist: [],
      artistName: "",
      publishTime: "",
      playCount: 0,
      desc: "",
      subCount: 0,
      shareCount: 0,
      commentCount: 0,
      likedCount: 0,
      videoGroup: [],
      isShowDescription: false,
      title: "",
    };
  },
  methods: {
    clickBack() {
      history.back();
    },
    showDescription() {
      this.isShowDescription = !this.isShowDescription;
      console.log(this.isShowDescription);
    },
    async getCommentInfo() {
      this.id = this.$route.params.id;
      let commentInfo = await getMvComment(this.id);
      this.commentInfo = commentInfo.data.comments;
    },
    //获取mv的信息
    async getMvDetailInfo() {
      this.id = this.$route.params.id;
      let { data } = await getMvDel(taithis.id);
      console.log(data);
      let url = await getMvUrl(this.id);
      console.log(url);
      let recommendMvInfo = await getRecommentMv();
      console.log(recommendMvInfo);

      this.artistImg = data.data.cover;
      this.artist = data.data.artists.map(({ name }) => name);
      this.artistName = data.data.name;
      this.publishTime = data.data.publishTime;
      this.playCount = data.data.playCount;
      this.desc = data.data.desc;
      this.subCount = data.data.subCount;
      this.shareCount = data.data.shareCount;
      this.commentCount = data.data.commentCount;
      this.mvUrl = url.data.data.url;
      this.videoGroup = [];
      this.title = "";
    },
  },
  created() {
    this.getCommentInfo();
    this.getMvDetailInfo();
  },
};
</script>

<style>
@import "./mv-detail.css";
</style>