<template>
    <div>
        <div class="yaowen">
            <p>
                要闻
            </p>
        </div>
        <mu-card class="pic">
            <mu-card-media subTitle="阿尔托蕾娅和莫德雷德" subTitleClass="saber">
                <img src="../home/img/saber02.jpg" />
            </mu-card-media>
        </mu-card>
        <div class="importantNews">
            <div class="import-in">
                <p>今日要闻</p>
            </div>
        </div>
        <div class="newsList">
            <mu-list v-for="(item,i) in list" :key="i">
                
                <div class="list">
                    <div class="list-in">
                        <p>
                        {{item.news}}
                        </p>
                        <img src="../home/img/01.png">
                    </div>
                </div>
            </mu-list>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
            
        </div>
    </div>
</template>

<script>
import Vue from "vue"
import axios from 'axios';
Vue.prototype.$axios = axios;
var url="http://localhost:8080/static/data.json"
export default{
data () {
    return {
      list:[],
      loading: false,
      scroller: null
    }
  },
  mounted () {
    this.scroller = this.$el,
    this.loadMore();
  },
  methods: {
    loadMore () {
      this.loading = true
      setTimeout(() => {
          var that = this;
        axios.get(url).then((response)=>{
            that.list=that.list.concat(response.data)
        })
        this.loading=false;
      }, 2000)
    }
  }
}

</script>

<style lang="less" scoped>
body{
    background: #f5f5f5;
    margin-bottom: 0.65rem;
}
.b{
    margin-bottom: 0.65rem;
}
.yaowen{
    height: 0.5rem;
    background: #d50000;
    color: #fff;
    text-align: center;
    line-height: 0.5rem;
    font-size: 0.2rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
}
.yaowen p{
    margin: 0;
}
.pic{
    margin-top: 0.51rem;
}
.importantNews{
    height: 0.7rem;
    padding: 0.1rem;
    background: #fff;
}
.import-in{
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
   
}
.import-in  p{
        margin: 0;
        font-size: 0.2rem;
}
.newsList{
    margin-top: 0.1rem;
    background-color: #fff;
    margin-bottom: 0.65rem;
}
.list{
    height: 0.7rem;
    padding: 0.05rem;
    border-bottom:0.01rem solid #eee;
    .list-in{
        height: 0.6rem;
        background-color: #fff;
        p{
            width: 70%;
            margin: 0;
            text-align: center;
            line-height: 0.6rem;
            float: left;
        }
        img{
            height: 0.6rem;
            float: right;
        }
    }
}
</style>

