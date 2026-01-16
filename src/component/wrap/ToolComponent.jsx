export default function ToolComponent() {    
    return(
        <section id="tool">
            <div className="toolBar">
                <ul className="toolItem space">
                    <li><button type="button" className="tool01">초기화</button></li>
                    <li><button type="button" className="tool02">선박통합</button></li>
                    <li><button type="button" className="tool03">구역설정</button></li>
                </ul>
                <ul className="toolItem mt30">
                    <li><button type="button" className="tool04">거리</button></li>
                    <li><button type="button" className="tool05">면적</button></li>
                    <li><button type="button" className="tool06">거리환</button></li>
                </ul>
                <ul className="toolItem space mt30">
                    <li><button type="button" className="tool07">인쇄</button></li>
                    <li><button type="button" className="tool08">다운로드</button></li>
                </ul>
            </div>
            <div className="control">
                <ul className="toolItem zoom">
                    <li><button type="button" className="zoomin" title="확대"><span className="blind">확대</span></button></li>
                    <li className="num">7</li>
                    <li><button type="button" className="zoomout" title="축소"><span className="blind">축소</span></button></li>
                </ul>
                <ul className="toolItem space mt30">
                    <li><button type="button" className="legend">범례</button></li>
                    <li><button type="button" className="minimap">미니맵</button></li>
                </ul>
            </div>
        </section>
    )
}