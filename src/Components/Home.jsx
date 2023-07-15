import React, { useEffect, useState } from 'react'
import "../CSS/global.css"
import iconChevronDown from '../assests/Icon-Chevron-Down.png'
import search from '../assests/Search Icon.png'
import frame1 from '../assests/Group 20.png';
import frame2 from '../assests/Group 17.png';
import frame3 from '../assests/Group 19.png';
import frame12537 from '../assests/Frame 12537.png';
import vector from '../assests/Vector.svg'
import rectangle from '../assests/Rectangle 2713.png'
import iconclock from "../assests/Icon Clock.svg"
import radiobutton from "../assests/Radio Button.png"
import radioButtonempty from '../assests/Radio Button (1).png'
const Home = () => {

  const [activePlan, setActivePlan] = useState('option-2');
  
// I dont know about how to convert the values and what is the pricing , so i have randomly coverted it 

  useEffect(() => {
    const totalValueElement = document.getElementById('total-value');
    if (activePlan === 'option-2') {
      totalValueElement.textContent = '₹149';
    } 
    else{
      console.log(activePlan)
    }
  }, [activePlan]);
  

 
  


  function handleSubscriptionSelection(optionId) {
    setActivePlan(optionId);
  }

  function handleSubscriptionSelection(optionId, total, perMonth) {
    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.textContent = total;
  }
  function handleSubscriptionSelection(optionId, total, perMonth) {
    const totalValueElement = document.getElementById('total-value');
    
    if (optionId === 'option-1') {
      totalValueElement.textContent = '₹149';
    } else {
      const selectedPlanValue = parseInt(total.substring(1)); // Extract the plan value without the currency symbol
      const additionalValue = 99; // Additional value to be added
      const newTotalValue = selectedPlanValue + additionalValue;
      totalValueElement.textContent = `₹${newTotalValue}`;
    }
  
    setActivePlan(optionId);
  }
  

  

  document.addEventListener('DOMContentLoaded', function() {
    const defaultOptionId = 'option-1';
    const defaultTotal = '₹18,500';
    const defaultPerMonth = '₹149';
    handleSubscriptionSelection(defaultOptionId, defaultTotal, defaultPerMonth);
  });
  





  return (
    <div className="coding-assignment">
      <div className="nav-bar">
        <div className="container">
          <div className="left-content">
            <div className="logo">
              <div className="edyoda">EDYODA</div>
            </div>
            <div className="courses">
              <div className="text">Courses</div>
              <img
                className="icon-chevron-down"
                alt=""
                src={iconChevronDown}
              />
            </div>
            <div className="courses">
              <div className="text">Programs</div>
              <img
                className="icon-chevron-down"
                alt=""
                src={iconChevronDown}
              />
            </div>
          </div>
          <div className="left-content search">
            <img className="icon-chevron-down" alt="" src={search} />
            <div className="log-in">
              <div className="text">Log in</div>
            </div>
            <div className="primary-button">
              <b className="text3">join now</b>
            </div>
          </div>
        </div>
      </div>
      <div className="content-container">
      
      <div className="form">
 
  <div className="progress-bar">
    <div className="stage-1">
      <div className="icon-1">
        <div className="div">1</div>
      </div>
      <div className="text-1">Sign Up</div>
    </div>
    <div className="stage-1">
      <div className="icon-1">
        <div className="div">2</div>
      </div>
      <div className="text-1">Subscribe</div>
    </div>
  </div>
  <div className="form-header">
    <div className="text4">Select your subscription plan</div>
  </div>
  <div className="input-container">
  <label className={`text-field-1 ${activePlan === 'option-1' ? 'active' : ''}`}>
      <input
        type="radio"
        
        name="subscription-option"
        value="option-1"
        className="radio-button"
        onChange={() => handleSubscriptionSelection('option-1', '₹99', '₹8')}
        disabled
      />
     {activePlan === 'option-1' ? (
    <img src={radiobutton} alt="Option 1" />
  ) : (
    <img src={radioButtonempty} alt="Option 1" />
  )}
      <div className="text-container">
        <div className="text5">12 Months Subscription</div>
        <div className="right-text-container">
          <div className="top-text">
            <div className="text6">Total</div>
            <div className="text7">₹99</div>
          </div>
          <div className="bottom-text">
            <div className="left-text">₹8</div>
            <div className="text9">/mo</div>
          </div>
        </div>
      </div>
      <div className="tag">
        <div className="offer-expired">Offer expired</div>
      </div>
   
    </label>
    <label className={`text-field-2 ${activePlan === 'option-2' ? 'active' : ''}`}>
      <input
      defaultChecked
       id="Green"
        type="radio"
        name="subscription-option"
        value="option-2"
        className="radio-button"
        onChange={() => handleSubscriptionSelection('option-2', '₹179', '₹15')}
      />
            {activePlan === 'option-2' ? (
          <img src={radiobutton} alt="Option 2" />
               ) : (
          <img src={radioButtonempty} alt="Option 2" />
             )}
      <div className="text-container2">
     
        <div className="text5">12 Months Subscription</div>
        <div className="left-text-container">
          <div className="top-text">
            <div className="text11">Total</div>
            <div className="text7">₹179</div>
          </div>
          <div className="bottom-text">
            <div className="left-text">₹15</div>
            <div className="text14">/mo</div>
          </div>
        </div>
      </div>
      <div className="tag1">
        <div className="recommended">Recommended</div>
      </div>
    </label>

    
    <label className={`text-field-2 ${activePlan === 'option-3' ? 'active' : ''}`}>
      <input
        type="radio"
        id="Green"
        name="subscription-option"
        value="option-3"
        className="radio-button"
        onChange={() => handleSubscriptionSelection('option-3', '₹149', '₹25')}
      />
        {activePlan === 'option-3' ? (
    <img src={radiobutton} alt="Option 3" />
  ) : (
    <img src={radioButtonempty} alt="Option 3" />
  )}
      <div className="text-container2">
        <div className="text5">6 Months Subscription</div>
        <div className="left-text-container">
          <div className="top-text">
            <div className="text11">Total</div>
            <div className="text7">₹149</div>
          </div>
          <div className="bottom-text">
            <div className="left-text">₹25</div>
            <div className="text14">/mo</div>
          </div>
        </div>
      </div>
    </label>
    <label className={`text-field-2 ${activePlan === 'option-4' ? 'active' : ''}`}>
      <input
        type="radio"
        id="Green"
        name="subscription-option"
        value="option-4"
        className="radio-button"
       
        onChange={() => handleSubscriptionSelection('option-4', '₹99', '₹38')}
      />
      {activePlan === 'option-4' ? (
    <img src={radiobutton} alt="Option 4" />
  ) : (
    <img src={radioButtonempty} alt="Option 4" />
  )}
      <div className="text-container2">
        <div className="text5">3 Months Subscription</div>
        <div className="left-text-container">
          <div className="top-text">
            <div className="text11">Total</div>
            <div className="text7">₹99</div>
          </div>
          <div className="bottom-text">
            <div className="left-text">₹33</div>
            <div className="text14">/mo</div>
          </div>
        </div>
      </div>
    </label>
  </div>
  <div className="summary-container">
    <div className="alert-header">
      <div className="left-text">Subscription Fee</div>
      <div id="total-amount" className="text26">₹18,500</div>
    </div>
        <div className="alert">
              <div className="alert-header">
                <div className="text5">Limited time offer</div>
                <div className="text28">- ₹18,401</div>
              </div>
              <div className="alert-body">
              <img
                  className="icon-chevron-down"
                  alt=""
                  src={iconclock}
                
                />

                <div className="left-text">{`Offer valid till 25th March 2023 `}</div>
              </div>
            </div>
            <div className="alert-header">
            <div className="left-text">
              <span className="total">{`Total `}</span>
              <span>(Incl. of 18% GST)</span>
            </div>
            <b id="total-value" className="right-text">₹149</b>
          </div>

          </div>
          <div className="button-container">
            <div className="secondary-button">
              <b className="text3">cancel</b>
            </div>
            <div className="primary-button1">
              <b className="text3">proceed to pay</b>
            </div>
          </div>
          <div className="icon-container">
            <div className="razorpay-icon">
              <img
                className="razorpay-icon-child"
                alt=""
                src={frame12537}
              />
            </div>
          </div>
        </div>

 
        <div className="main-lockup">
          <div className="header">
            <div className="icon-container">
              <div className="access-curated-courses">
                Access curated courses worth
              </div>
            </div>
            <div className="parent">
              <div className="div2">₹ 18,500</div>
              <div className="frame-child" />
              <div className="at-just-wrapper">
                <div className="at-just">at just</div>
              </div>
              <div className="wrapper">
                <div className="at-just">₹ 99</div>
              </div>
              <div className="per-year-wrapper">
                <div className="at-just">per year!</div>
              </div>
            </div>
          </div>
          <div className="pointer-1">
            <div className="icon">
              <img className="icon-child" alt="" src={frame1}/>
            </div>
            <div className="log-in">
              <div className="scholarship-worth-94500-container">
                <span className="total">{`100+ `}</span>
                <span className="job-relevant-courses">
                  <span>Job relevant courses</span>
                  <span className="span1">{` `}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="pointer-1">
            <div className="icon1">
              <img className="icon-item" alt="" src={frame3} />
            </div>
            <div className="log-in">
              <div className="scholarship-worth-94500-container">
                <span className="total">{`20,000+ `}</span>
                <span className="job-relevant-courses">Hours of content</span>
              </div>
            </div>
          </div>
          <div className="pointer-3">
            <div className="icon2">
              <div className="vector-parent">
                <img className="vector-icon" alt="" src={vector} />
                <div className="live">live</div>
              </div>
            </div>
            <div className="text-container8">
              <div className="scholarship-worth-94500-container">
                <span className="total">{`Exclusive `}</span>
                <span className="job-relevant-courses">webinar access</span>
              </div>
            </div>
          </div>
          <div className="pointer-4">
            <div className="icon3">
              <img className="icon-inner" alt="" src={frame2}/>
            </div>
            <div className="text-container9">
              <div className="log-in">
                <div className="scholarship-worth-94500-container">
                  <span>{`Scholarship worth `}</span>
                  <span className="span3">₹94,500</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-5">
            <div className="icon1">
              <div className="icon-item">
                <img className="vector-icon1" alt="" src={vector} />
                <div className="ads">ADS</div>
                <div className="group-child" />
              </div>
            </div>
            <div className="text-container8">
              <div className="scholarship-worth-94500-container">
                <span className="total">{`Ad Free `}</span>
                <span className="job-relevant-courses">
                  learning experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home