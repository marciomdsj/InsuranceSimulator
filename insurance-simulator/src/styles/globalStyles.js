import { createGlobalStyle } from "styled-components";

const myGlobalStyles = createGlobalStyle `

    *{
       
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    
    body{
        background: linear-gradient(to bottom, #ccc 0%, #fff 50%, #ccc 100%);
        font-family: 'Roboto', sans-serif;
        color: #333;
        line-height: 1.6;
    }

    h3 {
        color:black;
        text-align:justify;
        margin-bottom:30px;
    }

    div{
        
    }

    p{
        font-size:18px;
        font-weight:bold;
        color:black;
    }

    .page-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }


    .content {
        flex: 1;
        padding: 20px;
}

    .introduction {
        padding: 10px;
    }

    .introContainer {
        margin-left:15%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        margin-bottom:-60px;
    }

    .helpText {
        flex-direction: column;
        align-items:center;
        justify-content:center;
        text-align:center;
        gap: 20px;
        margin-bottom:80px;
        margin-top:40px;
        font-size:20px;
        width:100%;
    }

    .step {
        display: flex;
        text-align:left;
        flex-direction:row;
        align-items: center;
        gap: 10px;
        justify-content: flex-start;
    }

    .circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: purple;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 18px;
        margin-bottom:30px;
        margin-right:30px;
        flex-shrink: 0;
    }


    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }


    .lateralLabel {
        text-align: center;
        display: flex;
        align-items: center;
        width:100%;
        justify-content:center;
    }

    footer {
    background-color:rgb(116, 151, 185);
    text-align: center;
    padding: 10px 0;
    border-top: 1px solid #ddd;
}

    .textSupport {
        text-align:center;
        margin-bottom:10%;
    }

    .sectionContainer{  
        border-radius:20px;
        background: linear-gradient(to bottom, #e6f7ff 0%, #b3e0ff 50%, #e6f7ff 100%);
        margin-top:-300px;
        display:flex;
        flex-direction:column;
        margin-left:60%;
        width:340px;
    }

    .resultText {
        display:flex;
        text-align:center;
        align-items:center;
        justify-content:center;
        margin-top:1%;
    }

    .divButton{
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom:20px;
    }

    .cardContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin: 10px 0;
}

.card { 
    display:flex;
    justify-content:space-between;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: 300px;
    text-align: center;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card h4 {
    margin-bottom: 10px;
    font-size: 14px;
    color: #333;
}

.card p {
    margin: 5px 0;
    color: #555;
    font-size: 14px;
}

.card button {
    margin-left:10px;
    height:30px;
    text-align:center;
    background-color: #6200ea;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s ease-in-out;
}

.card button:hover {
    background-color: #3700b3;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}




`

export default myGlobalStyles;