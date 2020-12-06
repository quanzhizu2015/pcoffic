<template>
    <div class="wrap">
        <Header :tabIndex="tabIndex" :subIndex="subIndex" ref="header"/>
        <img class="header" src="/img/banner/smartSchool.png" ref="banner">
        <div class="subHeader">
             <SubHeader ref="subHeader" :items="items" :isFixed="isFixed" :onClick="goAuchor"/>
        </div>
        <div class="content1" id="smart1">
                <img class="img1" src="/img/smartSchool/img1.png">
                </div>
                <div class="content4" id="smart2">
                    <img class="img2" src="/img/smartSchool/img2.png">
                </div>
                <div class="content2" id="smart3">
                     <img class="img3" src="/img/smartSchool/img3.png">
                    <div class="sub_content2">
                        <div class="item">
                            <img src="/img/smartSchool/item1.png">
                            <img src="/img/smartSchool/item2.png">
                        </div>
                        <div class="item">
                            <img src="/img/smartSchool/item3.png">
                            <img src="/img/smartSchool/item4.png">
                        </div>
                        <div class="item">
                            <img src="/img/smartSchool/item5.png">
                            <img src="/img/smartSchool/item6.png">
                        </div>
                       
                    </div>

                </div>
                <div class="content3" id="smart4">
                    <img src="/img/smartSchool/img4.png">
                </div>
        <div>
            <Footer/>
        </div>         
    </div>
</template>
<script>
export default {
    data(){
        return{
            items:[
                {title:'学生成长记录员',url:'/a',anchorId:"smart1"},
                {title:'学生学习智能助理',url:'/a',anchorId:"smart2"},
                {title:'六大模块解决问题',url:'/a',anchorId:"smart3"},
                {title:'家校互动全能助手',url:'/a',anchorId:"smart4"},
            ],
            tabIndex:1,
            subIndex:'',
            top: 0,
            isFixed:false
        }
    },
     created(){
        this.subIndex = parseInt(this.$route.query.index);
    },
    mounted(){
       document.documentElement.scrollTop = document.body.scrollTop = 0;
        window.addEventListener("scroll", () => {
        let h1 = this.$refs.header.$el.offsetHeight;
        let h2 = this.$refs.banner.offsetHeight;
        this.top = document.documentElement.scrollTop || document.body.scrollTop ||  window.pageYOffset;
        this.top >= (h1+h2) ? this.isFixed = true : this.isFixed = false;
    });
    }, 
    methods:{
        goAuchor(item){
            // let id = '#'+item.anchorId
            // let h = this.$refs.subHeader.$el.offsetHeight;
            // if(item.anchorId == "smart1"){
            //     h = 0
            // }
            // console.log(id)
            // document.querySelector(id).scrollIntoView(true)
            // var auchor=this.$el.querySelector(id)
            // console.log(auchor)
            // console.log(auchor.getBoundingClientRect().top)
            // document.documentElement.scrollTop = document.body.scrollTop = auchor.offsetTop-h
        }

    } 
}
</script>
<style lang="less" scoped>
    @import './smartSchool.less';
</style>