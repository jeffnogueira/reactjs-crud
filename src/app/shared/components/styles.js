import styled from "styled-components";

export const Nav = styled.div`
    background-color: #FFF;
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
    }
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
    }
    .box-user-info {
        padding-bottom: 35px;
    }
    hr {
        width: 85%;
    }
    .container-menu {
        height: 70%;
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        width: 100%;
        padding-left: 15px;
    }
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
    }
    .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }
`;

export const FooterContainer = styled.div`
    background-color: #FFF;
    position: fixed;
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