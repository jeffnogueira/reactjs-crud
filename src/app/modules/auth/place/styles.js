import styled from "styled-components";

export const Container = styled.div`
    width: 85%;
    height: 90%;

    .modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .background-modal {
            position: absolute;
            z-index: 2;
            background-color: rgba(0,0,0,0.6);
            width: 100%;
            height: 100%;
        }

        .container-modal {
            background-color: white;
            z-index: 3;

            .header-modal {
                height: 70px;
                padding: 25px;
                display: flex;
                flex-direction: row;

                h2 {
                    width: 88%;
                }

                svg {
                    cursor: pointer;
                }

            }
        }
    }
`;

export const Form = styled.div`
    z-index: 1;
    width: 400px;
    background: #fff;
    padding: 15px 25px 50px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        color: #232121;
    }
    .div-input-modal {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;

        input {
            height: 46px;
            margin-bottom: 15px;
            padding: 0 20px;
            color: #777;
            font-size: 15px;
            width: 100%;
            border: 1px solid #ddd;
            border-radius: 5px;

            &::placeholder {
                color: #999;
            }
        }
        label {
            width: 100%;
            font-weight: bold;
            font-size: 1.08em;
            padding-bottom: 10px;
            padding-left: 5px;
        }
    }
    .buttons {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 25px;

        button {
            color: #fff;
            font-size: 16px;
            height: 35px;
            border: 0;
            border-radius: 5px;
            width: 45%;
            margin-left: 5px;
            margin-right: 5px;
            cursor: pointer;
        }
        .button-cancel {
            background: #ff0000;
        }
        .button-confirm {
            background: #61dafb;
        }
    }
`;