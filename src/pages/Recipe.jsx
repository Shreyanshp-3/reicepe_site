import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

function Recipe() {

    let params = useParams();

    const [Details, setDetails] = useState({});
    const [ActiveTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const detailData = await data.json();

        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails();
        // getCuisine(params.type);
        // console.log(params.type);
    }, [params.name]);

    return (
        <Detailwrapped>
            <div>
                <h2>{Details.title}</h2>
                <img src={Details.image} alt='' />
            </div>
            <Info>
                <Button className={ActiveTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>
                    Instruction!
                </Button>
                <Button className={ActiveTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>
                    Ingredients
                </Button>

                {ActiveTab === 'instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: Details.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: Details.instructions }}></h3>
                    </div>
                )}
                {ActiveTab === 'ingredients' && (

                    <ul>
                        {Details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}

                    </ul>
                )};
            </Info>
        </Detailwrapped>
    );
}


//styles
const Detailwrapped = styled.div`
    margin-top:10rem;
    margin-bottom:5rem;
    display:flex;
    width:100%;

.active{
    background:linear-gradient(35deg,#494949,#313131);
    color:white;

}
h2{
        margin-bottom:2rem;
    }
li{
        font-size:1.2rem;
    }
ul{
        margin-top:2rem;
    }
    img{
        width:20rem;
        height:20rem
    }
`;


const Button = styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;
display:flex;

`;

const Info = styled.div`
margin-left:10rem;
text-align:left;
${'' /* padding-top:5rem; */}

`;

export default Recipe