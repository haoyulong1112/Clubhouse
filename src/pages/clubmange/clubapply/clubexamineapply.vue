<template>
    <div class="container">
        <div class="apply-box">
            <el-form :model="applyForm" :rules="rules" ref="applyForm" label-width="100px" class="applyForm-ruleForm">
                <el-form-item label="俱乐部名称" class="applyForm-formitem" prop="clubname">
                    <el-input class="applyForm-input" placeholder="输入俱乐部名称" type="text" v-model="applyForm.clubname" autocomplete="off"></el-input>
                    <template>
                        <div class="applyForm-status">
                            <span>*</span>状态<span>（审核通过）</span>
                        </div>
                    </template>
                </el-form-item>
                <el-form-item label="管理员名称" class="applyForm-formitem" prop="masterName">
                    <el-input class="applyForm-input" placeholder="输入管理员名称" type="text" v-model="applyForm.masterName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="俱乐部编号" class="applyForm-formitem" prop="clubId">
                    <el-input class="applyForm-input" placeholder="输入密码" type="number" v-model="applyForm.clubId" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="管理员手机号" class="applyForm-formitem" prop="cellPhone">
                    <el-input class="applyForm-input" placeholder="输入手机号" type="text" v-model="applyForm.cellPhone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="一级分类" class="applyForm-formitem" prop="oneClass">
                    <el-select class="applyForm-input" v-model="applyForm.oneClass" placeholder="请选择状态">
                        <el-option label="股票" value="1"></el-option>
                        <el-option label="已通过" value="2"></el-option>
                        <el-option label="未通过" value="3"></el-option>
                    </el-select>
                    <!-- <el-input class="applyForm-input" placeholder="输入身份证号" type="text" v-model="applyForm.idCard" autocomplete="off"></el-input> -->
                </el-form-item>
                <el-form-item label="二级分类" class="applyForm-formitem" prop="twoClass">
                    <el-select class="applyForm-input" v-model="applyForm.twoClass" placeholder="请选择状态">
                        <el-option label="股票能手" value="1"></el-option>
                        <el-option label="已通过" value="2"></el-option>
                        <el-option label="未通过" value="3"></el-option>
                    </el-select>
                    <!-- <el-input class="applyForm-input" placeholder="输入身份证号" type="text" v-model="applyForm.idCard" autocomplete="off"></el-input> -->
                </el-form-item>
                <el-form-item label="三个标签" class="applyForm-formitem" prop="tags">
                    <el-input class="applyForm-inputlage" placeholder="每个标签以英文逗号隔开" type="text" v-model="applyForm.tags" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="applyForm-text" label="俱乐部简介" prop="clubtext">
                    <el-input type="textarea" v-model="applyForm.clubtext" autocomplete="off" :rows="10" placeholder="输入文字介绍"></el-input>
                </el-form-item>
                <!-- <el-form-item class="applyForm-btnbox">
                    <el-button class="applyForm-btn" @click="submitForm('masterForm')">保存提交审核</el-button>
                </el-form-item> -->
                <el-form-item class="applyForm-btnbox">
                    <el-button type="danger" @click="unpast('masterForm')">不通过</el-button>
                    <el-button class="applyForm-past" @click="past('masterForm')">通过</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="uploader-img">
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :limit="1">
                <img v-if="!header" class="uploader-headerimg" src="@/assets/more.png" alt="">
                <img v-else class="uploader-headerimg" :src="header" alt="">
                <el-button size="small" type="primary">点击上传</el-button>
                <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
            </el-upload>
        </div>
    </div>
</template>

<script>
  export default{
    name: 'clubexamineapply',
    data() {
        return {
            applyForm: {
                clubname: '',
                masterName: '',
                clubId: '',
                cellPhone: '',
                oneClass: '',
                twoClass: '',
                tags: '',
                clubtext: '',
                imgurl: ''
            },
            rules: {},
            total: 100,
            currentPage: 1,
            pageSize: 10,
            header:''
        }
    },
    methods: {

    },
  }
</script>
<style lang="stylus" scoped>
    .container
        width 100%;
        background-color: #fff;
        // height 100%;
        position relative;
    .apply-box
        padding-top 20px;
        padding-left 30px;
        padding-right 30px;
    // .applyForm
    /deep/.applyForm-ruleForm .el-form-item__label
        text-align left;
        // padding-left 30px;
        width 120px!important;
        font-size: 16px;
        color: #002241;
        font-weight: 500;
    /deep/.applyForm-ruleForm .el-form-item__content
        width 172px;
        height 26px!important;
        margin-left 120px!important;
    /deep/ .applyForm-ruleForm .applyForm-text .el-form-item__content
        width auto;
        height auto!important;
        margin-left 120px!important;
    /deep/ .applyForm-ruleForm .applyForm-input
        width 172px;
        height 26px!important;
    /deep/ .applyForm-ruleForm .applyForm-input input
        width 172px;
        height 26px!important;
    /deep/ .applyForm-ruleForm .applyForm-inputlage input
        width 300px;
        height 26px!important;
    .applyForm-btn
        width 102px;
        height 26px;
        padding 0;
        background: #7DBFBC;
        border-radius: 14px;
        color #fff;
    .uploader-img
        position absolute;
        top: 50px;
        right: 30px;
        > .upload-demo img
            width 115px;
            height 115px;
        > .upload-demo button
            background: #7DBFBC;
            border: none;
            margin-top 10px;

    .applyForm-status
        position absolute;
        left: 200px;
        top: 0;
        width 140px;
        font-size: 16px;
        color: #002241;
        > span:first-of-type
            font-size: 16px;
            color: #FF3A1E;
        > span:last-of-type
            font-size: 16px;
            color: #FF3A1E;
        // text-align left;
    .applyForm-past
        background: #7DBFBC;
        border: none;
        color: #fff;
    // /deep/ .applyForm .el-form-item__label
        // width 100px!important;
        // font-size: 16px;
        // color: #002241;
        // text-align: left;
        // font-weight: bold;
        // height 26px;
        // line-height: 40px;
    // /deep/ .applyForm .el-form-item__content
    //     width 172px;
    //     height 26px;
    //     line-height: 26px;
    //     margin-left 0!important;
    // /deep/ .applyForm.el-input
    //     width 172px;
    //     height 26px !important;
</style>
