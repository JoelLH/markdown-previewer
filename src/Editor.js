


export default function Editor(props){
    let {handleInput, editorInput} = props
    return(
        <section className="editor sticky-top" id="editor-section">
            <div className="section__header d-flex align-items-center" id="editor-header">
                <i class="bi bi-pencil-square me-1"></i>
                <h3 className="editor__title">Editor</h3>
            </div>
            <div className="section-content">
                <textarea name="editor-textarea" className="editor__textarea" id="editor" 
                placeholder="Write your HTML here..."
                onChange={handleInput}
                value = {editorInput.inputString}
                >
                </textarea>
                
            </div>
        </section>
    )
    
}