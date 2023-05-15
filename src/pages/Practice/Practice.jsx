import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./pract.css"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Footer from "../../components/Footer/Footer"


const Practice = () => {

    const docs = [
        { uri: require("./практика прав.pdf") }, // Local File
    ];

    const [activeDocument, setActiveDocument] = useState(docs[0]);

    const handleDocumentChange = (document) => {
        setActiveDocument(document);
    };


    return (
        <div className='practice'>
            <Navbar />
            <div className="head">
                <h4>Практика</h4>
            </div>
            <div className="docView">
                <div className="wrapper">
                    <DocViewer className='my-doc-viewer-style' documents={docs} activeDocument={activeDocument} pluginRenderers={DocViewerRenderers} onDocumentChange={handleDocumentChange} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Practice