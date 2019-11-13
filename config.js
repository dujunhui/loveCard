/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://love.inweihai.com';
//var host = 'https://www.test.com';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 登录地址，用于建立会话
        loginUrl: `${host}/weapp/login`,

        // 测试的请求地址，用于测试会话
        requestUrl: `${host}/weapp/user`,

        // 测试的信道服务地址
        tunnelUrl: `${host}/weapp/tunnel`,

        // 上传图片接口
        uploadUrl: `${host}/weapp/upload`,

        // 获取点赞结果接口
        praiseUrl: `${host}/weapp/praise`,

        // 提交祝福
        blessing: `${host}/weapp/blessing`,
        // 获取祝福信息
        blessingData: `${host}/weapp/blessingData`
    }
};

module.exports = config;
