import styled from "styled-components";


interface IInput{
bgColor:string;
}

export const FormInput = styled.input`
  width: 100%;
  color: #fff;
  &:focus {
    color: #fff;
  }
  margin-bottom: 16px;
  font-size: 14px;
  border-radius: 2px;
  background-color: ${(props:IInput)=>props.bgColor};
  height: 56px;
  border: none;
  outline: none;
  text-indent: 20px;
  
`;

/* import styled from "styled-components";

interface IInput{
  bgColor:string;
}

export const FormInput = styled.input`
  width: 100%;
  color: #fff;
  &:focus {
    color: #fff;
  }
  margin-bottom: 16px;
  font-size: 14px;
  border-radius: 2px;
  background-color: ${(props:IInput)=>props.bgColor};
  height: 56px;
  border: none;
  outline: none;
  text-indent: 20px;
`;
 */
