/*
* @Author: cx
* @Date:   2017-06-30 14:07:52
* @Last Modified by:   cx
* @Last Modified time: 2017-07-19 18:00:28
*/

'use strict'

import { http, repo, owner } from '@/store/api'

export const getIssues = (labels) => {
	labels = labels ?  labels : ''
	labels = labels == 'index' ? '' : labels
	return http.get(`repos/${owner}/${repo}/issues?labels=${labels}`)
}

export const getIssue = (number) => {
	return http.get(`repos/${owner}/${repo}/issues/${number}`)
}

export const getLabels = () => {
	return http.get(`repos/${owner}/${repo}/labels`)
}
