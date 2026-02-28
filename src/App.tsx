import logo from './logo.svg';
import './App.css';

import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { Text }from "./components/Text"

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>My UI Garden</h1>

      <Text content="Welcome to my Component Library" />

      <Button label="Click Me"/>

      <Card
        title="My Card UI Garden"
        content="This is inside the Card Component."
      />
    </div>
  );
}

export default App;