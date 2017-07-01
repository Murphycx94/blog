/*
* @Author: cx
* @Date:   2017-06-30 14:07:52
* @Last Modified by:   cx
* @Last Modified time: 2017-07-01 12:11:20
*/

'use strict'

import { http, repo, owner } from '@/store/api'

export const getIssues = () => {
	return http.get(`repos/${owner}/${repo}/issues`)
}

export const getIssue = (number) => {
	return http.get(`repos/${owner}/${repo}/issues/${number}`)
}
