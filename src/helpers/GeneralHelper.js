export const getNewInstanceOfObj = obj => Object.assign({}, obj);

export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
