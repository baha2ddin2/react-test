import data from './data.json'
export default function Ex3() {
    return (<div>
        <h1>Lister des groupes</h1>
        <ul>
            {
                data.map((group) =>(
                    <div>
                        <li> groupe {group.id} - {group.nomGroupe}
                        <div>
                            <table border={"1"}>
                            <tr>
                                <th>id</th>
                                <th>nom complet</th>
                                <th>moyenne bac</th>
                            </tr>
                            {
                                group.membres.map((member)=>(
                                    <tr>
                                        <td>{member.id}</td>
                                        <td>{member.prenom} {member.nom}</td>
                                        <td>{member.moyenneBac}</td>
                                    </tr>
                                ))
                            }
                            </table>
                            Nombre d'inscrits : {group.membres.length} , Moyenne total de bac : {group.membres.reduce((acc, member) => acc + member.moyenneBac, 0) / group.membres.length}
                        </div>
                        </li>
                    </div>
                    ))
            }
        </ul>
    </div>)
}