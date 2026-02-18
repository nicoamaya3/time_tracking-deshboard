

import "../stylesheets/Cartas.css"


export const Cartas = () => {
    return (
        <>
            <div class="cards">
                <div class="card-headers">
                    <span class="card-title">Work</span>
                    <button class="card-menu" aria-label="More options">
                        <span></span><span></span><span></span>
                    </button>
                </div>
                <div class="card-hours">32hrs</div>
                <div class="card-footer">
                    <span class="label">Last Week</span>
                    <span class="value">–34hrs</span>
                </div>
            </div>
        </>
    )
}
