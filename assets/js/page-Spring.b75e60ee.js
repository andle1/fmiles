(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{672:function(t,e,r){"use strict";r.r(e);var a=r(1),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"spring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring"}},[t._v("#")]),t._v(" Spring")]),t._v(" "),r("h4",{attrs:{id:"spring-循环依赖怎么解决-说出三级缓存源码细节"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-循环依赖怎么解决-说出三级缓存源码细节"}},[t._v("#")]),t._v(" spring 循环依赖怎么解决（说出三级缓存源码细节）")]),t._v(" "),r("p",[r("strong",[t._v("循环依赖")]),t._v("：循环依赖就是两个或多个 bean 互相之间的持有对方。")]),t._v(" "),r("h5",{attrs:{id:"spring-中循环依赖处理分为-3-种情况"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-中循环依赖处理分为-3-种情况"}},[t._v("#")]),t._v(" Spring 中循环依赖处理分为 3 种情况：")]),t._v(" "),r("p",[t._v("1、构造器循环依赖；通过构造器注入构成的循环依赖，这种是没办法解决的。")]),t._v(" "),r("p",[t._v("2、setter 循环依赖：通过 setter 注入方式构成的循环依赖。通过提前暴露刚完成构造器注入但未完成其他步骤的 bean 来完成的，只能解决单例作用域的 bean 循环依赖。")]),t._v(" "),r("p",[t._v("3、prototype 范围的依赖处理，这种是无法完成依赖注注入的。")]),t._v(" "),r("h5",{attrs:{id:"解决方法就是三级缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决方法就是三级缓存"}},[t._v("#")]),t._v(" 解决方法就是三级缓存：")]),t._v(" "),r("p",[t._v("singletonFactories 单例对象工厂的缓存。在真正创建 bean 的方法 doCreateBean 中，实例化一个 bean 之前，先把 bean 放入 singletonFactories 让这个 bean 可以提前被获取到。这就是第三级缓存。")]),t._v(" "),r("p",[t._v("earlySingletonObjects 存放暴露的 bean。第二级缓存。")]),t._v(" "),r("p",[t._v("singletonObjects  单例对象的缓存。第一级别缓存。")]),t._v(" "),r("p",[t._v("举例说明流程：当类 A 创建的时候，第一次通过 getSingleton() 获取不到 bean，就会去创建 bean。在 doCreateBean()  方法中，在调用createBeanInstance() 之后，populateBean之前，也就是实例化后属性填充之前，会把类 A 的 bean 提前放入 singletonFactories中。然后属性填充的时候发现依赖的 B 不存在，就会去创建B。创建流程和 A 一致，B 在获取 A的时候，发现A在创建中，尝试一级缓存 singletonObjects 获取 A，但是肯定失败，因为 A还没有初始化完成的；然后接着尝试二级缓存 earlySingletonObjects，也是获取不到的，最后尝试三级缓存 singletonFactories，由于 A 一级提前曝光了，所以能获取到，直接完成加载。")]),t._v(" "),r("h5",{attrs:{id:"为什么需要第三级缓存-或者说为什么将-singletonfactories-对象去掉加入-earlysingletonobjects中-直接放入不行吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要第三级缓存-或者说为什么将-singletonfactories-对象去掉加入-earlysingletonobjects中-直接放入不行吗"}},[t._v("#")]),t._v(" 为什么需要第三级缓存？或者说为什么将 singletonFactories 对象去掉加入 earlySingletonObjects中？直接放入不行吗？")]),t._v(" "),r("p",[t._v("有三级缓存的基础上，二级缓存中的对象肯定是已经被代理过的(对象需要代理的情况)，而去掉三级缓存的话，二级缓存中的对象可能是已经被代理了，也可能是对象刚放进去，还没有进行代理，这种时候对于依赖的bean就都需要多加一步判断查看从二级缓存拿到的对象是不是已经被代理了。")]),t._v(" "),r("p",[t._v("在源码角度分析：doCreateBean 方法中的 addSingletonFactory 之前，会执行 getEarlyBeanReference，这个方法会在 AbstractAutoProxyCreator 类中被改写，主要就是在 earlyProxyReferences （就是个map）中存放一下这个 bean，接着会去调用 wrapIfNecessary方法返回代理的bean，在 bean 初始化之后，也会调用 postProcessAfterInitialization，这时候会把 earlyProxyReferences 中存放的 bean 拿出来，如果相同就不会再创建代理类，即这里返回的是 orgin bean。这时候，如果没有这个三级缓存，那么这时候就会存在两种 bean。")]),t._v(" "),r("h4",{attrs:{id:"spring-bean-生命周期-源码细节-以及各个位置的设计思路-有什么可扩展的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-bean-生命周期-源码细节-以及各个位置的设计思路-有什么可扩展的"}},[t._v("#")]),t._v(" spring bean 生命周期（源码细节，以及各个位置的设计思路，有什么可扩展的）")]),t._v(" "),r("p",[t._v("Spring Bean的生命周期分为"),r("code",[t._v("四个阶段")]),t._v("和"),r("code",[t._v("多个扩展点")]),t._v("。\n四个阶段")]),t._v(" "),r("ul",[r("li",[t._v("实例化 Instantiation")]),t._v(" "),r("li",[t._v("属性赋值 Populate")]),t._v(" "),r("li",[t._v("初始化 Initialization")]),t._v(" "),r("li",[t._v("销毁 Destruction")])]),t._v(" "),r("p",[t._v("有 8 个后置处理的方法 4 个后置处理器的类。")]),t._v(" "),r("h4",{attrs:{id:"spring-aop-原理-动态代理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-aop-原理-动态代理"}},[t._v("#")]),t._v(" spring aop 原理（动态代理）")]),t._v(" "),r("p",[t._v("首先在讲 AOP 原理之前，有个类叫 DefaultAdvisorAutoProxyCreator，它能实现自动将所有的 advisor 生效，继承自 BeanPostProcessor。")]),t._v(" "),r("p",[t._v("bean 在创建过程中，createBean 方法中，有 initializeBean 方法  初始化一个 bean，而在这个方法中，执行每一个 BeanPostProcessor 的 postProcessAfterInitialization 方法。在通常情况下，postProcessAfterInitialization 返回的是创建的 bean 本身，但是如果存在 AOP 的情况下，那么 postProcessAfterInitialization 将会在 DefaultAdvisorAutoProxyCreator 父类 AbstractAutoProxyCreator 这一层被重写。")]),t._v(" "),r("p",[t._v("重写的逻辑中最主要的就是 createProxy 方法创建代理对象，而 createProxy 方法中最重要的就是生成 ProxyFactory 对象，通过 ProxyFactory的getProxy 方法生成代理对象。getProxy 方法需要创建一个 AOPProxy 实例，而创建 AOPProxy 实例之前，又需要创建 AOPProxyFactory，查看构造方法可以考到，这个 AOPProxyFactory 其实就是 DefaultAdvisorAutoProxyCreator，这样就用上了 DefaultAdvisorAutoProxyCreator类。然后调用createAopProxy(…)   生成 AOPProxy，这里就实现了对于 jdk 动态代理还是 CGLIB 代理的一个区分，即如果被代理类实现一个或者多个自定义接口的话，那么就会被 jdk 动态代理。回到之前，生成的 AOPProxy 调用的 getProxy 会按照不同的代理对象有不同的实现。后面就是动态代理的实现原理。")]),t._v(" "),r("h4",{attrs:{id:"spring-bean-的作用域"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-bean-的作用域"}},[t._v("#")]),t._v(" Spring Bean  的作用域？")]),t._v(" "),r("ul",[r("li",[t._v("singleton : 唯一 bean 实例，Spring 中的 bean 默认都是单例的。")]),t._v(" "),r("li",[t._v("prototype : 每次请求都会创建一个新的 bean 实例。")]),t._v(" "),r("li",[t._v("request : 每一次HTTP请求都会产生一个新的bean，该bean仅在当前HTTP request内有效。")]),t._v(" "),r("li",[t._v("session : 每一次HTTP请求都会产生一个新的 bean，该bean仅在当前 HTTP session 内有效。")]),t._v(" "),r("li",[t._v("global-session： 全局session作用域，仅仅在基于portlet的web应用中才有意义，Spring5已经没有了。Portlet是能够生成语义代码(例如：HTML)片段的小型Java Web插件。它们基于portlet容器，可以像servlet一样处理HTTP请求。但是，与 servlet 不同，每个 portlet 都有不同的会话")])]),t._v(" "),r("h4",{attrs:{id:"springboot-自动装配原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#springboot-自动装配原理"}},[t._v("#")]),t._v(" SpringBoot 自动装配原理")]),t._v(" "),r("p",[t._v("从我们日常使用 SprinBoot 来说，就是一个 @SpringBoot 注解，这个注解又主要由三个注解组成：")]),t._v(" "),r("p",[t._v("@SpringBootConfiguration 本质上就是 一个 @Configuration 。只不过为了区别其他配置类。表明这个类是一个配置类；")]),t._v(" "),r("p",[t._v("@ComponetScan 默认从添加这个注释的包开始扫描；")]),t._v(" "),r("p",[t._v("@EnableAutoConfiguration。")]),t._v(" "),r("p",[t._v("其中自动装配的实现就与这个注解有关，而这个注解定义又有两个比较重要的部分：")]),t._v(" "),r("p",[t._v("@AutoConfigurationPackage：将添加该注解的类所在的 package 作为自动配置 package 进行管理。\n@Import({AutoConfigurationImportSelector.class})：@Import 注解的作用就是把一个 bean 注入到 Spring 容器中。@Import 可以导入不同类型的 bean，其中实现了 ImportSelector 接口的 Bean，ImportSelector 接口可以根据注解信息导入需要的 Bean。")]),t._v(" "),r("p",[t._v('AutoConfigurationImportSelector 实现了 ImportSelector 接口，也就实现了这个借口中的 selectImports 方法，这个方法就是获取所有符合条件的类的全限定名，是需要被加载到 IOC 容器中的。这个方法中会调用  getCandidateConfigurations 方法，而这个 getCandidateConfigurations 底层又去调用 SpringFactoriesLoader.loadFactoryNames，里面会有个配置好的路径，FACTORIES_RESOURCE_LOCATION = "META-INF/spring.factories"; 而在这个配置类中就是 SpringBoot 写好的自动装配类。')]),t._v(" "),r("p",[t._v("但是并不是所有的自动装配类都会被一股脑注册到容器中，因为存在 @Conditional 注解，这个注解只有在满足特定条件的情况下才会被注册到容器中。拿 WebMvcAutocConfiguration 配置类举例，这有个类上有 @ConditionClass,所以必须满足要求的类 Servlet，DispatchServlet，WebMvcConfiguer 。而 @Conditionl 注解作用于 Spring 读取 Bean 定义的阶段，并且只有扫描包或者@Configuration注解类中的的Bean会使用@Conditionl注解进行判断。")]),t._v(" "),r("h4",{attrs:{id:"springboot-热部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#springboot-热部署"}},[t._v("#")]),t._v(" SpringBoot 热部署")]),t._v(" "),r("p",[t._v("spring-boot实现了热部署的功能，即在不需要对程序进行重启的情况下对程序进行迭代；")]),t._v(" "),r("p",[t._v("其原理就是监听class文件是否发生改变，如果改变则使用类加载其将字节码重新读入到"),r("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E5%86%85%E5%AD%98&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("内存"),r("OutboundLink")],1),t._v("中；缺点在于这种方式会占用大量的内存造成程序的卡顿，常用于本地开发中；")])])}),[],!1,null,null,null);e.default=o.exports}}]);