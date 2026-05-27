@echo off
git add .
git commit -m "update: %date% %time:~0,5%"
git push origin master
pause