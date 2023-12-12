forever stop 0
rm -rf /FrontEnd
git clone https://github.com/COMP0205-001-Group1/FrontEnd
rm -rf /compfe/public /compfe/README.md /compfe/src /compfe/package*
mv /FrontEnd/* /compfe/
cd /compfe && npm run build
#cd /compfe && nohup npm run start > /compfe/00_logs/compfe.log
cd /compfe && forever start -c "npm run start" ./
