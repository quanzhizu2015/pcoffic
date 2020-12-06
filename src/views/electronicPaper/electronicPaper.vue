<template>
  <div class="wrap">
    <Header :tabIndex="tabIndex" :subIndex="subIndex"  ref="header"/>
    <img class="header" src="/img/banner/electronicPaper.png" ref="banner" />
    <div class="subHeader">
      <SubHeader ref="subHeader" :items="items" :isFixed="isFixed" :onClick="goAuchor"/>
    </div>
    <div class="content1" id="ele1">
      <img class="img1" src="/img/electronicPaper/img1.png" />
      <el-carousel
        style="margin-top: 0.47rem; width: 70%"
        :interval="4000"
        type="card"
        height="4.42rem"
      >
        <el-carousel-item v-for="(item, index) in cards" :key="index">
          <img :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content21"  id="ele2">
         <img class="img2" src="/img/electronicPaper/img2.png" />
    </div>
    
    <div class="content2">
      <img class="img3" src="/img/electronicPaper/img3.png" />
      <img class="img3" src="/img/electronicPaper/img4.png" />
      <img class="img3" src="/img/electronicPaper/img6.png" />
    </div>
    <div class="content3" id="ele3">
      <img class="img3" src="/img/electronicPaper/img7.png" />
      <img class="img3" src="/img/electronicPaper/img8.png" />
      <div class="ele_item">
        <img class="ele_img1" src="/img/electronicPaper/img9.png" />
        <div class="ele_content">
          <img src="/img/electronicPaper/item7.png" />
          <img src="/img/electronicPaper/item8.png" />
          <img src="/img/electronicPaper/item9.png" />
        </div>
    </div>
    </div>
    
    <div class="content4" id="ele4">
      <img class="img1" src="/img/electronicPaper/img10.png" />
      <img class="img2" src="/img/electronicPaper/img11.png" />
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "行业痛点", url: "/a", anchorId: "ele1" },
        { title: "电子阅卷特点", url: "/a", anchorId: "ele2" },
        { title: "电子阅卷介绍", url: "/a", anchorId: "ele3" },
        { title: "使用场景", url: "/a", anchorId: "ele4" },
      ],
      cards: [
        require("../../../public/img/electronicPaper/item1.png"),
        require("../../../public/img/electronicPaper/item2.png"),
        require("../../../public/img/electronicPaper/item3.png"),
        require("../../../public/img/electronicPaper/item4.png"),
        require("../../../public/img/electronicPaper/item5.png"),
      ],
      tabIndex: 1,
      subIndex: "",
      top: 0,
      isFixed:false
    };
  },
  created() {
    this.subIndex = parseInt(this.$route.query.index);
  },
  mounted() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    window.addEventListener("scroll", () => {
      let h1 = this.$refs.header.$el.offsetHeight;
      let h2 = this.$refs.banner.offsetHeight;
      this.top = document.documentElement.scrollTop || document.body.scrollTop ||  window.pageYOffset;
      this.top >= (h1+h2) ? this.isFixed = true : this.isFixed = false;
    });
  },
  methods: {
    goAuchor(item){
      // let id = '#'+item.anchorId
      // let h = this.$refs.subHeader.$el.offsetHeight;
      // if(item.anchorId=='ele1'){
      //         h=0
      // }
      // console.log(id)
      // document.querySelector(id).scrollIntoView(true)
      // var auchor=this.$el.querySelector(id)
      // console.log(auchor)
      // console.log(auchor.getBoundingClientRect().top)
      // document.documentElement.scrollTop = document.body.scrollTop = auchor.offsetTop-h
    }
  },
};
</script>
<style>
.content1 .el-carousel__container .el-carousel__arrow {
  width: .6rem;
  height: .6rem;
}
</style>
<style lang="less" scoped>
@import "./electronicPaper.less";
</style>