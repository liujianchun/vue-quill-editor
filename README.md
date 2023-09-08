# vue-quill-editor-support-insert-table

- [forked from](https://github.com/surmon-china/vue-quill-editor)

该VUE组件是兼容支持 使用 [quill-better-table](https://www.npmjs.com/package/quill-better-table) 组件将表格嵌入内容中。
[vue-quill-editor-support-insert-table组件包地址](https://www.npmjs.com/package/vue-quill-editor-support-insert-table)

原 vue-quill-editor 的 quill 版本是使用的版本 1.3.7，
但是这个版本是无法支持使用 quill-better-table 组件进行表格插入；
故fork出来，修改版本号至 2.0.0-dev.4，该版本是开发版本，并非 [quill](https://www.npmjs.com/package/quill) 线上正式版本，如果非特殊原因，不建议使用该组件，可能会存在未知的bug。


使用方式：

1.引入组件

npm i quill@2.0.0-dev.4

npm i vue-quill-editor-support-insert-table

npm i quill-better-table

2.使用样例：

具体使用代码：
```vue
<template>
  <div style="margin: 50px auto;width: 1200px;">
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
      console.log(this.$refs.contentEditor.quill.root.innerHTML)
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
```
查看测试效果，可以github上拉下代码运行查看；代码[地址](https://github.com/liujianchun/vue-quill-editor)
代码拉下后，可查看 examples/demo 目录的样例代码；
运行测试页面的话，直接执行下面的命令：
```shell
cd examples/demo
npm i
npm run dev
```
运行完成后 访问：http://localhost:8080/editor 即可进行页面测试。

3.效果图：

![img.png](https://raw.githubusercontent.com/liujianchun/vue-quill-editor/main/img.png)