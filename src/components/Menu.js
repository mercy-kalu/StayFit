import React from "react";
// import {Col, Row} from "antd";
// import {Card} from "antd";
import "../styles/MainPage.css";
import "../styles/Menu.css"



function Menu(props) {
 return (
  //   <div id="featured-menu">
  //    <Row>
  //     <Col span={24}>
  //      <div className="trainer-heading">
  //       <h2>Featured Diet Menu</h2>
  //      </div>
  //      <Row>
  //       <Col span={12}>
  //        <Card
  //         style={{
  //          width: 450
  //         }}
  //        >
  //         <p>Card content</p>
  //         <p>Card content</p>
  //         <p>Card content</p>
  //        </Card>
  //       </Col>
  //       <Col span={12}>
  //        <Card
  //         style={{
  //          width: 450
  //         }}
  //        >
  //         <p>Card content</p>
  //         <p>Card content</p>
  //         <p>Card content</p>
  //        </Card>
  //       </Col>
  //      </Row>
  //     </Col>
  //    </Row>
  //   </div>

  <div class="MenuContainer">
   <div class="FeaturedDietMenu">Featured Diet Menu</div>
   <div class="MenuCards">
    <div class="Breakfast1">
     <div class="Topheading">
      <div class="Breakfasttext">Breakfast</div>
      <div class="time">10:00 am</div>
     </div>
     <div class="Image2">
      <img class="Image2-img" src="https://via.placeholder.com/131x89" />
     </div>
     <div class="Image1">
      <img class="Image1-img" src="https://via.placeholder.com/131x89" />
      <img class="profile-img" src="https://via.placeholder.com/111x75" />
     </div>
     <div class="AvocadoSalad">Avocado salad</div>
     <div class="Blueberry">Blueberry</div>
     <div class="Rectangleblue1"></div>
     <div class="Rectangleblue2"></div>
     <div class="Rectangleorange1"></div>
     <div class="Rectangleorange2"></div>
     <div class="Rectanglered1"></div>
     <div class="Rectanglered2"></div>
     <div class="Carbsdiv">
      <div class="Ellipse36"></div>
      <div class="Carbstext">8% carbs</div>
     </div>
     <div class="Carbsdiv2">
      <div class="Ellipse36"></div>
      <div>8% carbs</div>
     </div>
     <div class="Protein">
      <div class="Ellipse37"></div>
      <div class="Proteintext">16% protein</div>
     </div>
     <div class="Protein2">
      <div class="Ellipse37"></div>
      <div class="Proteintext">16% protein</div>
     </div>
     <div class="Fatratio">
      <div class="Ellipse38"></div>
      <div class="Fattext">6% Fat</div>
     </div>
     <div class="Fatratio2">
      <div class="Ellipse38"></div>
      <div class="Fattext">6% Fat</div>
     </div>
    </div>
    <div class="Lunch">
     <div class="Topheading">
      <div class="Breakfasttext">Breakfast</div>
      <div class="time">10:00 am</div>
     </div>
     <div class="Image2">
      <img class="Image2-img" src="https://via.placeholder.com/131x89" />
     </div>
     <div class="Image1">
      <img class="Image1-img" src="https://via.placeholder.com/131x89" />
      <img class="profile-img" src="https://via.placeholder.com/111x75" />
     </div>
     <div class="AvocadoSalad">Avocado salad</div>
     <div class="Blueberry">Blueberry</div>
     <div class="Rectangleblue1"></div>
     <div class="Rectangleblue2"></div>
     <div class="Rectangleorange1"></div>
     <div class="Rectangleorange2"></div>
     <div class="Rectanglered1"></div>
     <div class="Rectanglered2"></div>
     <div class="Carbsdiv">
      <div class="Ellipse36"></div>
      <div class="Carbstext">8% carbs</div>
     </div>
     <div class="Carbsdiv2">
      <div class="Ellipse36"></div>
      <div class="Carbstext">8% carbs</div>
     </div>
     <div class="Protein2">
      <div class="Ellipse37"></div>
      <div class="Proteintext">16% protein</div>
     </div>
     <div class="Protein">
      <div class="Ellipse37"></div>
      <div class="Proteintext">16% protein</div>
     </div>
     <div class="Fatratio">
      <div class="Ellipse38"></div>
      <div class="Fattext">6% Fat</div>
     </div>
     <div class="Fatratio2">
      <div class="Ellipse38"></div>
      <div class="Fattext">6% Fat</div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Menu;
