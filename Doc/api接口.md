# 1. 用户部分
## 一级路由：/users
### 二级路由
### 注册
url：/register
方法：POST
传递参数：username, password
返回值：注册成功或失败

#### 登录
url：/login
方法：POST
传递参数：username, password
返回值：登录成功或失败，token

# 2. 图片部分
## 一级路由：/photos
### 二级路由
### 图片上传
url：/upload
方法：POST
传递参数：file
返回值：上传成功或失败

### 图片删除
url：/delete