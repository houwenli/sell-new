<template>
  <div id="app">
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import header from '##/header/header.vue';
  import Vue from 'vue';

  // 判断环境
  const debug = process.env.NODE_ENV !== 'production';
  const ERR_OK = 0;

  export default {
    name: 'App',
    data () {
      return {
        seller: {}
      };
    },
    components: {
      'v-header': header
    },
    created () {
      const url = debug ? '/api/seller' : '';
      Vue.axios.get(url).then((response) => {
        let resData = response.data;
        if (resData.errno === ERR_OK) {
          this.seller = resData.data;
        }
      });
    }
  };
</script>

<style lang="scss">
  @import "./common/css/index.scss";
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    @include border-1px(rgba(7, 17, 27, 0.1));
    .tab-item {
      flex: 1;
      text-align: center;
      & > a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.active {
          color: rgb(240, 20, 20);
        }
      }
    }
  }
</style>
