<template>
    <div class="container">
        <div class="club-title">
            俱乐部总数 <span>32324个</span>
        </div>
        <div class="club-while">
            <h3>筛选条件</h3>
            <div class="first-class">
                <div>一级分类</div>
                <!-- <div class="active">全部<span></span></div> -->
                <div :class="currentFirstclass == index ? 'active': ''" v-for="(item,index) in firstClass" :key="`a${index}`" @click="changeClass1(index)">{{item}}<span v-if="currentFirstclass == index"></span></div>
                <div class="editclass1">编辑</div>
            </div>
        </div>
    </div>
</template>

<script>
  export default{
    name: 'clubmange',
    data() {
        return {
            firstClass: [
                '全部',
                '股票',
                '生活',
                '娱乐',
                '心理咨询',
                '教育',
            ],
            currentFirstclass: 0
        }
    },
    methods: {
        changeClass1(index){
            this.currentFirstclass = index;
        }
    }
  }
</script>
<style lang="stylus" scoped>
    .container
        width 100%;
        overflow: hidden;
    .club-title
        width 100%;
        font-size: 18px;
        text-align left;
        margin-top: 10px;
        box-sizing: border-box;
        padding-left: 20px;
        > span
            font-weight: bolder;
    .club-while
        width 100%;
        > h3
            text-align left;
            text-indent: 20px;
        > .first-class
            width 100%;
            display flex;
            justify-content flex-start;
            align-items center;
            box-sizing border-box;
            padding-left 20px;
            height 50px;
            position: relative;
            > div
                margin-right: 20px;
                position relative;
                box-sizing border-box;
                cursor: pointer;
                > span
                    position absolute;
                    bottom -8px;
                    left 0;
                    width 100%;
                    height 6px;
                    background-color #ed1941;
                    border-radius: 4px;
            > div:first-of-type
                font-size 14px;
            > div.active
                font-weight: bolder;
            .editclass1
                position absolute;
                right 10px;
                top: 20px;
                color: #ed1941;
</style>
