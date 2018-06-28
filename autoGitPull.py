#!/usr/bin/python3.5
import os
os.chdir('/var/www/blog-yexiaomo/')
os.system('date >> autoGitPull.log')
os.system('sudo git pull origin master')
os.system('sudo hexo clean && sudo hexo g')
