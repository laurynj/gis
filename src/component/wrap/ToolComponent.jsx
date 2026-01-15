export default function ToolComponent() {    
    return(
        <section id="tool">
            <div class="toolBar">
                <ul class="toolItem space">
                    <li><button type="button" class="tool01">초기화</button></li>
                    <li><button type="button" class="tool02">선박통합</button></li>
                    <li><button type="button" class="tool03">구역설정</button></li>
                </ul>
                <ul class="toolItem mt30">
                    <li><button type="button" class="tool04">거리</button></li>
                    <li><button type="button" class="tool05">면적</button></li>
                    <li><button type="button" class="tool06">거리환</button></li>
                </ul>
                <ul class="toolItem space mt30">
                    <li><button type="button" class="tool07">인쇄</button></li>
                    <li><button type="button" class="tool08">다운로드</button></li>
                </ul>
            </div>
            <div class="control">
                <ul class="toolItem zoom">
                    <li><button type="button" class="zoomin" title="확대"><span class="blind">확대</span></button></li>
                    <li class="num">7</li>
                    <li><button type="button" class="zoomout" title="축소"><span class="blind">축소</span></button></li>
                </ul>
                <ul class="toolItem space mt30">
                    <li><button type="button" class="legend">범례</button></li>
                    <li><button type="button" class="minimap">미니맵</button></li>
                </ul>
            </div>
        </section>
    )
}