while true;
do
	DBInfo="mariadb -h compdb -uuser -ppassword -D camerainfo -se "
	cnt=$($DBInfo"SELECT COUNT(externalIP) FROM camerainfo WHERE status=1")
	tmp=$($DBInfo"SELECT externalIP, port FROM camerainfo WHERE status=1")
	tmparr=($tmp)
	i=0
	while [ $i -lt ${cnt} ];
	do
		extIP=${tmparr[i]}
		port=${tmparr[i+1]}
		i=$(($i+2))
		status=`nmap -p $port $extIP | grep 'closed'`
		if [ "x$status" != "x" ]; then
			$DBInfo"UPDATE camerainfo SET status = 0 WHERE externalIP='"$extIP"' AND port=$port"
		fi
	done
	sleep 5
done
