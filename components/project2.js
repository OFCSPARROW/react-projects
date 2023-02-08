import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import '../components/project2.css'
import img1 from '../images/download (1).jpeg';
import img2 from '../images/download (2).jpeg';
import img3 from '../images/download.jpeg';
import img4 from '../images/download.png';


export default function project2() {
  return (
    <div>

    <Container>
      <Row>
        <Col lg={12} md={12} sm={12}><img src={img4} class="img1"></img></Col>
      </Row>
      
      <Row>
        <Col lg={4} md={6} sm={'span:12,offset:0'}><div className='d1'><img src={img1} class="img2"/> <br/> 
        <h4 className='mod1'>Redmi Note 10 Pro</h4> <br/>
        <ul>
          <li>16.9cm(6.67) 120Hz Amoled Display</li><li>64mp Quad Camera</li><li>Qualcomm Snapdrogon 732G</li>
          <li>33 Wats Fast Charge</li><li>5020 mAH Battery</li><li>Dual Stero Speakers</li><li>16mp in-Display Selfi Camera</li>
          <li>Corning Gorilla Class 5</li>
        </ul>
        </div>
        </Col>

        <Col lg={4} md={6} sm={'span:12,offset:0'}><div className='d2'><img src={img2} class="img3"/> <br/>
        <h4 className='mod2'>Xiaomi MI MAX2</h4> <br/>
        <ul>
          <li>PERFORMANCE:Octo-Core</li><li>STORAGE:128GB</li><li>REAR CAMERA:12MP</li><li>BATTERY:5300mAH</li><li>DISPLAY:6.4"(16.26)cm</li>
          <li>OPERATING SYSTEM:Androd v7.1.1</li><li>CUSTOM UI:MIUI</li><li>FINGER PRINT SENSOR:Yes</li>
        </ul>
        </div>
        </Col>

        <Col lg={4} md={'span:4,offset:4'} sm={'span:12,offset:0'}><div className='d3'><img src={img3} class="img4"/> <br/>
        <h4 className='mod3'>MI 11X</h4> <br/>
        <ul>
          <li>Qualcomm Snapdragon 870 Processor</li> <li>Experience the Speed with 5G and Wi-Fi 6</li> <li>Large 4520 mAh Battery</li> 
          <li>120 Hz High Refresh Rate</li> <li>E4 AMOLED Display</li> <li>Triple Microphone Array</li> <li>Flagship Dual Speakers</li> <li>Dual-Frequency GPS</li>
        </ul>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

