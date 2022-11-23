import React from "react";
import styled from "styled-components";

function ModalExercise ({ children, setIsModalVisible }) {
    return (
        <Modal> 
            <div className="container">
                <div className="topBar">
                    <div className="close-modal" onClick={() => setIsModalVisible(false)} />
                </div>
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
        overflow: hidden;
        border-radius: 20px;
        text-align: center;
        background-color: #272727;
        color: #cccccc;
        width: 70%;
        height: 75%;

    }
    .close-modal {
        display: flex;
        position: relative;
        top: 15px;
        right: calc(-100% + 35px);
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background-color: #D0321D;
        :hover {
            background-color: #990F02;
        }
    }
    .topBar {
        width: 100%;
        height: 40px;
        background-color: #131313;
    }
    .exercise-name {
        display: flex;
        flex-direction: column;
        padding: 10px;
        width: 100%;
        background-color: #191919;
        /* border: 1px solid #cccccc; */
        align-items: center;
        justify-content: center;
        font-size: 20px;
        .linha {
            width: 80%;
        }
    }
    .content {
        overflow: scroll;
        height: 100vh;
        max-height: 460px;
        width: 100%;
        padding: 0 30px 0 30px;
        word-wrap: break-word;
        /* max-width:900px; */
        /* background-color: red; */

        &::-webkit-scrollbar {  
        margin: 5px;
        width: 10px;
        border-radius: 15px;
        background-color: #191919;
    }
   
        &::-webkit-scrollbar-thumb {
            background-color: white;
            border-radius: 15px;
            :hover {
                background-color: #D3D3D3;
            }
        }
        .video-container {
            display: flex;
            padding-top: 20px;
            margin-top: 20px;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 400px;
            max-height: 400px ;
            background-color: #191919;
            border-radius: 15px;
            
        }
        .description {
            flex-direction: column;
            overflow-x: scroll;
            word-wrap: break-word;
            display: flex;
            padding-top: 20px;
            margin-top: 20px;
            justify-content: center;
            width: 100%;
            background-color: #191919;
            border-radius: 15px;

            &::-webkit-scrollbar {  
                margin: 5px;
                height: 10px;
                border-radius: 15px;
                background-color: #191919;
            }
   
            &::-webkit-scrollbar-thumb {
                background-color: white;
                border-radius: 15px;
                :hover {
                    background-color: #D3D3D3;
                }
            }
            hr {
                margin: 5px 8px 5px 8px;
            }
        }
    }
    
`

const Content = styled.div`

`

export default ModalExercise