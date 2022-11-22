import React from "react";
import styled from "styled-components";

const ModalExercise = ({ children }) => {
    return (
        <Modal> 
            <div className="container">
                <button className="close">close</button>
                <Content>{children}</Content>
            </div>
        </Modal>
    )
};

const Modal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    .container {
        text-align: center;
        background-color: #fff;
        color: #000;
        width: 60%;
        height: 60%;
    }
`

const Content = styled.div`

`

export default ModalExercise