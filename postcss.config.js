module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-plugin-px2rem')({
            remUnit: 37.5,
            selectorBlackList: ['vant', 'mu'], // 忽略转换正则匹配项
            propList: ['*']
        })
    ]
}