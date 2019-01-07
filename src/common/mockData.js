/**
 * Created by jige on 2016/12/1.
 */
// 使用 Mock
import Mock from 'mockjs'

//删除用户
Mock.mock(/.*?\/manage\/delUser$/, 'post', function () {
    return {
        statusCode: 200,
        message: "删除成功"
    }
});
