import React, { Component } from 'react';
import Scroll from './Scroll';
import config from '../../config';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = (value) => {
    this.setState({ openMenu: value });
  };
  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <Scroll
            onClick={(_) => this.toggleMenu(!openMenu)}
            type="id"
            element="page-top"
          >
            <a className="navbar-brand" href="#page-top">
              {config.navBarTitle}
            </a>
          </Scroll>
          <button
            onClick={(_) => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? '' : 'collapsed'
            }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="about"
                >
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="experience"
                  offset={-56}
                >
                  <a className="nav-link" href="#experience">
                    Experience
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="featured-products"
                  offset={-56}
                >
                  <a className="nav-link" href="#featured-products">
                    Featured Products
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="contact"
                >
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </Scroll>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
