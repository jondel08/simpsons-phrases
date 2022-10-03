import styled from "styled-components";
import Character from "./Character";

export default function CharacterContainer(props) {
    const {characters, reqApi} = props;

    return(
        <>
        <ContainerCharacter>
            {characters.map((character, index)=> (
                <Character dataCharacter={character} key={index}/>
            ))}
          
        </ContainerCharacter>
        <ContainerButton>
            <Button onClick={reqApi}>Actualizar</Button>
        </ContainerButton>
        </>
    );

}

const ContainerCharacter = styled.div`
    display: flex;
`;

const ContainerButton = styled.div`
    width: 100%;
    text-align: center;
`;

const Button = styled.button`
    width: 150px;
    background-color: #943126;
    color: #fff;
    //border: none;
    padding: 10px 20px;
    border-radius: 18px;
    font-size: 18px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    margin-top: 10px;
    transition: all 0.6s ease-out;

    &:hover{
    cursor: pointer;
    background-color: #FFFFFF;
    //background-color: #1c0950;
    color: #17202A;
    font-size: 20px;
  }
`;