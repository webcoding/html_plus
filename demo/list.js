
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
    "link": "button",
    "title": "按钮",
    "small": "button",
    "type": "form",
    "status": "doing",
  },
  {
    "icon": "",
    "link": "switch",
    "title": "开关",
    "small": "switch",
    "type": "form",
    "status": "doing",
  },
  // {
  //   "icon": "",
  //   "link": "list",
  //   "title": "列表",
  //   "small": "List Block",
  //   "type": "layout",
  //   "status": "doing",
  // },
  // {
  //   "icon": "",
  //   "link": "form",
  //   "title": "表单",
  //   "small": "form",
  //   "type": "form",
  //   "status": "todo",
  // },
  // {
  //   "icon": "",
  //   "link": "tab",
  //   "title": "Tab切换",
  //   "small": "Tab",
  //   "type": "layout",
  //   "status": "todo",
  // },
  {
    "icon": "",
    "link": "navbar",
    "title": "标题栏",
    "small": "navbar",
    "type": "bar",
    "status": "doing",
  },
  // {
  //   "icon": "",
  //   "link": "toolbar",
  //   "title": "工具栏",
  //   "small": " toolbar",
  //   "type": "bar",
  //   "status": "doing",
  // },
  // {
  //   "icon": "",
  //   "link": "searchbar",
  //   "title": "搜索栏",
  //   "small": "Search Bar",
  //   "type": "bar",
  //   "status": "doing",
  // },
  // {
  //   "icon": "",
  //   "link": "panel",
  //   "title": "侧边栏",
  //   "small": "Side Panel",
  //   "type": "bar",
  //   "status": "todo",
  // },
  // {
  //   "icon": "",
  //   "link": "card",
  //   "title": "卡片",
  //   "small": "Card",
  //   "type": "layout",
  //   "status": "todo",
  // },
  {
    "icon": "",
    "link": "modal",
    "title": "对话框",
    "small": "Modal",
    "type": "layout",
    "status": "todo",
  },
  // {
  //   "icon": "",
  //   "link": "notification",
  //   "title": "消息提醒",
  //   "small": "Notification",
  //   "type": "layout",
  //   "status": "todo",
  // },
  // {
  //   "icon": "",
  //   "link": "Toast",
  //   "title": "消息提示",
  //   "small": "Toast",
  //   "type": "plus_tags",
  //   "status": "todo",
  // },
  //
  // {
  //   "icon": "",
  //   "link": "contact",
  //   "title": "联系人列表",
  //   "small": "Contacts List",
  //   "type": "layout",
  //   "status": "todo",
  // },
];

module.exports = list_tags;
