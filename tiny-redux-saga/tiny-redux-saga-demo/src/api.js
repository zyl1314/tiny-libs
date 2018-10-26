const pools = ['手机', '电脑', '平板', '耳机'];
function genList() {
  return pools.map(i => ({desc: i}))
}

export const mock = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(genList())
    }, Math.random() * 2000)
  });
}