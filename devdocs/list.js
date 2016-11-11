
"use strict";


// 所有的 tag 标签，全部使用单数形式
// 对于扩展的标签名，使用大驼峰格式（区别于常规标签）
// 项目中引用全用同名大驼峰，必要情况可以加 Plus 前缀

/*
  组件分类：
  - HTML 标签扩展，如: CheckSwitch Dialog Toast Progress Preloader SearchBar ActionSheet
  - 经典布局 如：card list-block login-screen msg-page
    (极尽升华，仅使用一个或两个标签组合实现，可用于作为 HTML 标签的扩展)
*/

var list_tags = [
  // 分组
  // base form view navigation other
  //base
  {
    "icon": "",
    "link": "typography",
    "title": "排版样式",
    "small": "typography",
    "type": "base",
    "status": "doing",
  },
  {
    "icon": "",
    "link": "grid",
    "title": "栅格",
    "small": "grid",
    "type": "base",
    "status": "todo",
  },

  //temp
  {
    "icon": "",
    "link": "icon",
    "title": "图标",
    "small": "icon",
    "type": "img",
    "status": "doing",
  },
  {
    "icon": "",
    "link": "badge",
    "title": "标签",
    "small": "badge/tag",
    "type": "layout",
    "status": "doing",
  },
  //bar
  {
    "icon": "",
    "link": "header",
    "title": "标题栏",
    "small": "header",
    "type": "bar",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "tool",
    "title": "工具",
    "small": "tool",
    "type": "bar",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "tab",
    "title": "Tab切换",
    "small": "tab",
    "type": "bar",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "search",
    "title": "搜索",
    "small": "search",
    "type": "bar",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "sidebar",
    "title": "侧边栏",
    "small": "sidebar",
    "type": "bar",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "preloader",
    "title": "加载指示器",
    "small": "Preloader",
    "type": "bar",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "progress",
    "title": "进度",
    "small": "Progress",
    "type": "bar",
    "status": "todo",
  },

  //list
  {
    "icon": "",
    "link": "list",
    "title": "列表",
    "small": "List Block",
    "type": "list",
    "status": "doing",
  },
  {
    "icon": "",
    "link": "media-list",
    "title": "媒体列表",
    "small": "media list",
    "type": "list",
    "status": "doing",
  },
  {
    "icon": "",
    "link": "group-list",
    "title": "分组列表，如联系人",
    "small": "group list",
    "type": "list",
    "status": "doing",
  },
  {
    "icon": "",
    "link": "card",
    "title": "卡片",
    "small": "card",
    "type": "list",
    "status": "doing",
  },
  //表单
  {
    "icon": "",
    "link": "button",
    "title": "按钮",
    "small": "button",
    "type": "base",
    "status": "doing",
  },
  {
    "icon": "",
    "link": "input",
    "title": "单选框",
    "small": "input",
    "type": "form",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "radio",
    "title": "单选框",
    "small": "radio",
    "type": "form",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "checkbox",
    "title": "多选框",
    "small": "checkbox",
    "type": "form",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "cascader",
    "title": "级联选择",
    "small": "cascader",
    "type": "form",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "switch",
    "title": "开关",
    "small": "switch",
    "type": "form",
    "status": "doing",
  },
  {
    "icon": "",
    "link": "input-number",
    "title": "数字输入框",
    "small": "input-number",
    "type": "form",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "select",
    "title": "选择器",
    "small": "select",
    "type": "form",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "tree-select",
    "title": "树选择",
    "small": "tree select",
    "type": "form",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "slider",
    "title": "滑块输入条",
    "small": "slider",
    "type": "form",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "transfer",
    "title": "穿梭框",
    "small": "transfer",
    "type": "form",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "upload",
    "title": "上传",
    "small": "upload",
    "type": "form",
    "status": "todo",
  },
  //picker 选择器
  {
    "icon": "",
    "link": "picker",
    "title": "选择器",
    "small": "Picker",
    "type": "picker",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "date-picker",
    "title": "日期选择框",
    "small": "Date Picker",
    "type": "picker",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "time-picker",
    "title": "时间选择框",
    "small": "Time Picker",
    "type": "picker",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "city-picker",
    "title": "省市区",
    "small": "City Picker",
    "type": "picker",
    "status": "todo",
  },

  //extend 扩展
  //
  {
    "icon": "",
    "link": "article",
    "title": "外部内容",
    "small": "article",
    "type": "list",
    "status": "doing",
  },
  {
    "icon": "",
    "link": "tree",
    "title": "树形控件",
    "small": "tree",
    "type": "layout",
    "status": "doing",
  },

  {
    "icon": "",
    "link": "action-sheet",
    "title": "操作表",
    "small": "ActionSheet",
    "type": "picker",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "popover",
    "title": "气泡卡片",
    "small": "Popover",
    "type": "extend",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "tooltip",
    "title": "文字提示",
    "small": "tooltip",
    "type": "extend",
    "status": "todo",
  },


  {
    "icon": "",
    "link": "alert",
    "title": "弹窗",
    "small": "alert",
    "type": "extend",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "confirm",
    "title": "确认框",
    "small": "confirm",
    "type": "extend",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "modal",
    "title": "对话框",
    "small": "modal",
    "type": "extend",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "dialog",
    "title": "对话框",
    "small": "dialog",
    "type": "extend",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "toast",
    "title": "消息提示",
    "small": "toast",
    "type": "extend",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "loading",
    "title": "加载进度",
    "small": "loading",
    "type": "extend",
    "status": "todo",
  },

  {
    "icon": "",
    "link": "notification",
    "title": "通知提醒框",
    "small": "notification",
    "type": "extend",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "countup",
    "title": "计时器",
    "small": "countup",
    "type": "extend",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "countdown",
    "title": "倒计时",
    "small": "countdown",
    "type": "extend",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "clocker",
    "title": "倒计时",
    "small": "clocker",
    "type": "extend",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "timeline",
    "title": "时间轴",
    "small": "timeline",
    "type": "extend",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "stepper",
    "title": "步骤显示器",
    "small": "stepper",
    "type": "extend",
    "status": "todo",
  },
  {
    "icon": "",
    "link": "clocker",
    "title": "倒计时",
    "small": "clocker",
    "type": "extend",
    "status": "todo",
  },

  {
    "icon": "",
    "link": "filter",
    "title": "过滤器",
    "small": "filter",
    "type": "extend",
    "status": "todo",
  },

  // 文档
  {
    "icon": "",
    "link": "devdocs",
    "title": "开发者文档",
    "small": "devdocs",
    "type": "example",
    "status": "todo",
  },
];

module.exports = list_tags;
