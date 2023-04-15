import Container from "./components/Container";
import Image from "./components/Image";

function App() {
  return (
    <Container>
      <div className="flex min-h-[70vh] min-w-[70vw] bg-gray-300">
        <div className="w-[30%] bg-red-300">
          <Image />
        </div>
        <div className="w-[70%] bg-yellow-200 p-5 flex flex-col gap-8 justify-center">
          <h1>Anurag Jaisingh</h1>
          <p className="max-w-[468px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quasi
            rem voluptatem. Iure distinctio adipisci quaerat est fuga. Alias
            incidunt dolores ipsam nam minima fuga nulla laudantium amet
            consectetur consequuntur.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default App;
