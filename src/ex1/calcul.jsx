import Pht from "./Pht"
import TVA from "./TVA"
import Buttons from "./Boutones"
import Res from "./res"

export default function CalulPTTC() {
            return (
                <div style={{border : "1px solid black " , width : 300}}>
                    <legend>calcul de PTTC</legend>
                    <Pht/>
                    <TVA/>
                    <Buttons/>
                    <Res/>
                </div>

            )
        }