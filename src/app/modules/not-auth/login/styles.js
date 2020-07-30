import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #282c34;
    ::before {
        content: " ";
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjZmZmIi8+CiAgPGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K);
        background-size: 50%;
        opacity: 0.05;
        background-repeat: no-repeat;
        background-position: 120% 500px;
    }
`;

export const Form = styled.form`
    z-index: 1;
    width: 400px;
    background: #fff;
    padding: 50px 25px 50px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        color: #232121;
    }
    img {
        width: 100px;
        margin: 10px 0 40px;
    }
    p {
        color: #ff3333;
        margin-bottom: 15px;
        border: 1px solid #ff3333;
        padding: 10px;
        width: 85%;
        text-align: center;
    }
    input {
        height: 46px;
        margin-bottom: 15px;
        padding: 0 20px;
        color: #777;
        font-size: 15px;
        width: 85%;
        border: 1px solid #ddd;
        border-radius: 5px;
        &::placeholder {
        color: #999;
        }
    }
    button {
        color: #fff;
        font-size: 16px;
        background: #61dafb;
        height: 56px;
        border: 0;
        border-radius: 5px;
        width: 85%;
        cursor: pointer;
    }
`;