import React, { useState } from 'react';

function Prices() {
  const [showPopup, setShowPopup] = useState(false);

  const handleBuyClick = () => {
    setShowPopup(true);
  };

  const handleConfirmClick = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="prices">
        <h2>Prices</h2>
        <div className="boxesprices">

          <div className="basic">
            <h3>Basic</h3>
            <h1>250€</h1>
            <p><i class="icon-time"></i> 1 Months of lessons</p>
            <p><i class="icon-book"></i> Learn HTML/CSS </p>
            <p><i class="icon-file-text"></i> You get a worldwide approved license</p>
            <p><i class="icon-user"></i> 24/7 Support</p>
            <button onClick={handleBuyClick}>Buy</button>
          </div>
          {showPopup && (
            <div className="popup">
              <h3>Confirm Your Purchase!</h3>
              <button onClick={handleConfirmClick}>Confirm</button>
            </div>
          )}

    <div class="proffesional">
        <h3>Proffesional</h3>
        <h1>500€</h1>
        <p><i class="icon-time"></i> 2 Months of lessons</p>
        <p><i class="icon-book"></i> Learn HTML/CSS/JavaScript</p>
        <p><i class="icon-file-text"></i> You get a worldwide approved license</p>
        <p><i class="icon-user"></i> 24/7 Support</p>
        <button onClick={handleBuyClick}>Buy</button>
    </div>
    {showPopup && (
            <div className="popup">
              <h3>Confirm Your Purchase!</h3>
             <button onClick={handleConfirmClick}>Confirm</button>
            </div>
          )}

    <div class="premium">
    <h3><i class="fas fa-star"></i> Premium</h3>
<h1>1000€</h1>
<p><i class="icon-time"></i> 3 Months of lessons</p>
<p><i class="icon-book"></i> Learn HTML/CSS/JavaScript/React</p>
<p><i class="icon-file-text"></i> You get a worldwide approved license</p>
<p><i class="icon-user"></i> 24/7 Support</p>
        <button onClick={handleBuyClick}>Buy</button>
    </div>
    {showPopup && (
            <div className="popup">
              <h3>Confirm Your Purchase!</h3>
              <button onClick={handleConfirmClick}>Confirm</button>
            </div>
          )}
   
</div>
</div>
<hr></hr>
<h2 class="texti">Why choose CodersLAB?</h2>

<section className='sektori'>
  <div className='klasa'>

    <div className='divipar'>
    <i class="icon-eur"></i>
<h1>Installment Payment</h1>
<p>You can split the payment into installments. The amount and number of installments depends on the course and payment plan you choose.</p>
    </div>

    <div className='dividyt'>
    <i class="icon-money"></i>
<h1>Money Back Guarantee</h1>
<p>If, for any reason, you are unable to complete the program in which you are enrolled, you will receive a refund for the portion of the course that you did not complete.</p>
    </div>

    <div className='divitret'>
    <i class="icon-ok-circle"></i>
<h1>A Trusted Course</h1>
<p>Since 2000, we have been focused on helping students achieve the best possible result, and securing a high-paying job.</p>
    </div>

  </div>
</section>

    </>

  );
}

export default Prices;