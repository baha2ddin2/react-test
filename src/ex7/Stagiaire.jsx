export default function Stagiaire(props){

    return(<>
        <div className="sta" >
            <img width={"250px"} src={props.S.image} alt={props.S.nom}/>
            <h3>{props.S.prenom +" "+props.S.nom}</h3>
            <h4>{props.S.filiere}</h4>
        </div>
    </>)
}