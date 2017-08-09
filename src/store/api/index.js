/*
* @Author: cx
* @Date:   2017-07-01 11:50:13
* @Last Modified by:   cx
* @Last Modified time: 2017年07月20日18:17:44
*/

'use strict'

import axios from 'axios'

const Authorization = new Buffer(':2544a072f6d5da039107453cacdf8cf47ef6f37e').toString('base64')


const onRequest = req => {
	return req
}

const onRequestError = err => {
	return Promise.reject(error)
}

const onResponse = res => {
	return Promise.resolve(res)
}

export const onResponseError = error => {
	if (!error.response) {
		// TODO
		// 请求失败
	} else {
		// 错误
	}
	return Promise.reject(error)
}

export const http = axios.create({
	baseURL: 'https://api.github.com',
	timeout: 10000,
	headers: {
		Authorization: `Basic ${Authorization}`,
		'Content-Type': 'application/json',
	}
})

http.interceptors.request.use(onRequest, onRequestError);
http.interceptors.response.use(onResponse, onResponseError);

export const repo = 'blog'
export const owner = 'Murphycx94';
