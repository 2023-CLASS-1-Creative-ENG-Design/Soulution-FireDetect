<?php
$mac_addr = $_GET['macAddr'];
$internalIP = $_GET['intIP'];
$externalIP = $_SERVER['REMOTE_ADDR'];
$port = $_GET['port'];
$conn = mysqli_connect("compdb","<DBUser>","<DBPW>");
mysqli_select_db($conn, "camerainfo");
$sql = "REPLACE INTO camerainfo (externalIP, internalIP, port, macAddr, status) values ('$externalIP', '$internalIP', '$port', '$mac_addr', 1)";
$result = mysqli_query($conn, $sql);
if ($result):
    echo "Camera Information Recording Successfully!";
else:
    echo "Camera Information Recording FAILED!";
endif
?>
