import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding:20px 0px;

    h1{
        color:#fff;
        text-transform: uppercase;
    }

`;

export const ButtonConvert = styled.button`
    background: #141E61;
    color:#fff;
    padding: 10px;
    border: 1px solid #fff;
    
    &:hover{
        color:#000;
        background: #0096c7;
        transition: 0.5s;
        cursor: pointer;
    }
`;

export const ButtonClear = styled.button`
    margin-top:40px;
    background: #0096c7;
    padding: 10px 65px;
    font-size: 20px;
    border:1px solid #fff;
    border-radius: 15px;
    color:#fff;
    &:hover{
        background: #F51720;
        cursor: pointer;
        transition: 0.5s;
    }
`;


export const ContainerInputButton = styled.div`
    padding: 30px 0px;

    input{
        padding: 10px;
        border-radius: 30px 0px 0px 30px;
        background: #141E61;
        border: 1px solid #fff;

        &:focus {
            background: #fff;
            color:#141E61;            }
        }
    
`;

export const ContainerResult = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        margin:0px;
        font-size: 45px;
    }
    h2{
        color:#0096c7;
    }
    span{
        font-size: 30px;
    }
`;
