(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{192:function(e,n,s){"use strict";s.r(n);var a=s(0),t=Object(a.a)({},function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress平日所记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress平日所记","aria-hidden":"true"}},[e._v("#")]),e._v(" VuePress平日所记")]),e._v(" "),s("h2",{attrs:{id:"vuepress的仅有的三种路径方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress的仅有的三种路径方式","aria-hidden":"true"}},[e._v("#")]),e._v(" VuePress的仅有的三种路径方式")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("1. 相对路径  \n![image](../../assets/ui/1.png)\n![image](~ui/1.png)//通过config.js configureWebpack配置\n\nconfig.js\nconfigureWebpack: {\n    resolve: {\n        alias: {\n            'ui': '../../assets/ui',\n            'ui-en': '../../../assets/ui'\n        }\n    }\n},\n\n2. 公共路径\n![image](/banner.png)\n\n3. 公共路径跟随\n//代码块方式引入公共图片 必须带上base的前缀（不带在dev不报错 build后读取不到）\n<img src=\"/myblog/banner.png\" alt=\"foo\">\n//为了改善带上base的前缀被重命名 出现了$withBase  注意必须 是:src开头 只能读取公共文件下的内容\n<img :src=\"$withBase('/banner.png')\" alt=\"foo\">\n")])])]),s("img",{attrs:{src:e.$withBase("/banner.png"),alt:"foo"}}),e._v(" "),s("img",{attrs:{src:"/myblog/banner.png",alt:"foo"}}),e._v(" "),s("p",[s("img",{attrs:{src:"/banner.png",alt:"image"}}),e._v(" "),s("img",{attrs:{src:"/myblog/banner.png",alt:"image"}})])])},[],!1,null,null,null);n.default=t.exports}}]);