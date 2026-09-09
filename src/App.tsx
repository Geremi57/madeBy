import { Credits } from "./components/Credits";

function App() {
  return (
    <main>
      <h1>MadeBy</h1>
      <p>Credits for the people behind your project.</p>

      <Credits
        project="MadeBy"
        contributors={[
          {
            name: "Geremi Wanga",
            role: "Full Stack Developer",
            github: "https://github.com/",
          },
          {
            name: "Jane Doe",
            role: "UI/UX Designer",
            linkedin: "https://linkedin.com/",
          },
        ]}
      />
    </main>
  );
}

export default App;