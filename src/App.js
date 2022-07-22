import warningIcon from './assets/images/icon-error.svg';
import arrowIcon from './assets/images/icon-arrow.svg';
import heroImgMobile from './assets/images/hero-mobile.jpg';
import heroImgDesktop from './assets/images/hero-desktop.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>Title</div>
      <picture>
        <source media="(min-width:1440px)" srcSet={heroImgDesktop} />
        <img src={heroImgMobile} alt="woman photograph" />
      </picture>
      <div>
        <div>
          We're<span> coming soon</span>
        </div>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals
        </p>
      </div>
      <form>
        <div>
          <label htmlFor="email">email</label>
          <input type="email"></input>
          <img src={warningIcon} alt="warning icon"></img>
          <p>Please provide a valid email</p>
        </div>
        <button type="submit">
          <img src={arrowIcon} alt="arrow icon "></img>
        </button>
      </form>
    </div>
  );
}

export default App;
