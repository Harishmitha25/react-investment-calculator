import logo from "../assets/investment-calculator-logo.png";

export function Header(params) {
  return (
    <header id="header">
      <img src={logo} alt="Investment Calculator Logo"></img>
      <h1>Investment Calculator</h1>
    </header>
  );
}
