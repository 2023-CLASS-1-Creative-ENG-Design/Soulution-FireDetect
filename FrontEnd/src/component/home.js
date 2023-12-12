import React from 'react';
import logo119 from "../assets/main_img.png";
import underbar from "../assets/underbar.png";
import '../styles/home.css';
import Stack from 'react-bootstrap/Stack';
import styled from "styled-components"
import YouTube from 'react-youtube';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <div className="Home119">
                        <div className="center">
                            <img src={logo119} alt='logo' width={100} height={100} />
                        </div>
                        <div class="label">
                            <p className='center-text-main'>화재진압용 <br />
                            영상 실시간 전송 모듈</p>
                            <p className='center-text-sub'>잠재적으로 위험한 화재를 예방하고  긴급 출동으로 인한 <br />
                            소방력 낭비를 줄이기 위한것 입니다.</p>
                        </div>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col>
                    <div className="Home119">
                        <YouTube
                        videoId="UNg2QyQ7fTY" //동영상 주소
                        opts={{
                        width: "400px",
                        height: "280px",
                        playerVars: {
                        autoplay: 1, //자동 재생 여부 
                        modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                        loop: 1, //반복 재생
                        playlist: "UNg2QyQ7fTY", //반복 재생으로 재생할 플레이 리스트
                        },
                        }}
                        onReady={(e) => {
                        e.target.mute(); //소리 끔
                        }} />
                    </div>
                </Col>
                <Col>
                    <div className="Home119">
                            <YouTube
                            videoId="QrJh5pONAVc" //동영상 주소
                            opts={{
                            width: "400px",
                            height: "280px",
                            playerVars: {
                            autoplay: 1, //자동 재생 여부 
                            modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                            loop: 1, //반복 재생
                            playlist: "QrJh5pONAVc", //반복 재생으로 재생할 플레이 리스트
                            },
                            }}
                            onReady={(e) => {
                            e.target.mute(); //소리 끔
                            }} />
                        </div>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
    );
  }

export default Home;