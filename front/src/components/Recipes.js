import React, { useEffect, useState } from "react";
import Button from './Button';



export default function Recipes() {
    
    const [isLoading, setIsLoading] = useState(true)
    const [recipes, setRecipes] = useState(null);

    
    useEffect(() => 
    {
        fetch (`http://localhost:1337/api/recipes`,
        {
            method: "GET",
            headers: 
                {
                    'Accept': 'Application/json'
                }
                
            })
            .then(res => res.json())
        .then(res => 
            {
                setRecipes(res)
                setIsLoading(false)
        })
        
    },[]);
    
    const filter = (button) =>{
        const filteredDAta = recipes.data.filter(recipes => recipes.attributes.nationality === button)
        setRecipes(filteredDAta)
    }
    
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h1>Liste des recettes: </h1>
                <Button filter={filter}/>
            <div>
                



                {isLoading ? 'Chargement...' : recipes.data.map(recipes =>
                (
                            
                    
                    <div key = { recipes.id }>

                        <table style={{ height: 300,textAlign: "center", margin: 100, padding: 20,marginLeft: 200, marginRight: 200, border: 'solid' }}>
                            <thead>
                                <tr>
                                    <th>Nom de la recette</th>

                                    <th>Nationaliée</th>

                                    <th>Quantitée de personne</th>

                                    <th>Description</th>

                                    <th>Auteur de la recette</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><h3>{ recipes.attributes.recipe_name }</h3></td>

                                    <td>{ recipes.attributes.nationality }</td>

                                    <td>{ recipes.attributes.quantity }</td>

                                    <td>{ recipes.attributes.description }</td>

                                    <td>{ recipes.attributes.author }</td>
                                </tr>
                            </tbody>
                        </table>

                        </div>
                ))}
            </div>
        </div>
    )
}