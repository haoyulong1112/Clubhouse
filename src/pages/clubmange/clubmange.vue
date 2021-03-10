<template>
    <div class="container">
        <div class="club-search">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="phone-ruleForm">
                <el-form-item class="phone-label" label="手机号" prop="phone">
                    <el-input type="number" v-model="ruleForm.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="check-btnbox">
                    <el-button @click="submitForm('ruleForm')">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- <div class="club-title">
            俱乐部总数 <span>32324个</span>
        </div> -->
        <div class="club-while">
            <h3>筛选条件</h3>
            <div class="first-class">
                <div>一级分类</div>
                <!-- <div class="active">全部<span></span></div> -->
                <div :class="currentFirstclass == index ? 'active': ''" v-for="(item,index) in firstClass" :key="`a${index}`" @click="changeClass1(index)">{{item}}<span v-if="currentFirstclass == index"></span></div>
                <div class="editclass1">编辑</div>
            </div>
            <div class="second-class">
                <div>二级分类</div>
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
            ruleForm: {
                phone: ''
            },
            rules: {
                phone: [
                    { required: true, message: '请填写手机号', trigger: 'blur' }
                ]
            },
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
        },
            submitForm(str){
                this.$refs[str].validate((flag) => {
                    if(flag){
                        console.log('查询')
                    }
                })
            },
    }
  }
</script>
<style lang="stylus" scoped>
    .container
        width 100%;
        background-color: #fff;

    /deep/.club-search
        width 100%;
        padding-top: 0.20rem
        > .el-form
            display flex;
            justify-content flex-start;
            > div:first-of-type
                width 5rem
    /deep/ .phone-label .el-form-item__label
        font-family: PingFangSC-Semibold;
        font-size: 0.2rem!important;
        color: #002241!important;
        width 1rem!important;
        letter-spacing: 0;
        margin-left 0.3rem;
    /deep/ .phone-label .el-form-item__content
        margin-left 1.05rem;
    /deep/ .check-btnbox> div
        margin-left 0.20rem!important
    .check-btnbox .el-button
        background: #7DBFBC;
        border-radius: 0.04rem;
        color: #fff;
    .club-title
        width 100%;
        font-size: .18rem;
        text-align left;
        margin-top: .10rem;
        box-sizing: border-box;
        padding-left: .20rem;
        > span
            font-weight: bolder;
    .club-while
        width 100%;
        padding-left 0.3rem;
        box-sizing: border-box; 
        > h3
            text-align left;
            text-indent: .10rem;
            font-family: PingFangSC-Medium;
            font-size: .16rem;
            color: #002241;
        > .first-class
            width 100%;
            display flex;
            justify-content flex-start;
            align-items center;
            box-sizing border-box;
            padding-left .10rem;
            height .50rem;
            position: relative;
            background: #E0F0F0;
            > div
                margin-right: .20rem;
                position relative;
                box-sizing border-box;
                cursor: pointer;
                font-family: PingFangSC-Semibold;
                font-size: .16rem;
                color: #2C3645;
                letter-spacing: 0;
                > span
                    position absolute;
                    bottom -.08rem;
                    left 0;
                    width 100%;
                    height .06rem;
                    background-color #ed1941;
                    border-radius: .04rem;
            > div:first-of-type
                font-size .16rem;
            > div.active
                font-weight: bolder;
            .editclass1
                position absolute;
                right .10rem;
                top: .20rem;
                color: #ed1941;
        > .second-class
            width 100%;
            display flex;
            justify-content flex-start;
            align-items center;
            box-sizing border-box;
            padding-left .10rem;
            height .50rem;
            position: relative;
            background: #F8FCFC;
            > div
                margin-right: .20rem;
                position relative;
                box-sizing border-box;
                cursor: pointer;
                font-family: PingFangSC-Semibold;
                font-size: .16rem;
                color: #2C3645;
                letter-spacing: 0;
                > span
                    position absolute;
                    bottom -.08rem;
                    left 0;
                    width 100%;
                    height .06rem;
                    background-color #ed1941;
                    border-radius: .04rem;
            > div:first-of-type
                font-size .16rem;
            > div.active
                font-weight: bolder;
            .editclass1
                position absolute;
                right .10rem;
                top: .20rem;
                color: #ed1941;
</style>
