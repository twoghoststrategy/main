
const one = [
    template: `
    <z-view style="border-color: #8F6AFA; font-family: 'Montserrat', sans-serif; font-weight: bold; color: #ffffff; border-width: 1px; background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%)">
    OAKwave Strategic Growth Model
        <z-spot
          slot="extension"
          :angle="0"
          size="medium"
          to-view="context"
          style="border-color: #375CDC; border-width: 1px;   background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%); font-size: 13px; color: white;">
    Context      </z-spot>

    <z-spot
          slot="extension"
          :angle="50"
          size="medium"
          to-view="market"
          style="border-color: #375CDC; border-width: 1px;   background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%); font-size: 13px; color: white;">
    Market      </z-spot>


    <z-spot
          slot="extension"
          :angle="100"
          size="medium"
          to-view="brand"
          style="border-color: #375CDC; border-width: 1px;   background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%); font-size: 13px; color: white;">
    Brand      </z-spot>


    <z-spot
          slot="extension"
          :angle="150"
          size="medium"
          to-view="techstack"
          style="border-color: #375CDC; border-width: 1px;   background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%); font-size: 13px; color: white;">
    Tech Stack      </z-spot>


    <z-spot
          slot="extension"
          :angle="200"
          size="medium"
          to-view="growth"
          style="border-color: #375CDC; border-width: 1px;   background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%); font-size: 13px; color: white;">
    Growth      </z-spot>


    <z-spot
          slot="extension"
          :angle="250"
          size="medium"
          to-view="action"
          style="border-color: #375CDC; border-width: 1px;   background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%); font-size: 13px; color: white;">
    Action      </z-spot>



    </z-view>`
    ];
    const context = {
    template: `
    <z-view style="border: 1px #0099EE solid;  background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%); font-size: 32px; color: white;">
     Context


    <z-spot
        slot="extension"
        color="#8F6AFA"
        :angle="250"
        size="large"
        to-view="roadblocks" style="border: 1px solid white;  font-size: 16px; color: white;">
         Roadblocks
        </z-spot>
    <z-spot
        slot="extension"
        color="black"
        :angle="200"
        size="large"
        to-view="roots" style="border: 1px solid white; font-size: 16px;   color: white;">
         Roots
        </z-spot>


     <z-spot
        slot="extension"
        color="black"
        :angle="150"
        size="large"
        to-view="constraints" style="border: 1px solid white;   font-size: 16px;  color: white;">
         Constraints
        </z-spot>


    <z-spot
        slot="extension"
        color="black"
        :angle="100"
        size="large"
        to-view="history" style="border: 1px solid white;  font-size: 16px;  color: white;">
         History
        </z-spot>

        <z-spot
        slot="extension"
        color="black"
        :angle="0"
        size="large"
        to-view="vision" style="border: 1px solid white; font-size: 16px;  color: white;">
         Vision
        </z-spot>

         <z-spot
        slot="extension"
        color="black"
        :angle="50"
        size="large"
        to-view="mission" style="border: 1px solid white; font-size: 16px;  color: white;">
    Mission
        </z-spot>
    </z-view>`
    ];

    const market = [
    template: `
    <z-view style="border: 1px #0099EE solid;  background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%); font-size: 32px; color: white;">
     Market


    <z-spot
        slot="extension"
        color="#8F6AFA"
        :angle="225"
        size="large"
        to-view="research" style="border: 1px solid white;  font-size: 16px; color: white;">
         Research Surveys
        </z-spot>
    <z-spot
        slot="extension"
        color="black"
        :angle="180"
        size="large"
        to-view="buyers" style="border: 1px solid white; font-size: 16px;   color: white;">
         Buyer Base
        </z-spot>


     <z-spot
        slot="extension"
        color="black"
        :angle="135"
        size="large"
        to-view="personas" style="border: 1px solid white;   font-size: 16px;  color: white;">
         Personas
        </z-spot>


    <z-spot
        slot="extension"
        color="black"
        :angle="90"
        size="large"
        to-view="industry" style="border: 1px solid white;  font-size: 16px;  color: white;">
         Industry Analysis
        </z-spot>

    `
    ];

    const brand = [
    template: `
    <z-view style="border: 1px #0099EE solid;  background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%); font-size: 32px; color: white;">
     Brand


    <z-spot
        slot="extension"
        color="#8F6AFA"
        :angle="225"
        size="large"
        style="border: 1px solid white;  background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%);  font-size: 12px; color: white;">Visuals
        </z-spot>
    <z-spot
        slot="extension"
        color="black"
        :angle="180"
        size="large"
        style="border: 1px solid white; font-size: 16px;   color: white;">
    Voice      </z-spot>


     <z-spot
        slot="extension"
        color="black"
        :angle="135"
        size="large"
       style="border: 1px solid white;   font-size: 16px;  color: white;">
         Messaging Framework
        </z-spot>


    <z-spot
        slot="extension"
        color="black"
        :angle="90"
        size="large"
       style="border: 1px solid white;  font-size: 16px;  color: white;">
    Perception
        </z-spot>
        </z-view>

    `
    ];

    const growth = [
    template: `
    <z-view style="border: 1px #0099EE solid;  background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%); font-size: 32px; color: white;">
     Growth


    <z-spot
        slot="extension"
        color="#8F6AFA"
        :angle="225"
        size="large"
       style="border: 1px solid white;  background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%);  font-size: 12px; color: white;">Digital Campaigns
        </z-spot>
    <z-spot
        slot="extension"
        color="black"
        :angle="180"
        size="large"
       style="border: 1px solid white;  background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%);  font-size: 12px; color: white;">
    Traditional Campaigns      </z-spot>

    </z-view>

    `
    ];


    const techstack = [
    template: `
    <z-view style="border: 1px #0099EE solid;  background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%); font-size: 32px; color: white;">
     Tech Stack


    <z-spot
        slot="extension"
        color="#8F6AFA"
        :angle="0"
        size="large"
       style="border: 1px solid white;  background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%);  font-size: 12px; color: white;">Tracking & CRM
        </z-spot>
    <z-spot
        slot="extension"
        color="black"
        :angle="60"
        size="large"
       style="border: 1px solid white; font-size: 16px;   color: white;">
    Website      </z-spot>


     <z-spot
        slot="extension"
        color="black"
        :angle="135"
        size="large"
       style="border: 1px solid white;   font-size: 16px;  color: white;">
         Martech
        </z-spot>
    </z-view>

    `
    ];
    const action = [
    template: `
    <z-view style="border: 1px #0099EE solid;  background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%); font-size: 32px; color: white;">
     Action


    <z-spot
        slot="extension"
        color="#8F6AFA"
        :angle="0"
        size="large"
        style="border: 1px solid white;  background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%);  font-size: 12px; color: white;">
    Demolition      </z-spot>
    <z-spot
        slot="extension"
        color="black"
        :angle="60"
        size="large"
       sstyle="border: 1px solid white;  background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%);  font-size: 12px; color: white;">
    Roadmap      </z-spot>


     </z-view>
    `
    ];

    const personas = [
    template: `
    <z-view style="border: 1px solid white;  color: white;">
    Personas  </z-view>`
    ];

    const buyers = [
    template: `
    <z-view style="border: 1px solid white;  color: white;">
    Buyer Base
    </z-view>`
    ];

    const industry = [
    template: `
    <z-view style="border: 1px solid white;  color: white;">
    Industry Analysis
    </z-view>`
    ];
    const research = [
    template: `
    <z-view style="border: 1px solid white;  color: white;">
    Research Studies
    </z-view>`
    ];
    const roadblocks = [
    template: `
    <z-view style="border: 1px solid white;  color: white;">
    Roadblocks
    </z-view>`
    ]
    const roots = [
    template: `
    <z-view style="border: 1px solid white;  color: white;">
    Roots
    </z-view>`
    ];
    const constraints = [
    template: `
    <z-view style="border: 1px solid white;  color: white;">
    Constraints
    </z-view>`
    ];
    const history = [
    template: `
    <z-view style="border: 1px solid white;  color: white;">
    History
    </z-view>`
    ];
    const vision = [
    template: `
    <z-view style="border: 1px solid white;  color: white; font-size: 16px;">
    A vision serves as your company's north star.
    </z-view>`
    ];
    const mission = [
    template: `
    <z-view style="border: 1px solid white;  color: white; font-size: 16px; line-height: 16px;">
    A mission statement is what you are doing today to get to tomorrow.
    </z-view>`
    ];

    new Vue({
      el: 'app',
      components: {
        one,
        context,
        vision,
        mission,
        history,
        constraints,
        roots,
        roadblocks,
        industry,
        research,
        buyers,
        personas,
        market,
        brand,
        action,
        techstack,
        growth
      },
      mounted () {
        this.$zircle.setView('one')
      }

    })
