

import "../stylesheets/Cartas.css"


export const Cartas = ({nombre , horas , anterior , horap , color}) => {
    return (
        <>
        <div className={`cartacolor ${color}`} >
               <div class="cards">
                <div class="card-headers">
                    <span class="card-title">{nombre}</span>
                    <button class="card-menu" aria-label="More options">
                        <span></span><span></span><span></span>
                    </button>
                </div>
                <div class="card-hours">{horas}</div>
                <div class="card-footer">
                    <span class="label">{anterior}</span>
                    <span class="value">{horap}</span>
                </div>
            </div>
        </div>
         
        </>
    )
}
