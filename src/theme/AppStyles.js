import { createGlobalStyle } from "styled-components";
import colors from "./styles/colors";
import spacing from "./styles/spacing";

import MT_Thin from "./fonts/made_tommy/MT_Thin.otf";
import MT_Black from "./fonts/made_tommy/MT_Black.otf";
import MT_Light from "./fonts/made_tommy/MT_Light.otf";
import MT_Medium from "./fonts/made_tommy/MT_Medium.otf";
import MT_ExtraBold from "./fonts/made_tommy/MT_ExtraBold.otf";
import MT_Regular from "./fonts/made_tommy/MT_Regular.otf";

import MT_Outline_Thin from "./fonts/made_tommy/MT_Outline_Thin.otf";
import MT_Outline_Black from "./fonts/made_tommy/MT_Outline_Black.otf";
import MT_Outline_Light from "./fonts/made_tommy/MT_Outline_Light.otf";
import MT_Outline_Medium from "./fonts/made_tommy/MT_Outline_Medium.otf";
import MT_Outline_ExtraBold from "./fonts/made_tommy/MT_Outline_ExtraBold.otf";
import MT_Outline_Regular from "./fonts/made_tommy/MT_Outline_Regular.otf";

export const AppStyles = createGlobalStyle`
  
  body {
    background: ${({ theme }) => theme.palette.bg.primary};
    color: ${({ theme }) => theme.palette.secondary.main};
    transition: all 0.50s linear;
    margin: 0;
  }

   b{
    font-weight: bold ;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
  
@font-face {
    font-family: "MT";
    src: url(${MT_Regular});
    font-weight:normal;
  }

@font-face {
    font-family: "MT";
    src: url(${MT_Thin});
    font-weight:200;
  }


@font-face {
    font-family: "MT";
    src: url(${MT_Light});
    font-weight:300;
  }

@font-face {
    font-family: "MT";
    src: url(${MT_Regular});
    font-weight:400;
  }

@font-face {
    font-family: "MT";
    src: url(${MT_Medium});
    font-weight:bold;
  }


@font-face {
    font-family: "MT";
    src: url(${MT_ExtraBold});
    font-weight:800;
  }


@font-face {
    font-family: "MT";
    src: url(${MT_Black});
    font-weight:900;
  }
 
 
@font-face {
    font-family: "MT Outline";
    src: url(${MT_Outline_Regular.otf});
    font-weight:normal;
  }

@font-face {
    font-family: "MT Outline";
    src: url(${MT_Outline_Thin}});
    font-weight:200;
  }

@font-face {
    font-family: "MT Outline";
    src: url(${MT_Outline_Light});
    font-weight:300;
  }


@font-face {
    font-family: "MT Outline";
    src: url(${MT_Outline_Regular});
    font-weight:400;
  }



@font-face {
    font-family: "MT Outline";
    src: url(${MT_Outline_Medium});
    font-weight:bold;
  }


@font-face {
    font-family: "MT Outline";
    src: url(${MT_Outline_ExtraBold});
    font-weight:800;
  }


@font-face {
    font-family: "MT Outline";
    src: url(${MT_Outline_Black});
    font-weight:900;
  }
 
 

a,
  button,
  i,
  input {
    transition: all 0.2s ease-in 0s;
  }

  * {
    box-sizing: border-box;
    font-family: "MT", sans-serif !important;
  }
 ::-webkit-scrollbar {
  }

  /* Track */
  ::-webkit-scrollbar-track {
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
  }

  // typography utils
  ${["center", "left", "right", "justify"].map(
		(typo) => `.text-${typo} { text-align: ${typo}; }`
	)}

  // flex utils
  .flex {
    display: flex;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  // mobile or desktop display
  .flex-desktop {
    display: flex;
    @media (max-width: 768px) {
      display: block;
  }
  }
  .flex-mobile {
    display: block;
    @media (max-width: 768px) {
      display: flex;
      justify-content: space-between;

    }
  }

.mobile{
display:flex;
  @media (max-width: 768px) {
  display: hidden;
    }
}


  .primarybg {
    background: ${({ theme }) => theme.palette.bg.accent};
  }


  .hover-btn {
    cursor: pointer;
    animation: ease-in;
    width: fit-content;
        height: fit-content;

    &:hover{ 
      opacity: 0.6;
      transform: scale(1.07);
    }
  }


  // margin utils
  .center {
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
  }

${[
	"center",
	"flex-start",
	"flex-end",
	"space-around",
	"space-between",
	"space-evenly",
].map((type) => `.justify-${type} { justify-content: ${type}; }`)}

${["center", "start", "end", "stretch", "baseline", "normal"].map(
	(type) => `.align-items-${type} { align-items: ${type}; }`
)}



  ${colors}
  ${spacing}


    @keyframes opacityAnim {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 100%;
    }
  }
  @keyframes chevron {
    0% {
      left: -10px;
    }
    100% {
      left: 0px;
    }
  }
`;
