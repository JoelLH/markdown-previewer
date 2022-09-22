import { marked } from "marked";
import { useEffect } from "react"


export default function Previewer(props){
    const {editorInput} = props
    useEffect(() => {
        let previewEl = document.getElementById("preview");
        previewEl.innerHTML = marked.parse(editorInput.inputString)
    }, [editorInput]);
    return(
        <section className="previewer-section" id="previewer-section">
            <div className="section__header d-flex align-items-center" id="preview-header">
                <i class="bi bi-images me-1"></i>
                <h3 className="previewer__title">Preview</h3>
            </div>
            <div className="preview section-content" id="preview">
                
            </div>

        </section>
    )
}