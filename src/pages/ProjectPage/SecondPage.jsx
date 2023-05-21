import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./testPage.css"
import DocViewer, {DocViewerRenderers} from "@cyntler/react-doc-viewer";
import Footer from "../../components/Footer/Footer"

const SecondPage = () => {

    const docs = [// Local File
        {
            uri: require("./Өзің-өзі тексеру тесті.pdf"),
            fileName: " "
        }, // Local File
    ];

    const [activeDocument, setActiveDocument] = useState(docs[0]);

    const handleDocumentChange = (document) => {
        setActiveDocument(document);
    };


    return (
        <div className='testPage'>
            <div className="head">
                <h4>Тест</h4>
            </div>
            <div className="docView">
                {/* <div className="buttons">
          <button onClick={handleDocumentChange(docs[0])}>
            Тест 1
          </button>
          <button onClick={handleDocumentChange(docs[1])}>
            Тест 2
          </button>
        </div> */}
                <div className="wrapper">
                    <DocViewer className='my-doc-viewer-style' documents={docs} activeDocument={activeDocument}
                               pluginRenderers={DocViewerRenderers} onDocumentChange={handleDocumentChange}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SecondPage