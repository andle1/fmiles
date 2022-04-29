(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{648:function(_,v,o){"use strict";o.r(v);var c=o(1),t=Object(c.a)({},(function(){var _=this,v=_.$createElement,o=_._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[o("h1",{attrs:{id:"binlog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#binlog"}},[_._v("#")]),_._v(" binLog")]),_._v(" "),o("h2",{attrs:{id:"概念"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[_._v("#")]),_._v(" 概念")]),_._v(" "),o("p",[o("code",[_._v("redo log")]),_._v("它是物理日志，记录内容是“在某个数据页上做了什么修改”，属于"),o("code",[_._v("InnoDB")]),_._v("存储引擎。")]),_._v(" "),o("p",[_._v("而"),o("code",[_._v("binlog")]),_._v("是逻辑日志，记录内容是语句的原始逻辑，类似于“给ID=2这一行的c字段加1”，属于"),o("code",[_._v("MySQL Server")]),_._v("层。")]),_._v(" "),o("p",[_._v("不管用什么存储引擎，只要发生了表数据更新，都会产生"),o("code",[_._v("binlog")]),_._v("日志。")]),_._v(" "),o("p",[_._v("那"),o("code",[_._v("binlog")]),_._v("到底是用来干嘛的？")]),_._v(" "),o("p",[_._v("可以说"),o("code",[_._v("MySQL")]),_._v("数据库的"),o("strong",[_._v("数据备份、主备、主主、主从")]),_._v("都离不开"),o("code",[_._v("binlog")]),_._v("，需要依靠"),o("code",[_._v("binlog")]),_._v("来同步数据，保证数据一致性。")]),_._v(" "),o("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nxiaXqrSndLqJZv7ic9wSaRYtbPVxIRF2q52j5bF5rNnZZWXMlH75uJLIOficicYib5ib6tPVNrys15RrNw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),_._v(" "),o("p",[o("code",[_._v("binlog")]),_._v("会记录所有涉及更新数据的逻辑操作，并且是顺序写。")]),_._v(" "),o("h2",{attrs:{id:"记录格式"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#记录格式"}},[_._v("#")]),_._v(" 记录格式")]),_._v(" "),o("p",[o("code",[_._v("binlog")]),_._v("日志有三种格式，可以通过"),o("code",[_._v("binlog_format")]),_._v("参数指定。")]),_._v(" "),o("ul",[o("li",[o("strong",[_._v("statement")])]),_._v(" "),o("li",[o("strong",[_._v("row")])]),_._v(" "),o("li",[o("strong",[_._v("mixed")])])]),_._v(" "),o("p",[_._v("指定"),o("code",[_._v("statement")]),_._v("，记录的内容是"),o("code",[_._v("SQL")]),_._v("语句原文，比如执行一条"),o("code",[_._v("update T set update_time=now() where id=1")]),_._v("，记录的内容如下。")]),_._v(" "),o("p",[o("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nxiaXqrSndLqJZv7ic9wSaRYtIct6NdhQicG44BZRlAicFZ60Kr5bmuvFWgN4fa3uicj5cYUNTejPiach9w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片",loading:"lazy"}})]),_._v(" "),o("p",[_._v("同步数据时，会执行记录的"),o("code",[_._v("SQL")]),_._v("语句，但是有个问题，"),o("code",[_._v("update_time=now()")]),_._v("这里会获取当前系统时间，直接执行会导致与原库的数据不一致。")]),_._v(" "),o("p",[_._v("为了解决这种问题，我们需要指定为"),o("code",[_._v("row")]),_._v("，记录的内容不再是简单的"),o("code",[_._v("SQL")]),_._v("语句了，还包含操作的具体数据，记录内容如下。")]),_._v(" "),o("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nxiaXqrSndLqJZv7ic9wSaRYt2RFw9v7vvUOPhMDhIR0yZa2QeD4PuWpKoUW2RV433icYuytoPqbIV9w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),_._v(" "),o("p",[o("code",[_._v("row")]),_._v("格式记录的内容看不到详细信息，要通过"),o("code",[_._v("mysqlbinlog")]),_._v("工具解析出来。")]),_._v(" "),o("p",[o("code",[_._v("update_time=now()")]),_._v("变成了具体的时间"),o("code",[_._v("update_time=1627112756247")]),_._v("，条件后面的@1、@2、@3都是该行数据第1个~3个字段的原始值（"),o("strong",[_._v("假设这张表只有3个字段")]),_._v("）。")]),_._v(" "),o("p",[_._v("这样就能保证同步数据的一致性，通常情况下都是指定为"),o("code",[_._v("row")]),_._v("，这样可以为数据库的恢复与同步带来更好的可靠性。")]),_._v(" "),o("p",[_._v("但是这种格式，需要更大的容量来记录，比较占用空间，恢复与同步时会更消耗"),o("code",[_._v("IO")]),_._v("资源，影响执行速度。")]),_._v(" "),o("p",[_._v("所以就有了一种折中的方案，指定为"),o("code",[_._v("mixed")]),_._v("，记录的内容是前两者的混合。")]),_._v(" "),o("p",[o("code",[_._v("MySQL")]),_._v("会判断这条"),o("code",[_._v("SQL")]),_._v("语句是否可能引起数据不一致，如果是，就用"),o("code",[_._v("row")]),_._v("格式，否则就用"),o("code",[_._v("statement")]),_._v("格式。")]),_._v(" "),o("h2",{attrs:{id:"写入机制"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#写入机制"}},[_._v("#")]),_._v(" "),o("strong",[_._v("写入机制")])]),_._v(" "),o("p",[o("code",[_._v("binlog")]),_._v("的写入时机也非常简单，事务执行过程中，先把日志写到"),o("code",[_._v("binlog cache")]),_._v("，事务提交的时候，再把"),o("code",[_._v("binlog cache")]),_._v("写到"),o("code",[_._v("binlog")]),_._v("文件中。")]),_._v(" "),o("p",[_._v("因为一个事务的"),o("code",[_._v("binlog")]),_._v("不能被拆开，无论这个事务多大，也要确保一次性写入，所以系统会给每个线程分配一个块内存作为"),o("code",[_._v("binlog cache")]),_._v("。")]),_._v(" "),o("p",[_._v("我们可以通过"),o("code",[_._v("binlog_cache_size")]),_._v("参数控制单个线程"),o("code",[_._v("binlog cache")]),_._v("大小，如果存储内容超过了这个参数，就要暂存到磁盘（"),o("code",[_._v("Swap")]),_._v("）。")]),_._v(" "),o("p",[o("code",[_._v("binlog")]),_._v("日志刷盘流程如下")]),_._v(" "),o("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nxiaXqrSndLqJZv7ic9wSaRYtrdpDibhNGocdGJebjZxtTl2JAUwN9DJu3W0gH5CuvY6Dcx5b8FGzXCA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),_._v(" "),o("ul",[o("li",[o("strong",[_._v("上图的write，是指把日志写入到文件系统的page cache，并没有把数据持久化到磁盘，所以速度比较快")])]),_._v(" "),o("li",[o("strong",[_._v("上图的  fsync，才是将数据持久化到磁盘的操作")])])]),_._v(" "),o("p",[o("code",[_._v("write")]),_._v("和"),o("code",[_._v("fsync")]),_._v("的时机，可以由参数"),o("code",[_._v("sync_binlog")]),_._v("控制，默认是"),o("code",[_._v("0")]),_._v("。")]),_._v(" "),o("p",[_._v("为"),o("code",[_._v("0")]),_._v("的时候，表示每次提交事务都只"),o("code",[_._v("write")]),_._v("，由系统自行判断什么时候执行"),o("code",[_._v("fsync")]),_._v("。")]),_._v(" "),o("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nxiaXqrSndLqJZv7ic9wSaRYtZm96AgiaZtGFS52ib9yu2crr1f6CJc5XS9zRSahLWg3rgQPlXPe26Eog/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),_._v(" "),o("p",[_._v("虽然性能得到提升，但是机器宕机，"),o("code",[_._v("page cache")]),_._v("里面的"),o("code",[_._v("binglog")]),_._v("会丢失。")]),_._v(" "),o("p",[_._v("为了安全起见，可以设置为"),o("code",[_._v("1")]),_._v("，表示每次提交事务都会执行"),o("code",[_._v("fsync")]),_._v("，就如同"),o("strong",[_._v("binlog日志刷盘流程")]),_._v("一样。")]),_._v(" "),o("p",[_._v("最后还有一种折中方式，可以设置为"),o("code",[_._v("N(N>1)")]),_._v("，表示每次提交事务都"),o("code",[_._v("write")]),_._v("，但累积"),o("code",[_._v("N")]),_._v("个事务后才"),o("code",[_._v("fsync")]),_._v("。")]),_._v(" "),o("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nxiaXqrSndLqJZv7ic9wSaRYtQKz5uIObVfZBWzO59SE9DPpDp8SXovvkj6cfJrHibGwm0JRfgyMdk5g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),_._v(" "),o("p",[_._v("在出现"),o("code",[_._v("IO")]),_._v("瓶颈的场景里，将"),o("code",[_._v("sync_binlog")]),_._v("设置成一个比较大的值，可以提升性能。")]),_._v(" "),o("p",[_._v("同样的，如果机器宕机，会丢失最近"),o("code",[_._v("N")]),_._v("个事务的"),o("code",[_._v("binlog")]),_._v("日志。")])])}),[],!1,null,null,null);v.default=t.exports}}]);