/*
* @Author: chuxiao
* @Date:   2017-07-01 15:35:57
* @Last Modified by:   WilliamChan
* @Last Modified time: 2017-07-01 15:47:57
*/
import * as api from '@/store/api/issues'
import marked from 'marked'

export default {
	namespaced: true,
	state: {
		list: [],
		data: {},
		markedString: '',
	},
	getters: {
		markedStr: (state, getters) => {
			const str = marked(state.data.body)
    	return str
  	}
	},
	actions: {
		GET_ISSUES ({ commit }, params) {
			return api.getIssues().then(res => {
				commit('GET_ISSUES', res.data)
			}).catch(err => {

			})
		},
		GET_ISSUE ({ commit }, params) {
			return api.getIssue(params).then(res => {
				commit('GET_ISSUE', res.data)
			}).catch(err => {

			})
		},
	},
	mutations: {
		GET_ISSUES (state, list) {
			state.list = list
		},
		GET_ISSUE (state, data) {
			state.data = data
			state.markedString = marked(data.body)
		}
	}
}
