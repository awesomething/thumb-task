import React from 'react'
import { Link } from 'react-router-dom'


export class Home extends React.Component {
  
  render() {
    return (
      <div className="home-page-wrapper">
        <center><section className="section section--one fade-in-bottom">
          <div className="section--one__text-box u-center-text">
            <h1 className="heading-primary u-margin-bottom-medium">
              <span className="heading-primary--main u-margin-bottom-small">An entirely better way to save your tasks. </span>
              <span className="heading-primary--sub">
                ThumbTask helps you save all tasks in one place, while you’re meeting and achieving your dreams.
                Transform your goals into a world of infinite possibility.
            </span>
            </h1>
            <Link
              to="/searchPage"
              className="btn btn--blue"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })
              }}
            >
              Explore ThumbTask
          </Link>
          
          </div>
        </section>

        <section className="section section--two u-margin-bottom-xxxl">
          <div className="heading-text-box u-center-text u-margin-bottom-big">
            <h3 className="heading-text-box--tertiary">Experience simplicity at best!</h3>
            <h2 className="heading-text-box--secondary">Take control of your weekly goals</h2>
          </div>
          <div className="section--two__cards u-margin-bottom-medium">
            <div className="section-3">
              <div className="container-3 w-container">
                <h2 className="heading">Easy to Use</h2><p class="paragraph"></p>
                <div className="columns-2 w-row">Record your tasks and track your progress easily</div>
              </div>
            </div>
            <div className="card">
                <p className="card__main-text u-margin-bottom-small">Rewarding Experience</p>
                <p className="card__sub-text">Understand what milestones you need to meet ahead of time</p>
            </div>
            
          
          </div>

        </section>

        <section className="section section--three u-margin-bottom-xxxl">
          
        </section>

        <footer className="footer u-margin-bottom-big">
          <center><div className="footer__brand-container">
            <p className="footer__author-text">
              Created by <a href="http://www.henryebomah.vercel.app/" target="_blank" rel="noreferrer">Henry Ebomah</a>
            </p>
            <div className="footer__social-media u-margin-bottom-small ">
              <a href="https://github.com/awesomething" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              |
              <a href="https://www.linkedin.com/in/henryebomah/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
            <div className="copyright-text">
              <p>
                Copyright &copy; 2021
              <br />
                All Rights Reserved
            </p>
            </div>
          </div></center>
        </footer></center>
      </div>
    )
  }
}
export default Home