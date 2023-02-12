export const defaultNamespace = 'kl'
const statePrefix = 'is-'

/**
 * 生成 bem
 * @param {} namespace 命名空间
 * @param {*} block 块
 * @param {*} blockSuffix 块多个单词
 * @param {*} element 元素
 * @param {*} modifier 修饰符
 * @returns
 */
const _bem = (namespace :any, block :any, blockSuffix :any, element :any, modifier :any) => {
  let cls = `${namespace}-${block}` // el-button
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

export const useNamespace = (block :any) => {
  // 默认命名空间
  const namespace = defaultNamespace
  // b() => el-button
  const b = (blockSuffix = '') => _bem(namespace, block, blockSuffix, '', '')
  // e(primary) => el-button__primary
  const e = (element :any) => element ? _bem(namespace, block, '', element, '') : ''
  // m(primary) => el-button--primary
  const m = (modifier :any) => modifier ? _bem(namespace, block, '', '', modifier) : ''

  const be = (blockSuffix :any, element :any) => blockSuffix && element
    ? _bem(namespace, block, blockSuffix, element, '')
    : ''

  const em = (element :any, modifier :any) => element && modifier
    ? _bem(namespace, block, '', element, modifier)
    : ''

  const bm = (blockSuffix :any, modifier :any) => blockSuffix && modifier
    ? _bem(namespace, block, blockSuffix, '', modifier)
    : ''

  const bem = (blockSuffix :any, element :any, modifier :any) => blockSuffix && element && modifier
    ? _bem(namespace, block, blockSuffix, element, modifier)
    : ''
  // is(disabled) => is-disabled
  const is = (name :any, ...args :any) => {
    const state = args.length >= 1 ? args[0] : true
    return name && state ? `${statePrefix}${name}` : ''
  }
  
  return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
  }
}

