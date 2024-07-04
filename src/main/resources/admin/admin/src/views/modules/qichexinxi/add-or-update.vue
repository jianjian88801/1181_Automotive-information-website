<template>
  <div class="addEdit-block">
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
	  :style="{backgroundColor:addEditForm.addEditBoxColor}"
    >
      <el-row>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="车辆名称" prop="cheliangmingcheng">
          <el-input v-model="ruleForm.cheliangmingcheng" 
              placeholder="车辆名称" clearable  :readonly="ro.cheliangmingcheng"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="车辆名称" prop="cheliangmingcheng">
              <el-input v-model="ruleForm.cheliangmingcheng" 
                placeholder="车辆名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="车辆型号" prop="cheliangxinghao">
          <el-input v-model="ruleForm.cheliangxinghao" 
              placeholder="车辆型号" clearable  :readonly="ro.cheliangxinghao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="车辆型号" prop="cheliangxinghao">
              <el-input v-model="ruleForm.cheliangxinghao" 
                placeholder="车辆型号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="汽车品牌" prop="qichepinpai">
          <el-select v-model="ruleForm.qichepinpai" placeholder="请选择汽车品牌">
            <el-option
                v-for="(item,index) in qichepinpaiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="汽车品牌" prop="qichepinpai">
	      <el-input v-model="ruleForm.qichepinpai"
                placeholder="汽车品牌" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="价格分类" prop="jiagefenlei">
          <el-select v-model="ruleForm.jiagefenlei" placeholder="请选择价格分类">
            <el-option
                v-for="(item,index) in jiagefenleiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="价格分类" prop="jiagefenlei">
	      <el-input v-model="ruleForm.jiagefenlei"
                placeholder="价格分类" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="24">  
        <el-form-item class="upload" v-if="type!='info' && !ro.cheliangtupian" label="车辆图片" prop="cheliangtupian">
          <file-upload
          tip="点击上传车辆图片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.cheliangtupian?ruleForm.cheliangtupian:''"
          @change="cheliangtupianUploadChange"
          ></file-upload>
        </el-form-item>
        <div v-else>
          <el-form-item v-if="ruleForm.cheliangtupian" label="车辆图片" prop="cheliangtupian">
            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.cheliangtupian.split(',')" :src="item" width="100" height="100">
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="车辆分类" prop="cheliangfenlei">
          <el-select v-model="ruleForm.cheliangfenlei" placeholder="请选择车辆分类">
            <el-option
                v-for="(item,index) in cheliangfenleiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="车辆分类" prop="cheliangfenlei">
	      <el-input v-model="ruleForm.cheliangfenlei"
                placeholder="车辆分类" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'" label="门店名称" prop="mendianmingcheng">
          <el-select  @change="mendianmingchengChange" v-model="ruleForm.mendianmingcheng" placeholder="请选择门店名称">
            <el-option
                v-for="(item,index) in mendianmingchengOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input"v-if="ruleForm.mendianmingcheng" label="门店名称" prop="mendianmingcheng">
              <el-input v-model="ruleForm.mendianmingcheng" 
                placeholder="门店名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="门店地址" prop="mendiandizhi">
          <el-input v-model="ruleForm.mendiandizhi" 
              placeholder="门店地址" clearable  :readonly="ro.mendiandizhi"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="门店地址" prop="mendiandizhi">
              <el-input v-model="ruleForm.mendiandizhi" 
                placeholder="门店地址" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="联系电话" prop="lianxidianhua">
          <el-input v-model="ruleForm.lianxidianhua" 
              placeholder="联系电话" clearable  :readonly="ro.lianxidianhua"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="联系电话" prop="lianxidianhua">
              <el-input v-model="ruleForm.lianxidianhua" 
                placeholder="联系电话" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="车辆售价" prop="cheliangshoujia">
          <el-input v-model="ruleForm.cheliangshoujia" 
              placeholder="车辆售价" clearable  :readonly="ro.cheliangshoujia"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="车辆售价" prop="cheliangshoujia">
              <el-input v-model="ruleForm.cheliangshoujia" 
                placeholder="车辆售价" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="车辆库存" prop="cheliangkucun">
          <el-input v-model="ruleForm.cheliangkucun" 
              placeholder="车辆库存" clearable  :readonly="ro.cheliangkucun"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="车辆库存" prop="cheliangkucun">
              <el-input v-model="ruleForm.cheliangkucun" 
                placeholder="车辆库存" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item v-if="type!='info'"  label="车辆介绍" prop="cheliangjieshao">
                <editor 
                    style="min-width: 200px; max-width: 600px;"
                    v-model="ruleForm.cheliangjieshao" 
                    class="editor" 
                    action="file/upload">
                </editor>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.cheliangjieshao" label="车辆介绍" prop="cheliangjieshao">
                    <span v-html="ruleForm.cheliangjieshao"></span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
      <el-form-item class="btn">
        <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    let self = this
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
	  addEditForm: {"btnSaveFontColor":"#fff","selectFontSize":"14px","btnCancelBorderColor":"rgba(188, 194, 210, 1)","inputBorderRadius":"4px","inputFontSize":"14px","textareaBgColor":"#fff","btnSaveFontSize":"14px","textareaBorderRadius":"4px","uploadBgColor":"#fff","textareaBorderStyle":"solid","btnCancelWidth":"88px","textareaHeight":"120px","dateBgColor":"#fff","btnSaveBorderRadius":"15px","uploadLableFontSize":"14px","textareaBorderWidth":"1px","inputLableColor":"#606266","addEditBoxColor":"#fff","dateIconFontSize":"14px","btnSaveBgColor":"rgba(101, 126, 253, 1)","uploadIconFontColor":"#8c939d","textareaBorderColor":"#DCDFE6","btnCancelBgColor":"#ecf5ff","selectLableColor":"#606266","btnSaveBorderStyle":"solid","dateBorderWidth":"1px","dateLableFontSize":"14px","dateBorderRadius":"4px","btnCancelBorderStyle":"solid","selectLableFontSize":"14px","selectBorderStyle":"solid","selectIconFontColor":"#C0C4CC","btnCancelHeight":"44px","inputHeight":"40px","btnCancelFontColor":"rgba(3, 3, 3, 1)","dateBorderColor":"#DCDFE6","dateIconFontColor":"#C0C4CC","uploadBorderStyle":"solid","dateBorderStyle":"solid","dateLableColor":"#606266","dateFontSize":"14px","inputBorderWidth":"1px","uploadIconFontSize":"28px","selectHeight":"40px","inputFontColor":"#606266","uploadHeight":"148px","textareaLableColor":"#606266","textareaLableFontSize":"14px","btnCancelFontSize":"14px","inputBorderStyle":"solid","btnCancelBorderRadius":"15px","inputBgColor":"#fff","inputLableFontSize":"14px","uploadLableColor":"#606266","uploadBorderRadius":"4px","btnSaveHeight":"44px","selectBgColor":"#fff","btnSaveWidth":"88px","selectIconFontSize":"14px","dateHeight":"40px","selectBorderColor":"#DCDFE6","inputBorderColor":"#DCDFE6","uploadBorderColor":"#DCDFE6","textareaFontColor":"#606266","selectBorderWidth":"1px","dateFontColor":"#606266","btnCancelBorderWidth":"0px","uploadBorderWidth":"1px","textareaFontSize":"14px","selectBorderRadius":"4px","selectFontColor":"#606266","btnSaveBorderColor":"#409EFF","btnSaveBorderWidth":"0px"},
      id: '',
      type: '',
      ro:{
	cheliangmingcheng : false,
	cheliangxinghao : false,
	qichepinpai : false,
	jiagefenlei : false,
	cheliangtupian : false,
	cheliangfenlei : false,
	mendianmingcheng : false,
	mendiandizhi : false,
	lianxidianhua : false,
	cheliangshoujia : false,
	cheliangkucun : false,
	cheliangjieshao : false,
	clicktime : false,
      },
      ruleForm: {
        cheliangmingcheng: '',
        cheliangxinghao: '',
        qichepinpai: '',
        jiagefenlei: '',
        cheliangtupian: '',
        cheliangfenlei: '',
        mendianmingcheng: '',
        mendiandizhi: '',
        lianxidianhua: '',
        cheliangshoujia: '',
        cheliangkucun: '',
        cheliangjieshao: '',
        clicktime: '',
      },
          qichepinpaiOptions: [],
          jiagefenleiOptions: [],
          cheliangfenleiOptions: [],
          mendianmingchengOptions: [],
      rules: {
          cheliangmingcheng: [
                { required: true, message: '车辆名称不能为空', trigger: 'blur' },
          ],
          cheliangxinghao: [
          ],
          qichepinpai: [
                { required: true, message: '汽车品牌不能为空', trigger: 'blur' },
          ],
          jiagefenlei: [
                { required: true, message: '价格分类不能为空', trigger: 'blur' },
          ],
          cheliangtupian: [
          ],
          cheliangfenlei: [
                { required: true, message: '车辆分类不能为空', trigger: 'blur' },
          ],
          mendianmingcheng: [
                { required: true, message: '门店名称不能为空', trigger: 'blur' },
          ],
          mendiandizhi: [
          ],
          lianxidianhua: [
                { validator: validatePhone, trigger: 'blur' },
          ],
          cheliangshoujia: [
                { required: true, message: '车辆售价不能为空', trigger: 'blur' },
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          cheliangkucun: [
                { required: true, message: '车辆库存不能为空', trigger: 'blur' },
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          cheliangjieshao: [
          ],
          clicktime: [
          ],
      }
    };
  },
  props: ["parent"],
  computed: {
  },
  created() {
	this.addEditStyleChange()
	this.addEditUploadStyleChange()
  },
  methods: {
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
        for (var o in obj){
          if(o=='cheliangmingcheng'){
            this.ruleForm.cheliangmingcheng = obj[o];
	    this.ro.cheliangmingcheng = true;
            continue;
          }
          if(o=='cheliangxinghao'){
            this.ruleForm.cheliangxinghao = obj[o];
	    this.ro.cheliangxinghao = true;
            continue;
          }
          if(o=='qichepinpai'){
            this.ruleForm.qichepinpai = obj[o];
	    this.ro.qichepinpai = true;
            continue;
          }
          if(o=='jiagefenlei'){
            this.ruleForm.jiagefenlei = obj[o];
	    this.ro.jiagefenlei = true;
            continue;
          }
          if(o=='cheliangtupian'){
            this.ruleForm.cheliangtupian = obj[o];
	    this.ro.cheliangtupian = true;
            continue;
          }
          if(o=='cheliangfenlei'){
            this.ruleForm.cheliangfenlei = obj[o];
	    this.ro.cheliangfenlei = true;
            continue;
          }
          if(o=='mendianmingcheng'){
            this.ruleForm.mendianmingcheng = obj[o];
	    this.ro.mendianmingcheng = true;
            continue;
          }
          if(o=='mendiandizhi'){
            this.ruleForm.mendiandizhi = obj[o];
	    this.ro.mendiandizhi = true;
            continue;
          }
          if(o=='lianxidianhua'){
            this.ruleForm.lianxidianhua = obj[o];
	    this.ro.lianxidianhua = true;
            continue;
          }
          if(o=='cheliangshoujia'){
            this.ruleForm.cheliangshoujia = obj[o];
	    this.ro.cheliangshoujia = true;
            continue;
          }
          if(o=='cheliangkucun'){
            this.ruleForm.cheliangkucun = obj[o];
	    this.ro.cheliangkucun = true;
            continue;
          }
          if(o=='cheliangjieshao'){
            this.ruleForm.cheliangjieshao = obj[o];
	    this.ro.cheliangjieshao = true;
            continue;
          }
          if(o=='clicktime'){
            this.ruleForm.clicktime = obj[o];
	    this.ro.clicktime = true;
            continue;
          }
        }
      }
      // 获取用户信息
      this.$http({
        url: `${this.$storage.get('sessionTable')}/session`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
        } else {
          this.$message.error(data.msg);
        }
      });
            this.$http({
              url: `option/qichepinpai/qichepinpai`,
              method: "get"
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.qichepinpaiOptions = data.data;
              } else {
                this.$message.error(data.msg);
              }
            });
         
            this.$http({
              url: `option/jiagefenlei/jiagefenlei`,
              method: "get"
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.jiagefenleiOptions = data.data;
              } else {
                this.$message.error(data.msg);
              }
            });
         
            this.cheliangfenleiOptions = "轿车,轿跑,suv,mpv,其他车型".split(',')
            this.$http({
              url: `option/jingxiaoshang/mendianmingcheng`,
              method: "get"
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.mendianmingchengOptions = data.data;
              } else {
                this.$message.error(data.msg);
              }
            });
    },
    // 下二随
    mendianmingchengChange () {
      this.$http({
        url: `follow/jingxiaoshang/mendianmingcheng?columnValue=`+ this.ruleForm.mendianmingcheng,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
              if(data.data.mendiandizhi){
                this.ruleForm.mendiandizhi = data.data.mendiandizhi
              }
              if(data.data.lianxidianhua){
                this.ruleForm.lianxidianhua = data.data.lianxidianhua
              }
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 多级联动参数
    info(id) {
      this.$http({
        url: `qichexinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
	this.ruleForm.cheliangjieshao = this.ruleForm.cheliangjieshao.replace(reg,'../../../springbootjtw43/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 提交
    onSubmit() {
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}













      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.$http({
            url: `qichexinxi/${!this.ruleForm.id ? "save" : "update"}`,
            method: "post",
            data: this.ruleForm
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.parent.showFlag = true;
                  this.parent.addOrUpdateFlag = false;
                  this.parent.qichexinxiCrossAddOrUpdateFlag = false;
                  this.parent.search();
                  this.parent.contentStyleChange();
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.qichexinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    cheliangtupianUploadChange(fileUrls) {
	this.ruleForm.cheliangtupian = fileUrls;
			this.addEditUploadStyleChange()
    },
	addEditStyleChange() {
	  this.$nextTick(()=>{
	    // input
	    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputFontColor
	      el.style.fontSize = this.addEditForm.inputFontSize
	      el.style.borderWidth = this.addEditForm.inputBorderWidth
	      el.style.borderStyle = this.addEditForm.inputBorderStyle
	      el.style.borderColor = this.addEditForm.inputBorderColor
	      el.style.borderRadius = this.addEditForm.inputBorderRadius
	      el.style.backgroundColor = this.addEditForm.inputBgColor
	    })
	    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputLableColor
	      el.style.fontSize = this.addEditForm.inputLableFontSize
	    })
	    // select
	    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectFontColor
	      el.style.fontSize = this.addEditForm.selectFontSize
	      el.style.borderWidth = this.addEditForm.selectBorderWidth
	      el.style.borderStyle = this.addEditForm.selectBorderStyle
	      el.style.borderColor = this.addEditForm.selectBorderColor
	      el.style.borderRadius = this.addEditForm.selectBorderRadius
	      el.style.backgroundColor = this.addEditForm.selectBgColor
	    })
	    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectLableColor
	      el.style.fontSize = this.addEditForm.selectLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
	      el.style.color = this.addEditForm.selectIconFontColor
	      el.style.fontSize = this.addEditForm.selectIconFontSize
	    })
	    // date
	    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateFontColor
	      el.style.fontSize = this.addEditForm.dateFontSize
	      el.style.borderWidth = this.addEditForm.dateBorderWidth
	      el.style.borderStyle = this.addEditForm.dateBorderStyle
	      el.style.borderColor = this.addEditForm.dateBorderColor
	      el.style.borderRadius = this.addEditForm.dateBorderRadius
	      el.style.backgroundColor = this.addEditForm.dateBgColor
	    })
	    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateLableColor
	      el.style.fontSize = this.addEditForm.dateLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
	      el.style.color = this.addEditForm.dateIconFontColor
	      el.style.fontSize = this.addEditForm.dateIconFontSize
	      el.style.lineHeight = this.addEditForm.dateHeight
	    })
	    // upload
	    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
	    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
	      el.style.width = this.addEditForm.uploadHeight
	      el.style.height = this.addEditForm.uploadHeight
	      el.style.borderWidth = this.addEditForm.uploadBorderWidth
	      el.style.borderStyle = this.addEditForm.uploadBorderStyle
	      el.style.borderColor = this.addEditForm.uploadBorderColor
	      el.style.borderRadius = this.addEditForm.uploadBorderRadius
	      el.style.backgroundColor = this.addEditForm.uploadBgColor
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.uploadHeight
	      el.style.color = this.addEditForm.uploadLableColor
	      el.style.fontSize = this.addEditForm.uploadLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
	      el.style.color = this.addEditForm.uploadIconFontColor
	      el.style.fontSize = this.addEditForm.uploadIconFontSize
	      el.style.lineHeight = iconLineHeight
	      el.style.display = 'block'
	    })
	    // 多文本输入框
	    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
	      el.style.height = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaFontColor
	      el.style.fontSize = this.addEditForm.textareaFontSize
	      el.style.borderWidth = this.addEditForm.textareaBorderWidth
	      el.style.borderStyle = this.addEditForm.textareaBorderStyle
	      el.style.borderColor = this.addEditForm.textareaBorderColor
	      el.style.borderRadius = this.addEditForm.textareaBorderRadius
	      el.style.backgroundColor = this.addEditForm.textareaBgColor
	    })
	    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
	      // el.style.lineHeight = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaLableColor
	      el.style.fontSize = this.addEditForm.textareaLableFontSize
	    })
	    // 保存
	    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
	      el.style.width = this.addEditForm.btnSaveWidth
	      el.style.height = this.addEditForm.btnSaveHeight
	      el.style.color = this.addEditForm.btnSaveFontColor
	      el.style.fontSize = this.addEditForm.btnSaveFontSize
	      el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
	      el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
	      el.style.borderColor = this.addEditForm.btnSaveBorderColor
	      el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnSaveBgColor
	    })
	    // 返回
	    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
	      el.style.width = this.addEditForm.btnCancelWidth
	      el.style.height = this.addEditForm.btnCancelHeight
	      el.style.color = this.addEditForm.btnCancelFontColor
	      el.style.fontSize = this.addEditForm.btnCancelFontSize
	      el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
	      el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
	      el.style.borderColor = this.addEditForm.btnCancelBorderColor
	      el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnCancelBgColor
	    })
	  })
	},
	addEditUploadStyleChange() {
		this.$nextTick(()=>{
		  document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
			el.style.width = this.addEditForm.uploadHeight
			el.style.height = this.addEditForm.uploadHeight
			el.style.borderWidth = this.addEditForm.uploadBorderWidth
			el.style.borderStyle = this.addEditForm.uploadBorderStyle
			el.style.borderColor = this.addEditForm.uploadBorderColor
			el.style.borderRadius = this.addEditForm.uploadBorderRadius
			el.style.backgroundColor = this.addEditForm.uploadBgColor
		  })
	  })
	},
  }
};
</script>
<style lang="scss">
.editor{
  height: 500px;
  
  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}
</style>
