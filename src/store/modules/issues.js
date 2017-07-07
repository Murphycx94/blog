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
		data: {
			user: {
				login: '',
			},
		},
		markedString: '',
		labels: [],
	},
	actions: {
		GET_ISSUES ({ commit }, params) {
			return api.getIssues().then(res => {
				commit('GET_ISSUES', res.data)
				console.log(1)
			}).catch(err => {

			})
		},
		GET_ISSUE ({ commit }, params) {
			return api.getIssue(params).then(res => {
				commit('GET_ISSUE', res.data)
			}).catch(err => {

			})
		},
		GET_LABELS ({ commit }, params) {
			return api.getLabels(params).then(res => {
				commit('GET_LABELS', res.data)
			})
		}
	},
	mutations: {
		GET_ISSUES (state, list) {
			state.list = list
		},
		GET_ISSUE (state, data) {
			state.data = data
			state.markedString = marked(data.body)
		},
		GET_LABELS (state, data) {
			state.labels = data
		}
	}
}
