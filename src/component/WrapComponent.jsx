import HeaderComponent from "./wrap/HeaderComponent";
import MainComponent from "./wrap/MainComponent";
import SideComponent from "./wrap/SideComponent";
import ToolComponent from "./wrap/ToolComponent";

export default function WrapComponent(){
    return(
        <div id="wrap" class="wrap">
            <HeaderComponent />
            <SideComponent />
            <MainComponent />
            <ToolComponent />
        </div>
    )
}