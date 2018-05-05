import React, { Component } from 'react';
import './styles/App.css';
import BurgerMenu from 'react-burger-menu';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Play from './components/Play'; // initial splash page
import Admin from './components/Admin'; // initial splash page
import Footer from './components/Footer'; // footer

class MenuWrap extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({hidden : true});

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show() {
    this.setState({hidden : false});
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = {display: 'none'};
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentMenu: 'scaleRotate',
      side: 'left',
      isOpen: false
    };
    this.getItems = this.getItems.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  getItems() {
    let aItems = [
          <Link id="noUnderline" key="0" onClick={this.closeMenu} to="/"><h3 id="menu-title" className="request-text-gradient"><span id="titleText">DrinkPong</span></h3></Link>,
          <Link key="1" onClick={this.closeMenu} to="/play"><i className="fa fa-fw fa-hand-paper-o"/><span>Play!</span></Link>,
          <Link key="2" onClick={this.closeMenu} to="/admin"><i className="fa fa-fw fa-book"/><span>Admin</span></Link>,
          <a key="3" href="https://uh18.diin.io/"><i className="fa fa-fw fa-external-link" /><span>An Umma Husla Hackathon Project!</span></a>
        ];
    return aItems;
  }
  closeMenu() {
    this.setState({isOpen: false}); // any link click from the menu should automatically close the menu
  }
  render() {
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = this.getItems();
    return (
      <Router>
        <div>
          <div id="outer-container" style={{height: '100%'}}>
            <MenuWrap wait={20}>
              <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} isOpen={this.state.isOpen}>
                {items}
              </Menu>
            </MenuWrap>
            <main id="page-wrap">
                <div>
                  <Route exact path="/" component={Play}></Route>
                  <Route exact path="/play" component={Play}></Route>
                  <Route exact path="/admin" component={Admin}></Route>
                </div>
            </main>
            <Footer/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
