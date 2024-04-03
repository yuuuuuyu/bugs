# Jenkins 持续集成/持续部署

:::tip
**什么是 CI/CD?**

CI/CD是两个独立过程的组合：持续集成和持续部署.

持续集成（CI）是构建软件和完成初始测试的过程。持续部署（CD）是将代码与基础设施相结合的过程，确保完成所有测试并遵循策略，然后将代码部署到预期环境中.

[什么是 CI/CD ？5分钟让你明白](https://zhuanlan.zhihu.com/p/654666712)

[为什么持续集成和部署在开发中非常重要？](https://blog.csdn.net/csdnnews/article/details/104624343)

[浅谈CICD与项目实战](https://anqixiang.blog.csdn.net/article/details/105078179?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-105078179-blog-120842158.235%5Ev43%5Epc_blog_bottom_relevance_base5&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-105078179-blog-120842158.235%5Ev43%5Epc_blog_bottom_relevance_base5&utm_relevant_index=6)
:::

> ***Ubuntu环境安装配置Jenkins***
> 
> Jenkins默认端口8080，服务器8080被nginx占用(当前文档网站)，启动失败
> 
> 更改 Jenkins 监听端口  `sudo vim /etc/default/jenkins`
> 
> 重启

## 安装过程

1. 查看服务器操作系统
   ```bash
   lsb_release -a
   ```
2. 查看JDK是否安装
   ```bash
   java -version
   ```
   ```bash
   // JDK安装命令
   sudo apt install openjdk-11-jre-headless
   ```
3. 下载2.406版本 Jenkins，阿里云或者华为云镜像
   ```bash
   # 阿里云
   curl -L0 https://mirrors.aliyun.com/jenkins/debian/jenkins_2.406_all.deb --output jenkins_2.406_all.deb
   # 华为云
   curl -L0 https://repo.huaweicloud.com/jenkins/debian/jenkins_2.406_all.deb --output jenkins_2.406_all.deb
   ```
4. 安装启动
   ```bash
   dpkg -i jenkins_2.406_all.deb
   ``` 
   当前步骤可能会报错，端口占用问题，重新为 Jenkins 指定新端口

5. 查看是否启动
   ```bash
   ss -tnl
   #关闭
   sudo service jenkins stop
   #重新启动
   sudo service jenkins restart
   ```
6. 此时安装算是完成了，可以访问了
   ```bash
   # 管理员密码
   cat /var/lib/jenkins/secrets/initialAdminPassword
   ```

<drawing-bed src="20240403/1.png" alt="20240403/1.png"/>

7. 安装maven
   ```bash
   apt install maven
   mvn -version
   ```