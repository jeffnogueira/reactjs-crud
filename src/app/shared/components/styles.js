import styled from "styled-components";

export const Nav = styled.div`
    background-color: #FFF;
    height: 6%;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .5rem 1rem;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    .navbar-toggler {
        padding: .25rem .75rem;
        font-size: 1.25rem;
        line-height: 1;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: .25rem;
        color: rgba(0,0,0,.5);
        border-color: rgba(0,0,0,.1);
        cursor: pointer;
        
        .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'><path stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");
            display: inline-block;
            width: 1.5em;
            height: 1.5em;
            vertical-align: middle;
            content: "";
            background: no-repeat center center;
            background-size: 100% 100%;
            cursor: pointer;
        }
    }
`;

export const Sidebar = styled.div`
    background-color: #FFF;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .container-logo {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;;
        height: 30%;
        flex-direction: column;
        
        .box-user-info {
            padding-bottom: 35px;
        }
    }
    hr {
        width: 85%;
    }
    .container-menu {
        height: 70%;
        display: flex;
        flex-direction: column;
        padding: 50px 15px 0 15px;
        width: 100%;
        
        .nav-link {
            padding: 8px 8px 8px 32px;
            text-decoration: none;
            font-size: 25px;
            color: #818181;
            display: block;
            transition: 0.3s;
        }
        .nav-link:hover {
            color: #464343;
            background-color: #e0e0e0;
            cursor: pointer;
        }
    }
`;

export const Header = styled.div`
    background-color: white;
    width: 100%;
    height: 15%;
    margin-bottom: 30px;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .container-title {
        flex: 30;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        svg {
            margin-left: 15px;
            width: 1.5em;
            height: 1.5em;
        }
        h1 {
            padding-left: 15px;
        }
    }
    .container-search {
        flex: 50;
        
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
    }
    .container-actions {
        flex: 20;
        display: flex;
        flex-direction: row;
        justify-content: center;
        
        button {
            color: white;
            font-size: 16px;
            background: #282c34;
            height: 40px;
            border: 0;
            border-radius: 100%;
            width: 40px;
            cursor: pointer;
            margin: 5px;
        }
    }
`;

export const DataTable = styled.div`
    background-color: white;
    width: 100%;
    height: 85%;
    margin-bottom: 30px;
    border-radius: 25px;
    overflow: auto;
    display: flex;
    justify-content: center;
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        
        button {
            color: #fff;
            font-size: 16px;
            height: 30px;
            border: 0;
            border-radius: 5px;
            width: 28%;
            margin-left: 5px;
            margin-right: 5px;
            cursor: pointer;
        }
        .button-view {
            background: #1b5bd0;
        }
        .button-edit {
            background: #61dafb;
        }
        .button-delete {
            background: #ff0000;
        }
    }
    tr:nth-child(even) {
        background-color: #dddddd;
    }
    .not-dataSource {
        padding-top: 30px;
        font-weight: bold;
        display: flex;

        svg {
            width: 1.2em;
            height: 1.2em;
            margin-right: 15px;
        }
    }
`;

export const FooterContainer = styled.div`
    background-color: #FFF;
    position: relative;
    height: 6%;
    bottom: 0;
    width: 100%;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .5rem 1rem;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    span {
        right: 15px;
        position: fixed;
        bottom: 15px;
    }
`;