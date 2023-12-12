echo
echo "All Server Restarting..."
echo
echo
docker restart compfe compbe compimg compdb
sleep 1
echo
echo "Completed."
echo
sleep 1
echo
echo "DB Starting..."
echo
echo
sh <Host Server Location>/compdb/run.sh
sleep 1
echo
echo "Completed."
echo
sleep 1
echo
echo "BackEnd Starting..."
echo
nohup docker exec -i compbe python /compbe/app.py 1> <Host Server Location>/00_logs/compbe.log 2>&1 &
sleep 1
echo
echo "Completed."
echo
sleep 1
echo
echo "RTSP Streaming Server Starting..."
echo
sleep 1
echo
docker exec -i compimg sh /00_run.sh
docker exec -i compimg sh /00_run_rtsp.sh
sleep 1
echo
echo "Completed."
echo
sleep 1
echo
echo "FrontEnd Starting..."
echo
docker exec -i compfe sh /clonefe.sh
sleep 1
echo
echo "Completed."
echo
echo 
echo "ALL Server Running! END."
echo


