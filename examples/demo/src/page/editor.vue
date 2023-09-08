<template>
  <div style="margin: 50px auto;width: 1200px;">
    <button style="margin-bottom: 15px;" @click="getContentText">获取内容</button>
    <quill-editor ref="contentEditor" :content="contentText" :options="editorOption" style="height:500px;"/>
  </div>
</template>
<script>
import {quillEditor, Quill} from 'vue-quill-editor-support-insert-table'
import QuillBetterTable from 'quill-better-table'
Quill.register('modules/better-table', QuillBetterTable)

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // 加粗，斜体，下划线，删除线
  ['blockquote', 'code-block'], // 引用，代码块
  [{'header': 1}, {'header': 2}], // 几级标题
  [{'list': 'ordered'}, {'list': 'bullet'}], // 有序列表，无序列表
  [{'script': 'sub'}, {'script': 'super'}], // 下角标，上角标
  [{'indent': '-1'}, {'indent': '+1'}], // 缩进
  [{'direction': 'rtl'}], // 文字输入方向
  [{'size': ['small', false, 'large', 'huge']}], // 字体大小
  // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],// 标题
  [{'color': []}, {'background': []}], // 颜色选择
  [{'font': []}], // 字体
  [{'align': []}], // 居中
  ['clean'], // 清除样式,
  ['link', 'image'], // 上传图片、上传视频
  [{'table': 'TD'}],
]

export default {
  name: 'editor',
  components: {quillEditor},
  data () {
    return {
      editorOption: {
        placeholder: '编辑文章内容',
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              table: function () {
                this.quill.getModule('better-table').insertTable(4, 4) // 默认插入4*4的表格
              },
            }
          },
          table: false,
          'better-table': {
            operationMenu: {
              items: {
                insertColumnRight: {
                  text: "右边插入一列"
                },
                insertColumnLeft: {
                  text: "左边插入一列"
                },
                insertRowUp: {
                  text: "上边插入一行"
                },
                insertRowDown: {
                  text: "下边插入一行"
                },
                mergeCells: {
                  text: "合并单元格"
                },
                unmergeCells: {
                  text: "拆分单元格"
                },
                deleteColumn: {
                  text: "删除列"
                },
                deleteRow: {
                  text: "删除行"
                },
                deleteTable: {
                  text: "删除表格"
                }
              },
              background: {
                color: '#333'
              },
              color: {
                colors: ['green', 'red', 'yellow', 'blue', 'white'],
                text: 'background:'
              }
            }
          },
          keyboard: {
            bindings: QuillBetterTable.keyboardBindings
          }
        },
        theme: 'snow'
      },
      contentText: ''
    }
  },
  methods: {
    getContentText() {
      // 通过ref获取编辑的内容；提交保存数据时可通过此方式获取内容进行保存
      const content = this.$refs.contentEditor.quill.root.innerHTML
      console.log(content)
      alert(content)
      // 如果需要在其他地方的页面直接可以渲染出表格内容，建议加上下面这段CSS样式；否则在使用这个内容页面上 表格可能不会显示出来
      // <style>.quill-better-table{width: 100%;border-collapse: collapse;table-layout: fixed;}.quill-better-table td{border: 1px solid #000;padding: 2px 5px;}</style>
    }
  }
}
</script>

<style>
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.snow.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill-better-table/dist/quill-better-table.css';
</style>
