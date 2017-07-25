/*
* @Author: cx
* @Date:   2017-07-01 11:31:04
* @Last Modified by:   cx
* @Last Modified time: 2017年07月25日17:43:54
*/

'use strict'

import Vue    from 'vue'
import Vuex   from 'vuex'

import issuesModule from '@/store/modules/issues'

Vue.use(Vuex)

export const store = new Vuex.Store({
	strict: true,
})

store.registerModule('issues', issuesModule)
