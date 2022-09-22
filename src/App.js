import Editor from './Editor';
import Previewer from './Previewer';
import { marked } from 'marked';
import './App.css';
import { useState } from 'react';
import { defaultStr } from './text';

function App() {
  const [editorInput, setEditorInput] = useState({
    inputString: defaultStr,
  });
  function handleInput(event){
    setEditorInput({
      inputString: event.target.value
    })
  }
      
  return (
    <div className="container">
      <h1 className='text-center'>Markdown Editor</h1>
      <div className='row mt-4'>
        <div className='col-md-4'>
        <Editor 
          handleInput = {handleInput}
          editorInput = {editorInput}
        />
        </div> 
        <div className='col-md-8'>
          <Previewer
          editorInput = {editorInput}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
