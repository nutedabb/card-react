import "./App.css";
import Container from "./components/Container";
import CardLogo from "./components/CardLogo";
import Limage from "./components/Limage";
import img1 from "./assets/TwitterIcon.png";
import img2 from "./assets/FacebookIcon.png";
import img3 from "./assets/InstagramIcon.png";
import img4 from "./assets/GitHubIcon.png";

function App() {
  return (
    <div className="app">
      <CardLogo />
      <Container />
      <div className="footer">
        <Limage img={img1} />
        <Limage img={img2} />
        <Limage img={img3} />
        <Limage img={img4} />
      </div>
    </div>
  );
}

export default App;
