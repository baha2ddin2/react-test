import React from "react";

import { Link } from "react-router-dom";

import { useState } from "react";

import data from './Data.json';

export default function Menu(){


return(<div className="menu">
            <Link className="link" to='/'>Liste des stagiares</Link>
            <Link className="link" to='/add'>Ajouter un stagiaire</Link>
    </div>)



}
