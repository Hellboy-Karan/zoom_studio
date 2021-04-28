import styled from 'styled-components';

export const Container = styled.div`
    padding: 80px 60px;
    background: radial-gradient(circle, rgb(54, 54, 56)0%, rgb(34, 32, 41) 50%, rgb(41, 39, 56) 100%);

`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    text-decoration: none;

`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
    text-decoration: none;
`
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 10px;
    text-decoration: none;

    @media (max-width: 1000px){
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`
export const Link = styled.div`
    color: #fff;
    margin-bottom: 18px;
    font-size: 15px;
    text-decoration: none;

    &:hover{
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`
export const Title = styled.div`
    font-size: 18px;
    color: #fff;
    margin-bottom: 10px;
    font-weight: bold;
    text-decoration: none;
`
export const RowWay = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 10px;
    text-decoration: none;


    @media (max-width: 1000px){
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`
