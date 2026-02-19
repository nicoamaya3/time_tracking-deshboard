
import "../stylesheets/User.css"

export const User = () => {
  return (
    <>


      <div class="card">

        <div className="ji">
           <div class="card__header">
          <div class="avatar-wrap">

            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Jeremy Robson"
            />
            <span class="avatar-dot"></span>
          </div>

          <p class="card__label">Report for</p>
          <h1 class="card__name">Jeremy Robson</h1>
        </div>
        </div>
       


        <div class="card__body">
          <nav class="period-nav" aria-label="Report period">
            <span class="period-nav__item" onclick="setActive(this)">Daily</span>
            <span class="period-nav__item active" onclick="setActive(this)">Weekly</span>
            <span class="period-nav__item" onclick="setActive(this)">Monthly</span>
          </nav>
        </div>

      </div>


    </>
  )
}
