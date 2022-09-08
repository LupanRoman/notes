import React, { useState, createContext } from "react";
import folderIcon from '../assets/folderIcon.png';
import Notes from "../components/Notes";
import { Link } from "react-router-dom";


export const StateContext = createContext();

export const Context = ({ children }) => {
    
    const arr = [];
    const notesArr = [1, 2, 3, 4];
    
    const addTitle = () => {

        const drawerTitle = document.getElementById('drawerTitle');
        const Title = drawerTitle.value;
        const Drawers = {
            'title': Title,
            'id': Math.floor(Math.random() * 100),
            'nrOfNotes': '',
            'notes': notesArr,
        };
        const Note = {
            'title': '',
            'id': Math.floor(Math.random() * 100),
            'content': '',
        };
        const drawersList = document.getElementById('drawers-list');
        const listItem = document.createElement('li');
        const listIcon = document.createElement('img');
        const listDiv = document.createElement('div');
        const listTitle = document.createElement('h5');
        const notesNumber = document.createElement('p');
        
        if(Title === "") {
            alert("Please enter a title");
            return;
            
        } else {
            arr.push(Drawers)
            listTitle.innerText = Drawers.title;
            listIcon.src = folderIcon;
            listDiv.appendChild(listTitle);
            listDiv.appendChild(notesNumber);
            listItem.appendChild(listIcon);
            listItem.appendChild(listDiv);
            drawersList.appendChild(listItem);
            
            console.log(arr);
        }  

        const id = Drawers.id;
        const getId = () => {
            if(Drawers.id === id) {
                alert("correct id")
                
            } else {
                alert("fail")
            }
            console.log(Drawers.id)
        }
        
        listItem.addEventListener('click', getId)
        
    }

    

    return (
        <StateContext.Provider
            value={{
                addTitle,
            }}
        
        
        
        >{children}
        </StateContext.Provider>

    )
}