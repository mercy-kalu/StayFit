import React from "react";
import {Col, Row} from "antd";
import {Card} from "antd";
import {Button} from "antd/es/radio";
import "../styles/MainPage.css";
import "../styles/Analysis.css"
import {Progress} from "antd";


function Analyses(props) {
 return (
  <div id="analyses">
   {/* <Row gutter={[16, 16]}>
    <Col span={6}>
     <Card
      id="analysis-img"
      style={{
       width: 230
      }}
     >
      <div className="steps-icon">
       <img src="/assets/icons/steps.svg" className="steps-img" alt="" /> Steps
                 
                         
       <div className="steps-text">
        <h2>2.500</h2>
        <p>steps</p>
       </div>
      </div>
  
      <Progress
       percent={50}
       size="small"
       status="active"
       strokeColor="#ffffff"
      />
      <p>50% of your goals</p>
     </Card>
    </Col>
    <Col span={6}>
     <Card
      style={{
       width: 230
      }}
     >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
     </Card>
    </Col>
    <Col span={6}>
     <Card
      style={{
       width: 230
      }}
     >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
     </Card>
    </Col>
    <Col span={6}>
     <div className="btn">
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
     </div>
    </Col>
   </Row> */}

   <div class="AnalysisContainer">
    <div class="WelcomeBack">Welcome Back 🎉</div>
    <div class="Goals">
     <div class="Cards">
      <div class="Steps">
       <div class="Steprectangle5"></div>
       <div class="Steps2">Steps</div>
       <div class="stepNumber">2.500</div>
       <div class="goalspercent">50% of your goals</div>
       <div class="Steps1">Steps</div>
       <div class="stepRectangle3"></div>
       <div class="stepRectangle4"></div>
      </div>
      <div class="Calories">
       <div class="Caloryrectangle3"></div>

       <div class="Reading">
        <div class="Ellipse14"></div>

        <div class="Today">Today</div>
        <div class="Under">Under</div>
       </div>
       <div class="Calory">
        <div class="Cal">
         <div class="Vector1"></div>
        </div>
        <div class="Calories1">Calories</div>
       </div>
      </div>

      {/* <!-------------water starts here------------------> */}
      <div class="Water">
       <div class="Waterrectangle3"></div>
       <div class="Topology11">
        <div class="Vector91"></div>
       </div>
       <div class="Waterrectangle2"></div>
       <div class="Waterrectangle1"></div>
       <div class="Water1">
        <div class="WaterIcon">
         <div class="waterVector"></div>
        </div>
        <div class="Water2">Water</div>
       </div>
       <div class="WaterShape">
        <div class="waterNo">1.25</div>
        <div class="Liters">Liters</div>

        <div class="Ellipse12"></div>
       </div>
      </div>
     </div>

     {/* <!--------------buttons start here---------------> */}
     <div class="Buttons">
      <div class="Button1">
       <div class="CreateGoal">Create Goal</div>
      </div>
      <div class="Button2">
       <div class="Continue">Continue</div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
export default Analyses;
