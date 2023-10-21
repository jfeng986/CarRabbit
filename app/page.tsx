import NavBar from "./components/NavBar";
import GetHelp from "./components/GetHelp";
import Info from "./components/Info";
import Projects from "./components/Projects";
import Desc from "./components/Desc";
import Taskers from "./components/Taskers";
import Desc2 from "./components/Desc2";

export default function Home() {
  return (
    <div>
      <NavBar />
      <GetHelp />
      <Info />
      <Projects />
      <Desc />
      <Taskers />
      <Desc2 />
    </div>
  );
}
