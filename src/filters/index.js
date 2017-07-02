/*
* @Author: cx
* @Date:   2017-07-02 01:41:35
* @Last Modified by:   cx
* @Last Modified time: 2017-07-02 01:41:42
*/

export const txtFilter = (str) => {
  const regex = /[\u4e00-\u9fa5{}=>\sa-zA-Z0-9]+/gi
  return str.match(regex).join('').slice(0,55) + '...'
}
