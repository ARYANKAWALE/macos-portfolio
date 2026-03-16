import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Navbar, Welcome, Dock, Home } from "#components";
import {
  Terminal,
  Safari,
  Resume,
  Finder,
  TextFile,
  Image,
  Contact,
  Photos,
} from "#windows";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <TextFile />
      <Image />
      <Contact />
      <Home />
      <Photos />
    </main>
  );
};

export default App;
