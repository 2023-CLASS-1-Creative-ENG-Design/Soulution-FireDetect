while true;
do
	cnt=$(mariadb -h compdb -uuser -ppassword -D camerainfo -se "SELECT COUNT(externalIP) FROM camerainfo WHERE status=1")
	if [ "$cnt" == 0 ]; then
		sleep 5 
		continue
	fi
	macAddr=$(mariadb -h compdb -uuser -ppassword -D camerainfo -se "SELECT macAddr FROM camerainfo WHERE status = 1")
	for mac in $macAddr;
	do
		tmp=$(mariadb -h compdb -uuser -ppassword -D camerainfo -se "SELECT externalIP, port FROM camerainfo WHERE macAddr='$mac'")
		tmparr=($tmp)
		extIP=${tmparr[0]}
		port=${tmparr[1]}
		runcheck=$(ps -ef | grep rtsp://$extIP:$port/test | wc -l)
		if [ "$runcheck" == 1 ]; then
			mkdir -p /var/www/html/$mac
		        if [ !-e $FILE ]; then
        			touch /var/www/html/00_log/$mac.log
               		fi
	       		rm -rf /var/www/html/$mac/*
			echo
			echo **********************************************************
			echo "GET RTSP Stream... | $extIP:$port/test"
			echo **********************************************************
			echo
			nohup ffmpeg -f rtsp -rtsp_transport tcp -i rtsp://$extIP:$port/test -codec copy -f hls -hls_list_size 10 -hls_wrap 20 -hls_time 15  /var/www/html/$mac/video.m3u8 > /var/www/html/00_log/$mac.log &
	        fi
	done
	sleep 5
done
