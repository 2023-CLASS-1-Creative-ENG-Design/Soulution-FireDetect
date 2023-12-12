service nginx start
if [ !-e $FILE ]; then
                touch /var/www/html/00_log/0-check_stream.log
		touch /var/www/html/00_log/00_run_rtsp.log
fi

nohup bash /0-check_stream.sh 1> /var/www/html/00_log/0-check_stream.log 2>&1 &
