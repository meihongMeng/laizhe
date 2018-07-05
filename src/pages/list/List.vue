<template>
  <div>
    <!-- <div>{{title}} {{name}}</div> -->
    <div class="mh-listpage">公共的头部</div>
    {{id}}
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  props: ['id']
    /*
  data() {
    return {
      title: "",
      name: ""
    }
  },

  mounted() {
    //获取到list后面的参数
    // console.log(this.$route.params);
    const {name, id} = this.$route.params;
    // this.name = name;
    
    if(id == 1) {
      //请求第一页数据
      this.title = "第一页"
    }
    if(id == 2) {
      //请求第二页数据
      this.title = "第二页"
    }
  },
  //监听路由变化，在url输入可直接更改页面，不建议使用
  // watch: {
  //   '$route'(to, from) {
  //     console.log(to);
  //     console.log(from);
  //     this.name = to.params.name;
  //   }
  // },

  //代替watch，建议使用
  beforeRouteUpdate(to, form, next) {
    this.name = to.params.name;
    next(); //执行之后才能继续走到下一个钩子函数
  }
  */
};
</script>

<style scoped>
.mh-listpage {
    height: 0.88rem;
    line-height: 0.88rem;
    background: #00bcd4;
    color: #fff;
    text-align: center;
    overflow: hidden;
}
</style>
