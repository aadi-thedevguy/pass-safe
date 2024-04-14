import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <main className=" min-h-screen overflow-x-hidden w-full bg-white text-primary-color dark:bg-primary-color dark:text-white">
      <Header />
      <Container />
    </main>
  );
} 

export default App;
