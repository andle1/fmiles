(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{651:function(o,t,e){"use strict";e.r(t);var n=e(1),r=Object(n.a)({},(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("h2",{attrs:{id:"undo-log-格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#undo-log-格式"}},[o._v("#")]),o._v(" Undo log 格式")]),o._v(" "),e("p",[o._v("在InnoDB引擎中，undo log分为：")]),o._v(" "),e("ul",[e("li",[o._v("insert undo log")]),o._v(" "),e("li",[o._v("update undo log")])]),o._v(" "),e("p",[o._v("insert undo log是指在insert操作中产生的undo log，因为insert操作的记录，只对事务本身可见，对其他事务不可见（这是事务隔离性的要求），故该undo log可以在事务提交后直接删除，不需要进行purge操作。而update undo log记录的是delete和update操作产生的undo log。该undo log可能需要提供MVCC机制，因此不能在事务提交时就进行删除，提交时放入undo log链表，等待purge线程进行最后的删除。")]),o._v(" "),e("h2",{attrs:{id:"purge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#purge"}},[o._v("#")]),o._v(" purge")]),o._v(" "),e("p",[o._v("对于一条delete语句 "),e("code",[o._v("delete from t where a = 1")]),o._v("，如果列a有聚集索引，则不会进行真正的删除，而只是在主键列等于1的记录delete flag设置为1，即记录还是存在在B+树中。而对于update操作，不是直接对记录进行更新，而是标识旧记录为删除状态，然后新产生一条记录。那这些旧版本标识位删除的记录何时真正的删除？怎么删除？")]),o._v(" "),e("p",[o._v("其实InnoDB是通过undo日志来进行旧版本的删除操作的，在InnoDB内部，这个操作被称之为purge操作，原来在srv_master_thread主线程中完成，后来进行优化，开辟了purge线程进行purge操作，并且可以设置purge线程的数量。purge操作每10s进行一次。")]),o._v(" "),e("p",[o._v("为了节省存储空间，InnoDB存储引擎的undo log设计是这样的：一个页上允许多个事务的undo log存在。虽然这不代表事务在全局过程中提交的顺序，但是后面的事务产生的undo log总在最后。此外，InnoDB存储引擎还有一个history列表，它根据事务提交的顺序，将undo log进行连接，如下面的一种情况：")]),o._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"images/999329-50f21af4015111d3.png",alt:"img"}}),o._v(" "),e("p",[o._v("在执行purge过程中，InnoDB存储引擎首先从history list中找到第一个需要被清理的记录，这里为trx1，清理之后InnoDB存储引擎会在trx1所在的Undo page中继续寻找是否存在可以被清理的记录，这里会找到事务trx3，接着找到trx5，但是发现trx5被其他事务所引用而不能清理，故再去history list中取查找，发现最尾端的记录时trx2，接着找到trx2所在的Undo page，依次把trx6、trx4清理，由于Undo page2中所有的记录都被清理了，因此该Undo page可以进行重用。")]),o._v(" "),e("p",[o._v("InnoDB存储引擎这种先从history list中找undo log，然后再从Undo page中找undo log的设计模式是为了避免大量随机读操作，从而提高purge的效率。")]),o._v(" "),e("p",[o._v("Uodolog 会产生 redolog，也就是undolog 的产生会伴随着 redo log 的产生，这是因为 undolog 也需要持久性的保护。")])])}),[],!1,null,null,null);t.default=r.exports}}]);