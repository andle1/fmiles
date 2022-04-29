(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{650:function(_,v,o){"use strict";o.r(v);var t=o(1),c=Object(t.a)({},(function(){var _=this,v=_.$createElement,o=_._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[o("h2",{attrs:{id:"概念"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[_._v("#")]),_._v(" 概念")]),_._v(" "),o("p",[o("code",[_._v("redo log")]),_._v("（重做日志）是"),o("code",[_._v("InnoDB")]),_._v("存储引擎独有的，它让"),o("code",[_._v("MySQL")]),_._v("拥有了崩溃恢复能力。")]),_._v(" "),o("p",[_._v("比如"),o("code",[_._v("MySQL")]),_._v("实例挂了或宕机了，重启时，"),o("code",[_._v("InnoDB")]),_._v("存储引擎会使用"),o("code",[_._v("redo log")]),_._v("恢复数据，保证数据的持久性与完整性。")]),_._v(" "),o("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nzoia78ia1wnynufibsPx05L54bBA4hk3gw55HvxibrWwaj8Ms6mhmAL5RWEfk5YKiaEz4H45DUaWCYepw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),_._v(" "),o("p",[o("code",[_._v("MySQL")]),_._v("中数据是以页为单位，你查询一条记录，会从硬盘把一页的数据加载出来，加载出来的数据叫数据页，会放入到"),o("code",[_._v("Buffer Pool")]),_._v("中。")]),_._v(" "),o("p",[_._v("后续的查询都是先从"),o("code",[_._v("Buffer Pool")]),_._v("中找，没有命中再去硬盘加载，减少硬盘"),o("code",[_._v("IO")]),_._v("开销，提升性能。")]),_._v(" "),o("p",[_._v("更新表数据的时候，也是如此，发现"),o("code",[_._v("Buffer Pool")]),_._v("里存在要更新的数据，就直接在"),o("code",[_._v("Buffer Pool")]),_._v("里更新。")]),_._v(" "),o("p",[_._v("然后会把“在某个数据页上做了什么修改”记录到重做日志缓存（"),o("code",[_._v("redo log buffer")]),_._v("）里，接着刷盘到"),o("code",[_._v("redo log")]),_._v("文件里。")]),_._v(" "),o("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nzoia78ia1wnynufibsPx05L54zUDHSoo2miaeyicIo2SGBY0FicnkbWeicrTlQH0LenmpScjibL35u61KVoQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),_._v(" "),o("p",[_._v("理想情况，事务一提交就会进行刷盘操作，但实际上，刷盘的时机是根据策略来进行的。")]),_._v(" "),o("blockquote",[o("p",[_._v("小贴士：每条redo记录由“表空间号+数据页号+偏移量+修改数据长度+具体修改的数据”组成")])]),_._v(" "),o("h2",{attrs:{id:"刷盘时机"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#刷盘时机"}},[_._v("#")]),_._v(" 刷盘时机")]),_._v(" "),o("p",[o("code",[_._v("InnoDB")]),_._v("存储引擎为"),o("code",[_._v("redo log")]),_._v("的刷盘策略提供了"),o("code",[_._v("innodb_flush_log_at_trx_commit")]),_._v("参数，它支持三种策略")]),_._v(" "),o("ul",[o("li",[o("strong",[_._v("设置为0的时候，表示每次事务提交时不进行刷盘操作")])]),_._v(" "),o("li",[o("strong",[_._v("设置为1的时候，表示每次事务提交时都将进行刷盘操作（默认值）")])]),_._v(" "),o("li",[o("strong",[_._v("设置为2的时候，表示每次事务提交时都只把redo log buffer内容写入page cache")])])]),_._v(" "),o("p",[_._v("另外"),o("code",[_._v("InnoDB")]),_._v("存储引擎有一个后台线程，每隔"),o("code",[_._v("1")]),_._v("秒，就会把"),o("code",[_._v("redo log buffer")]),_._v("中的内容写到文件系统缓存（"),o("code",[_._v("page cache")]),_._v("），然后调用"),o("code",[_._v("fsync")]),_._v("刷盘。由于 fsync 的效率取决于磁盘的性能，因此磁盘的性能决定了事务提交的性能，也就是数据库的性能。")]),_._v(" "),o("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nzoia78ia1wnynufibsPx05L54Ad70tZojSrwI8YOGP7ibboticxTic0pmOk6FClqx08AA75BictzAdJDD7g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),_._v(" "),o("p",[_._v("也就是说，一个没有提交事务的"),o("code",[_._v("redo log")]),_._v("记录，也可能会刷盘。")]),_._v(" "),o("p",[_._v("为什么呢？")]),_._v(" "),o("p",[_._v("因为在事务执行过程"),o("code",[_._v("redo log")]),_._v("记录是会写入"),o("code",[_._v("redo log buffer")]),_._v("中，这些"),o("code",[_._v("redo log")]),_._v("记录会被后台线程刷盘。")]),_._v(" "),o("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nzoia78ia1wnynufibsPx05L54v2N1so73Jm9TKRrmQCyA3dxNmMgwJhCiaNYrKyXBxv5ydMQm9GRIhUg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),_._v(" "),o("p",[_._v("除了后台线程每秒"),o("code",[_._v("1")]),_._v("次的轮询操作，还有一种情况，当"),o("code",[_._v("redo log buffer")]),_._v("占用的空间即将达到"),o("code",[_._v("innodb_log_buffer_size")]),_._v("一半的时候，后台线程会主动刷盘。")]),_._v(" "),o("p",[_._v("下面是不同刷盘策略的流程图")]),_._v(" "),o("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nzoia78ia1wnynufibsPx05L54oWOszyDsmLmIt7hhyicaia7PMUL5kMr1rUQ8AhA2QqaFJfucySByb5ag/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),_._v(" "),o("p",[_._v("为"),o("code",[_._v("0")]),_._v("时，如果"),o("code",[_._v("MySQL")]),_._v("挂了或宕机可能会有"),o("code",[_._v("1")]),_._v("秒数据的丢失。")]),_._v(" "),o("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nzoia78ia1wnynufibsPx05L54APdmn5HovTEfk1qS4Z8jX9rGFQqqpAibibfRuR6K3VmxWk7CoUBe8QbQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),_._v(" "),o("p",[_._v("为"),o("code",[_._v("1")]),_._v("时， 只要事务提交成功，"),o("code",[_._v("redo log")]),_._v("记录就 一定在硬盘里，不会有任何数据丢失。")]),_._v(" "),o("p",[_._v("如果事务执行期间"),o("code",[_._v("MySQL")]),_._v("挂了或宕机，这部分日志丢了，但是事务并没有提交，所以日志丢了也不会有损失。")]),_._v(" "),o("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nzoia78ia1wnynufibsPx05L54IlvrwXTNgOcv8aCIicNXzhicdOKqicpibJOLLhOqmicBHWoTayWm7TfEYAQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),_._v(" "),o("p",[_._v("为"),o("code",[_._v("2")]),_._v("时， 只要事务提交成功，"),o("code",[_._v("redo log buffer")]),_._v("中的内容只写入文件系统缓存（"),o("code",[_._v("page cache")]),_._v("）。")]),_._v(" "),o("p",[_._v("如果仅仅只是"),o("code",[_._v("MySQL")]),_._v("挂了不会有任何数据丢失，但是宕机可能会有"),o("code",[_._v("1")]),_._v("秒数据的丢失。")]),_._v(" "),o("h2",{attrs:{id:"日志文件组"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#日志文件组"}},[_._v("#")]),_._v(" "),o("strong",[_._v("日志文件组")])]),_._v(" "),o("p",[_._v("硬盘上存储的"),o("code",[_._v("redo log")]),_._v("日志文件不只一个，而是以一个"),o("strong",[_._v("日志文件组")]),_._v("的形式出现的，每个的"),o("code",[_._v("redo")]),_._v("日志文件大小都是一样的。")]),_._v(" "),o("p",[_._v("比如可以配置为一组"),o("code",[_._v("4")]),_._v("个文件，每个文件的大小是"),o("code",[_._v("1GB")]),_._v("，整个"),o("code",[_._v("redo log")]),_._v("日志文件组可以记录"),o("code",[_._v("4G")]),_._v("的内容。")]),_._v(" "),o("p",[_._v("它采用的是环形数组形式，从头开始写，写到末尾又回到头循环写，如下图所示。")]),_._v(" "),o("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nzoia78ia1wnynufibsPx05L54XsdKnbUPKlA4OUSQY709Mhr5G55YB6TiadxyrtVQXUzCJ0HbRiaKw5zg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),_._v(" "),o("p",[_._v("在个"),o("strong",[_._v("日志文件组")]),_._v("中还有两个重要的属性，分别是"),o("code",[_._v("write pos、checkpoint")])]),_._v(" "),o("ul",[o("li",[o("strong",[_._v("write pos是当前记录的位置，一边写一边后移")])]),_._v(" "),o("li",[o("strong",[_._v("checkpoint是当前要擦除的位置，也是往后推移")])])]),_._v(" "),o("p",[_._v("每次刷盘"),o("code",[_._v("redo log")]),_._v("记录到"),o("strong",[_._v("日志文件组")]),_._v("中，"),o("code",[_._v("write pos")]),_._v("位置就会后移更新。")]),_._v(" "),o("p",[_._v("每次"),o("code",[_._v("MySQL")]),_._v("加载"),o("strong",[_._v("日志文件组")]),_._v("恢复数据时，会清空加载过的"),o("code",[_._v("redo log")]),_._v("记录，并把"),o("code",[_._v("checkpoint")]),_._v("后移更新。")]),_._v(" "),o("p",[o("code",[_._v("write pos")]),_._v("和"),o("code",[_._v("checkpoint")]),_._v("之间的还空着的部分可以用来写入新的"),o("code",[_._v("redo log")]),_._v("记录。")]),_._v(" "),o("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nzoia78ia1wnynufibsPx05L54ep2l4ibKADGr0jytCgLvDW1G8mibfoyn0GNtFXQzSnuu9lhIAL4sGw4Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),_._v(" "),o("p",[_._v("如果"),o("code",[_._v("write pos")]),_._v("追上"),o("code",[_._v("checkpoint")]),_._v("，表示"),o("strong",[_._v("日志文件组")]),_._v("满了，这时候不能再写入新的"),o("code",[_._v("redo log")]),_._v("记录，"),o("code",[_._v("MySQL")]),_._v("得停下来，清空一些记录，把"),o("code",[_._v("checkpoint")]),_._v("推进一下。")]),_._v(" "),o("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/23OQmC1ia8nzoia78ia1wnynufibsPx05L5428py5ic4JkiaD7hyKr8zZZbCZjtb0Ah7x8Vy7t15gBN2eaGs5a5icvZ2Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),_._v(" "),o("h4",{attrs:{id:"注意"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[_._v("#")]),_._v(" 注意：")]),_._v(" "),o("p",[_._v("在数据已经刷盘之后，会从 redo log 日志文件里删除。")]),_._v(" "),o("h3",{attrs:{id:"小结"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[_._v("#")]),_._v(" 小结")]),_._v(" "),o("p",[_._v("现在我们来思考一问题，只要每次把修改后的数据页直接刷盘不就好了，还有"),o("code",[_._v("redo log")]),_._v("什么事。")]),_._v(" "),o("p",[_._v("它们不都是刷盘么？差别在哪里？")]),_._v(" "),o("p",[_._v("实际上，数据页大小是"),o("code",[_._v("16KB")]),_._v("，刷盘比较耗时，可能就修改了数据页里的几"),o("code",[_._v("Byte")]),_._v("数据，有必要把完整的数据页刷盘吗？")]),_._v(" "),o("p",[_._v("而且数据页刷盘是随机写，因为一个数据页对应的位置可能在硬盘文件的随机位置，所以性能是很差。")]),_._v(" "),o("p",[_._v("如果是写"),o("code",[_._v("redo log")]),_._v("，一行记录可能就占几十"),o("code",[_._v("Byte")]),_._v("，只包含表空间号、数据页号、磁盘文件偏移 量、更新值，再加上是顺序写，所以刷盘速度很快。")]),_._v(" "),o("p",[_._v("所以用"),o("code",[_._v("redo log")]),_._v("形式记录修改内容，性能会远远超过刷数据页的方式，这也让数据库的并发能力更强。")])])}),[],!1,null,null,null);v.default=c.exports}}]);