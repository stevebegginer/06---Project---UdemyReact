import React, {useState} from 'react';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleShowParagraphHandler = () => {
    setShowParagraph(() => !showParagraph)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleShowParagraphHandler} >Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
