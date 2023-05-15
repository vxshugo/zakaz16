import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./lesson.css"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Footer from "../../components/Footer/Footer"


const Lesson = () => {

    const docs = [
        { uri: require("./lesson2.pdf") },
    ];

    const [activeDocument, setActiveDocument] = useState(docs[0]);

    const handleDocumentChange = (document) => {
        setActiveDocument(document);
    };


    return (
        <div className='lesson'>
            <Navbar />
            <div className="head">
                <h4>Лекция</h4>
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

export default Lesson