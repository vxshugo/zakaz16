import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import DocViewer, {DocViewerRenderers} from "@cyntler/react-doc-viewer";
import Footer from "../../components/Footer/Footer"


const Test = () => {

    const docs = [
        {
            uri: require("./экзамен.pdf"),
            fileName: " "
        }, // Local File
    ];

    const [activeDocument, setActiveDocument] = useState(docs[0]);

    const handleDocumentChange = (document) => {
        setActiveDocument(document);
    };


    return (
        <div className='lesson'>
            <div className="head">
                <h4>Емтихан сұрақтары</h4>
            </div>
            <div className="docView">
                <div className="wrapper">
                    <DocViewer className='my-doc-viewer-style' documents={docs} activeDocument={activeDocument}
                               pluginRenderers={DocViewerRenderers} onDocumentChange={handleDocumentChange}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Test