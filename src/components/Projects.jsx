import Project from "./Project"
import Heading from "./Heading"
import Chandos from "../assets/projects/chandos.png"
import Cryptgo from "../assets/projects/cryptgo.png"
import Feane from "../assets/projects/feane.png"
import Moviebox from "../assets/projects/moviebox.png"
import VirtualCall from "../assets/projects/virtual_call.png"
import Vla from "../assets/projects/vla.png"

export default function Projects(){
    return(
        <section className="md:w-[95%] mx-auto">
            <Heading heading='Projects.' headingAlign='center' subHeading='Here are a few of My Projects:' subAlign='center' />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-9 gap-4">

                <Project src={Chandos} role='FrontEnd Developer' title="CHANDOS Construction | Construction Website" desc="A construction website displaying the arts and works of the construction company. Built in Public" display6="hidden" display7="hidden" display8="hidden" display9="hidden" display10="hidden" display11="hidden" display12="hidden" display13="hidden"/>

                <Project src={Cryptgo} display="hidden" role="Full-Stack Developer" title="CRYPTGO Exchange | Cryptocurreny Website" desc="A cryptocurrency website where users can convert digital currencies into hard currency at a relatively low rate." display5="hidden" display6="hidden" display10="hidden" display12="hidden" display13="hidden"/>

                <Project src={Feane} role="Full-Stack Developer" title="FEANE's Restaurant and Eatery | Restaurant Website" desc="A restaurant website where users can place food orders, view menu and pay directly online. API Integration. Built in Public." display1="hidden" display7="hidden" display8="hidden" display9="hidden" display11="hidden"  display12="hidden"/>

                <Project src={Moviebox} display="hidden" role="Full-Stack Developer" title="MOVIEBOX | Movies and Entertainment" desc="A movie streaming website to watch, view, subscribe and download action, Sci-Fi, fiction, nollywood, hollywood movies. API Integration." display5="hidden" display6="hidden" display10="hidden"  display12="hidden" display13="hidden"/>

                <Project src={Vla} role="Full-Stack Developer" title="Vertical Limit Academy | School Website" desc="A school website with admin dashboard where parents and authorized personnels can view, past and present student results using a unique ID. Built in Public." display1="hidden" display7="hidden" display8="hidden" display11="hidden" />

                <Project src={VirtualCall} role="Full-Stack Developer" title="Virtual Call | E-Commerce Website" desc="Users can purchase, hire and reserve phone numbers of different nationalities and different timezones included. API Integration and real-life data feedback." display2="hidden" display5="hidden" display6="hidden" display10="hidden" display13="hidden" />

            </div>
        </section>
    )
}