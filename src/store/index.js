/*
 * @Author: MurphyC 
 * @Date: 2017-10-02 22:48:25 
 * @Last Modified by: MurphyC
 * @Last Modified time: 2017-10-02 22:48:54
 */

"use strict"

import Vue    from 'vue'
import Vuex   from 'vuex'

import issuesModule from '@/store/modules/issues'

Vue.use(Vuex)

export const store = new Vuex.Store({
	strict: true,
})

store.registerModule('issues', issuesModule)
