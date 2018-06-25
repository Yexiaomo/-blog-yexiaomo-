---
title: 设置开机自启动,定时执行"git pull"python脚本
categories: linux
tags: ["python", "脚本", "linux", "git"]
---
[The file github address](https://github.com/Yexiaomo/mysite/blob/master/blog-yexiaomo/source/_posts/Set_autoGitPull_script.md)! This is teach you Set boot auto start and timing execute "git pull" python-Script

***以下均是在`root用户`下操作,步骤如下:***
### Set_autoGitPull_script

1. 创建脚本和日志文件,这里是将脚本放在仓库下,脚本代码如下:

<!-- more -->

```python
#!/usr/bin/python3.5
import os
os.chdir('/var/www/blog-yexiaomo/')
os.system('date >> autoGitPull.log')
os.system('sudo git pull origin master')
os.system('sudo hexo clean && sudo hexo d -g')
```
2. 对文件进行修改权限 `chomd +x autoGitPull.py`

<del>3. 设定开机自运行`vim /etc/rc.local`在末尾添加
```python
/usr/bin/python3.5 /var/www/mysite/autoGitPull.py > /var/www/mysite/autoGitPull.log
```
</del>

3. 设置定时运行
- 第一种方法
执行`crontab -e`
末尾添加
```shell
33 3 * * * sudo /usr/bin/python3.5 /var/www/mysite/autoGitPull.py >> /var/www/mysite/autoGitPull.log &
```
<del>

- 第二种方法(好像不行)
`vim /etc/crontab`末尾添加
</del>

```shell
33 3 * * * sudo /usr/bin/python3.5 /var/www/mysite/autoGitPull.py >> /var/www/mysite/autoGitPull.log
```

不要忘了**重启服务** `service cron restart`