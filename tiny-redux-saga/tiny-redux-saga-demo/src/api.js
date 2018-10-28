const pools = ['手机', '电脑', '平板', '耳机', 'kindle', '手表', '衣服', '鞋子', '帽子', '口红'];
function genList() {
  return pools.slice(Math.floor(Math.random() * 10)).map(i => ({desc: i}))
}

export const mock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve(genList()) : reject(new Error('request error'))
    }, Math.random() * 2000)
  });
}