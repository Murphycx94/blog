/*
* @Author: chuxiao
* @Date:   2017-07-01 15:35:57
* @Last Modified by:   WilliamChan
* @Last Modified time: 2017-07-01 15:47:57
*/
import * as api from '@/store/api/issues'

export default {
	namespaced: true,
	state: {
		data: [],
	},
	getters: {},
	actions: {
		GET_ISSUES ({ commit }, params) {
			return api.getIssues().then(res => {
				commit('GET_ISSUES', res.data)
			}).catch(err => {
				reject(err)
			})
		},
	},
	mutations: {
		GET_ISSUES (state, data) {
			state.data = data
		}
	}
}
