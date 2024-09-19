import { styled } from "styled-components"
import { cores } from "../../styles/variaveis"


export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;

    h1 {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${cores.text1};
    }

     @media(max-width: 980px) {
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 auto;
        justify-content: center;
`

export const Formulario = styled.div`
    display: block;
    width: 1024px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;

        @media(max-width: 1024px) {
        width: 320px;
    }

    ul {
    li {
    width: 100%;
    padding-bottom: 24px;

    input {
    width: 100%;
    height: 48px;
    border: none;
    border-bottom: 2px solid #d2dae2;
    outline: none;
    font-size: 1rem;
    padding: 8px 16px;
    }

    textarea {
    width: 100%;
    height: 234px;
    resize: none;
    border: 1px solid #d2dae2;
    outline: none;
    font-size: 1rem;
    padding: 8px;
    border-radius: 8px;
    }
    }
}
`
export const ButtonEmail = styled.button`
    background-color: #61DBFB;
    width: 48%;
    padding: 0.5rem 1rem;
    border: none;
    margin-bottom: 56px;
    outline: none;
    border-radius: 4px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: rgb(244, 244, 245);
    cursor: pointer;


`
export const Env = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ButtonZap = styled.button`
    background-color: rgb(34, 197, 94);
    width: 48%;
    margin-bottom: 56px;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 4px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: rgb(244, 244, 245);
    cursor: pointer;

        @media(max-width: 1024px) {
        width: 140px;
    }
`

export const TextItem = styled.h1`
    margin: 0 auto;
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 24px;
    color: ${cores.text1};
`