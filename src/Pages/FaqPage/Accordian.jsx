import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Accordian = ({ title, content, key }) => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey={key}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    <p style={{ whiteSpace: 'pre-line' }}>{content}</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Accordian;