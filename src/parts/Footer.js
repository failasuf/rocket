import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <section className="footer border">
      <div class="container pt-5">
            <div className="row">
              <div className="col-sm-6">
              <div className="menu-column">
              <div class="section-title">
Always stay in the loop!
</div>
<h5 class="footer-phone">Speak with sales: <a href="tel:855-564-7625">(855) 564-7625</a></h5>
<h6 class="footer-address">LogRocket<br/>87 Summer St.<br/>Boston, MA 02110</h6>
</div>
              </div>

              <div className="col-sm-2">
              <div className="menu-column">
  <div className="section-title">
    Product
  </div>
  <a href="/pricing" className="menu-option">
    Pricing
  </a>
  <a href="/customers" className="menu-option">
    Customers
  </a>
  <a href="https://docs.logrocket.com" className="menu-option">
    Docs
  </a>
  <a href="https://blog.logrocket.com" className="menu-option">
    Blog
  </a>
</div>
              </div>
              <div className="col-sm-2">
              <div className="menu-column">
  <div className="section-title">
    Product
  </div>
  <a href="/pricing" className="menu-option">
    Pricing
  </a>
  <a href="/customers" className="menu-option">
    Customers
  </a>
  <a href="https://docs.logrocket.com" className="menu-option">
    Docs
  </a>
</div>
              </div>
              <div className="col-sm-2">
              <div className="menu-column">
  <div className="section-title">
    Product
  </div>
  <a href="/pricing" className="menu-option">
    Pricing
  </a>
  <a href="/customers" className="menu-option">
    Customers
  </a>
  <a href="https://docs.logrocket.com" className="menu-option">
    Docs
  </a>
  <a href="https://blog.logrocket.com" className="menu-option">
    Blog
  </a>
</div>
              </div>

            </div>
      </div>
      <div className="bottom-stripe">
<div className="with-heart">
Made with <span className="heart">♥</span> in Jepara
</div>
<div className="copyright">
Copyright © 2021<br/>
LogRocket, Inc
</div>
</div>
      </section>
    );
  }
}