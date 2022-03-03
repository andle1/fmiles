const { config } = require("vuepress-theme-hope");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = config({

  serviceWorker: true, // 是否开启 PWA
  port: "8080",
  title: "fmiles",
  description: "Java个人博客",
  //指定 vuepress build 的输出目录
  dest: "./dist",
  base: "/andle1/",
  // 是否开启默认预加载js
  shouldPrefetch: (file, type) => false,

  configureWebpack: {
    //vuepress 编译压缩
    plugins: [new CompressionPlugin({
      filename: "[path].gz", //编译后的文件名
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,//需要编译的文件
      threshold: 10240,//需要编译的文件大小
      minRatio: 0.8,//压缩比
      deleteOriginalAssets: false,//编译时是否删除源文件
    })],
  },

  head: [
	// 移动端相关配置
	['link', { rel: 'manifest', href: '/photo.jpg' }],
	['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
    // 百度站点验证
    ["meta", { name: "baidu-site-verification", content: "code-IZvTs9l2OK" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
    // 添加百度统计
    [
      "script", {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?5dd2e8c97962d57b7b8fea1737c01743";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },
  themeConfig: {
    logo: "/logo.png", hostname: "https://fmiles.cn/", author: "siyue", repo: "https://github.com/andle1/fmiles",
    editLinks: true, docsDir: 'docs', seo: true,
	// 顶部导航栏
    nav: [
	 // 默认路径是配置的 docs
      { text: "主页", icon: "java", link: "/home", }
    ],
	// 侧边栏
    sidebar: {
      '/': [{
        title: "Java", icon: "java", prefix: "java/",
        children: [
          {
            title: "基础", prefix: "basis/",
             children: [
             
			 ]
          },
          {
            title: "容器", prefix: "collection/",
            children: [],
          },
          {
            title: "并发编程", prefix: "concurrent/",
            children: [
              "java-concurrent-questions-01", "java-concurrent-questions-02",
              {
                title: "重要知识点",
                children: ["java-thread-pool-summary", "java-thread-pool-best-practices", "java-concurrent-collections", "aqs", "reentrantlock",
                  "atomic-classes", "threadlocal", "completablefuture-intro"],
              },
            ],
          },
          {
            title: "JVM", prefix: "jvm/",
            children: [
				{
					title: "垃圾回收",prefix: "gc/",
					children: ["gc"],
				},
				{
					title: "字节码",prefix: "bytecode/",
					children: [],
				},
				{
					title: "类加载器",prefix: "classloader/",
					children: [],
				},
				{
					title: "内存",prefix: "memory/",
					children: [],
				}
			],
          }
        ]
		}]
    },
    blog: {
      sidebarDisplay: "mobile",
      links: {
        Github: "https://github.com/andle1",
        Gitee: "https://gitee.com/andle1",
      },
    },
    footer: {
      display: true,
      content: '<a href="https://beian.miit.gov.cn/" target="_blank">皖ICP备19004457号</a>',
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: false,
      presentation: {
        plugins: [
          "highlight", "math", "search", "notes", "zoom", "anything", "audio", "chalkboard",
        ],
      },
    },

    //pwa: {
      favicon: "/favicon.ico",
      cachePic: false,
      cacheHTML: false,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  //},
});
