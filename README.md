# 1팀 - Soulution
## Subject: 화재진압 효율 향상을 위한 “화재진압용 영상 실시간 전송 모듈”

COMP0205-001 | 1st Team - Soulution | This is combined Repository.


### ※ 프로젝트 결과물의 세부 작동 원리는 00_PT/1팀_Soulution_최종보고서.hwp 를 참고해 주십시오.

---------------------------------------------------------------

## 사용된 기술 스택
### [SoC Module]<br><br>
<img src="https://img.shields.io/badge/espressif-E7352C?style=for-the-badge&logo=espressif&logoColor=white"> <img src="https://img.shields.io/badge/RaspberryPi-A22846?style=for-the-badge&logo=espressif&logoColor=white">

### [Server] <br> <br>
<img src="https://img.shields.io/badge/RockyLinux-10B981?style=for-the-badge&logo=espressif&logoColor=white"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=espressif&logoColor=white"> <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=espressif&logoColor=white"> <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=espressif&logoColor=white">  <img src="https://img.shields.io/badge/FFmpeg-007808?style=for-the-badge&logo=espressif&logoColor=white">  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=espressif&logoColor=white">    

### [Program Language] <br><br>
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=espressif&logoColor=white"> <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=espressif&logoColor=white"> <img src="https://img.shields.io/badge/Shell-FFD500?style=for-the-badge&logo=espressif&logoColor=white">

---------------------------------------------------------------
## 프로젝트 목적: 비화재보로 인한 안전불감증 확산 방지 및 소방력 낭비 최소화

프로젝트 기간: 2023. 11. 08 ~ 2023. 12. 12

### 네트워크 구성도
![image](https://github.com/2023-CLASS-1-Creative-ENG-Design/Soulution-FireDetect/assets/77498822/a5cc2a97-567d-4f61-81e1-0f3cceff2355)


### 서비스 작동 흐름
![image](https://github.com/2023-CLASS-1-Creative-ENG-Design/Soulution-FireDetect/assets/77498822/ad2a6823-58ba-4c70-a708-1e59687a2385)

### 서비스 구상 변경 과정

- HTTP POST 로 초당 n장의 이미지를 서버로 전송, 서버에서 이를 영상으로 변환 후 웹페이지에 제공하는 형식으로 Workflow 를 계획함.
- 예상보다 낮은 성능 (2FPS) -> 동기 통신 과정 중 발생하는 오버헤드가 원인인 것으로 추측됨.
- 오버헤드가 비교적 덜한 비동기 방식의 활용을 시도 -> 생각대로 포팅이 잘 진행되지 않음.
- 2주에 가까운 시간을 쏟아도 비동기 통신 구현 불가 -> 마지막으로, RTSP 를 사용해보기로 결정.
- ESP32 보드의 낮은 성능 -> ESP32에 대응되는 RTSP 코드를 쉽게 발견할 수 없었음 -> 시중에 돌아다니는 RTSP 스트림 코드를 포팅
- 다행스럽게도, 포팅한 코드가 낮은 해상도에서 원활하게 작동되었음. -> 이후 작업을 RTSP 에 초점을 두고 진행함.

※ HTTP 를 포함하여, 작업 중 작성하였던 모든 코드는 Repository 에 업로드되어 있습니다. 아래의 Repository 구성을 참고하시기 바랍니다.

※ 또한 실제 적용된 코드의 경우, <> 기호로 표시된 부분 (Wi-Fi SSID / Password, DB 접속 정보) 만 수정하면, 어디서든 사용이 가능할 것입니다.

---------------------------------------------------------------

### ※ 프로젝트 결과물의 세부 작동 원리는 00_PT/1팀_Soulution_최종보고서.hwp 를 참고해 주십시오.
  
---------------------------------------------------------------

### Repository 구성
이 레포지토리는 카메라 모듈, 프론트엔드, 백엔드, DB, RTSP 스트림 서버에 사용된 코드가 각각의 디렉토리로 분리되어 있습니다.

아래는 각 디렉토리와 코드 파일에 대한 간략한 설명입니다.

* 00_PT - 기초창의공학설계 강의시간에 발표한 프레젠테이션 파일과 보고서들이 저장되어 있습니다.
* FrontEnd - 화재 영상을 웹페이지로 출력해 주는 프론트엔드 소스코드입니다. (React 프레임워크 기반)
* Module - 카메라 모듈에 적용된 소스코드를 모아둔 디렉토리입니다.

  └ CheckMacAddress - 카메라 모듈의 MacAddress 확인을 위한 함수 기능 작동 테스트 코드입니다.
  
  └ ESP32_PingTest - 카메라 모듈의 인터넷 접속 가능 여부 테스트 코드입니다.
  
  └ main_usingRTSP - 카메라 모듈이 RTSP 프로토콜로 영상을 송출할 수 있도록 하는 코드입니다.
  
  └ old_usingHTTP - 카메라 모듈이 HTTP Post 매소드를 통해, JPG 이미지를 서버로 전송하는 코드입니다.
  
  └ old_usingWS - 웹소켓 기반 비동기 통신을 시도해보았으나, 작동하지 않는 코드입니다. (작업 중 RTSP로 변경함)
  
  └ RaspberryPi_RTSP_Stream_Sendinfo.sh - 테스트 목적으로 설치한 RPi 모듈이 RTSP 영상을 송출하는 코드입니다.
  
* Server - 서버 측의 설정파일과 쉘스크립트 (Shell Script) 파일을 모아둔 디렉토리입니다.
  
  └ BackEnd_Server - 카메라 접속 정보를 DB에서 FE로 보내는 벡엔드 소스코드입니다. (Flask 프레임워크 기반)
  
  └ MySQL_DBMS_Server - DB의 설정 파일과, DB에 값을 저장하는 php 파일이 저장되어 있습니다. (DBMS: MySQL)
  
  ---- *.conf - NGINX 및 PHP-FPM 의 설정 파일입니다.
  
  ---- caminfotodb.php - 카메라 모듈이 보낸 URL에서 파라미터를 분리하여, DB에 접속 정보를 저장하는 코드입니다.
  
  ---- old_usingHTTP_upload.php - HTTP Post 매소드로 이미지를 전송받을 때 사용했던 php 코드입니다.

  └ RTSP_Stream_Server - RTSP 영상을 HLS 타입으로 변환하는 서버의 스크립트 및 설정파일이 저장되어 있습니다.

  ---- 0-check_stream.sh - (nmap 함수 사용) 카메라 송출상황 체크, 송출하지 않으면 DB의 status 값을 0으로 바꾸는 스크립트입니다.
  
  ---- 0-rtsp_stream.sh - status = 1인 카메라 모듈에 접속, 영상을 받아 RTMP 로 변환하는 스크립트입니다. (중복 접속 방지 기능 구현됨)

  ---- 00_run.sh / 00_run_rtsp.sh - check_stream 및 rtsp_stream 스크립트를 한번에 실행하는 스크립트입니다.

  ---- [NGINX] *.conf - RTMP 에서 HLS 로의 변환을 담당하는 웹 서버의 설정파일입니다.

* clonefe.sh - Github 프론트엔드 레포지토리에서 최신 이미지를 내려받아 자동으로 배포하는 코드입니다.

* z_runservice.sh - 프론트엔드, 백엔드, DB, RTSP 스트림 서버를 일괄 구동하는 스크립트 코드입니다.
  
