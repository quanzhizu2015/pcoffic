<template>
  <div class="wrap">
    <Header :tabIndex="tabIndex" ref="header" />
    <img class="header" src="/img/banner/cooperateSupport.png" ref="banner"/>
    <div class="subHeader">
     <SubHeader ref="subHeader" :items="items" :isFixed="isFixed" :onClick="goAuchor"/>
    </div>
    <div class="content1" id="support1">
      <img class="img1" src="/img/coolSupport/img1.png" />
      <img class="img2" src="/img/coolSupport/img2.png" />
    </div>
    <div class="content2">
      <img class="img1" src="/img/coolSupport/img3.png" />
    </div>
    <div class="content21" id="support2">
      <img class="img2"  src="/img/coolSupport/img4.png" />
    </div>
    <div class="content3" id="support3">
      <img class="img1" src="/img/coolSupport/img5.png" />
      <div class="content_item">
        <div class="content_top">
          <div class="button_content">
            <img src="/img/coolSupport/icon1.png" />
            <input placeholder="请输入电话号" v-model="user.phone" />
          </div>

          <div class="button_content">
            <img src="/img/coolSupport/icon2.png" />
            <input placeholder="请输入姓名" v-model="user.name" />
          </div>

          <div class="button_content">
            <img src="/img/coolSupport/icon3.png" />
            <input placeholder="请输入城市" v-model="user.city" />
          </div>
        </div>
        <!-- <div class="content_bottom">
          <el-input
            type="textarea"
            :rows="5"
            size="30rem"
            placeholder="您想了解的产品…"
            v-model="user.content"
          >
          </el-input>
        </div> -->
      </div>
      <el-button size="medium" type="primary" @click="subbmit"
        >立即联系</el-button
      >
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "CooperateSupport",
  data() {
    return {
      items: [
        { title: "客户服务", url: "/a", anchorId: "support1" },
        { title: "项目优势", url: "/a", anchorId: "support2" },
        { title: "项目合作", url: "/a", anchorId: "support3" },
      ],
      user: {
        phone: "",
        name: "",
        city: "",
        content: "",
      },
      tabIndex: 2,
      top: 0,
      isFixed:false
    };
  },
  mounted() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    window.addEventListener("scroll", () => {
      let h1 = this.$refs.header.$el.offsetHeight;
      let h2 = this.$refs.banner.offsetHeight;
      this.top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.top >= h1 + h2 ? (this.isFixed = true) : (this.isFixed = false);
    });
  },
  methods: {
    subbmit() {
      if (this.user.phone == "") {
        this.$message.error("请输入手机号");
        return;
      }
      if (
        this.user.phone !== "" &&
        !/^((\+?86)|(\(\+86\)))?1[3456789]\d{9}$/.test(this.user.phone)
      ) {
        this.$message.error("手机号格式不正确");
        return;
      }
      if (this.user.name == "") {
        this.$message.error("请输入姓名");
        return;
      }
      if (this.user.city == "") {
        this.$message.error("请输入城市");
        return;
      }
      this.$message.success("提交成功~");
    },
    goAuchor(item){
            // let id = '#'+item.anchorId
            // let h = this.$refs.subHeader.$el.offsetHeight;
            // if(item.anchorId=='support1'){
            //   h=0
            // }
            // console.log(id)
            // document.querySelector(id).scrollIntoView(true)
            // var auchor=this.$el.querySelector(id)
            // console.log(auchor)
            // console.log(auchor.getBoundingClientRect().top)
            //  document.documentElement.scrollTop = document.body.scrollTop = auchor.offsetTop-h
    }
  },
};
</script>



<style lang="less" scoped>
@import "./cooperateSupport.less";
</style>