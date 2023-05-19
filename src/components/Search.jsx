import React, { useState } from 'react'
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import {Link} from 'react-router-dom';


function Search() {

    //to get the search data
    const [Input, setInput] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) => {
        // console.log("hey");

        e.preventDefault();
        navigate('/searched/' + Input)

    };





    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input onChange={(e) => setInput(e.target.value)}
                    type='text'
                    value={Input}

                />
                {/* <h1>{Input}</h1> */}
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`

}
margin:0rem 20rem;
div{
position:relative;
width:100%;
}

input{
    border:none;
    background:linear-gradient(35deg,#494949,#313131);
    font-size:1.2rem;
    color:white;
    padding:1rem 3rem;
    border:none;
    border-radius:1rem;
    width:100%;
    outline:none;
}
svg{
    position:absolute;
    top:50%;
    left:0%;
    transform:translate(100%,-50%);
    color:white;
}
`




export default Search