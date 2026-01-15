import NavComponent from "./side/NavComponent";
import PanelComponent from "./side/PanelComponent";

export default function SideComponent() {
    return(
        <section id="sidePanel">
            <NavComponent />
            <PanelComponent />
        </section>
    )
}