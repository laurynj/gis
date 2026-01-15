export default function PanelComponent() {
    return(
        <aside class="slidePanel" data-panel="side">
            {/* 탭버튼 */}
            <div class="tabBox">
                <div class="tabDefault">
                    <button type="button" class="on" data-target="ship01">선박검색</button>
                    <button type="button" class=""  data-target="ship02">허가선박</button>
                    <button type="button" class=""  data-target="ship03">제재단속</button>
                    <button type="button" class=""  data-target="ship04">침몰선박</button>
                    <button type="button" class=""  data-target="ship05">선박입출항</button>
                    <button type="button" class=""  data-target="ship06">관심선박</button>
                </div>
            </div>
            {/* 탭내용 01 */}
            <div class="tabWrap" id="ship01">
                {/* 탭조건영역 */}
                <div class="tabTop">
                    <div class="title">의심선박 리스트</div>
                    <div class="formGroup">
                        <ul>
                            <li>
                                <div class="col">
                                    <select name="" id="" class="select" required="">
                                        <option value="">신원 및 서류 위조</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <select name="" id="" class="select" required="">
                                        <option value="">신호 은폐 및 조작</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <div class="col">
                                    <select name="" id="" class="select" required="">
                                        <option value="">물리적 이상 행동</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <select name="" id="" class="select" required="">
                                        <option value="">경쟁 제재 및 블랙리스트</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="schbox mtb24">
                        <ul>
                            <li><input type="text" class="input" placeholder="대표검도" /></li>
                            <li><button type="button" class="schBtn">검색</button></li>
                        </ul>
                    </div>
                </div>
                {/* 탭결과 */}
                <div class="tabBtm">
                    <ul class="shipList">
                        <li>
                            <a href="!#" class="active">
                                <i class="cicle default"></i><span>0001</span><span>1511함A-05</span>
                                <span><img src="images/flag_kor.svg" alt="대한민국" class="flagIcon" /></span><span>(AIS)</span>
                                <span class="legend"><img src="images/legend_ship_pink.svg" alt="선박" class="legendShip" /></span>
                            </a>
                        </li>
                        <li>
                            <a href="!#" class="">
                                <i class="cicle default"></i><span>0001</span><span>1511함A-05</span>
                                <span><img src="images/flag_kor.svg" alt="대한민국" class="flagIcon" /></span><span>(AIS)</span>
                                <span class="legend"><img src="images/legend_ship_pink.svg" alt="선박" class="legendShip" /></span>
                            </a>
                        </li>
                        <li>
                            <a href="!#" class="">
                                <i class="cicle default"></i><span>0001</span><span>1511함A-05</span>
                                <span><img src="images/flag_kor.svg" alt="대한민국" class="flagIcon" /></span><span>(AIS)</span>
                                <span class="legend"><img src="images/legend_ship_pink.svg" alt="선박" class="legendShip" /></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* 탭내용 02 */}
            <div class="tabWrap" data-tab-content id="ship02">
                <div class="tabTop">
                    <div class="title">허가선박</div>
                </div>
            </div>
            {/* 사이드패널 토글버튼 */}
            <button type="button" class="toogle" data-toggle="side-panel" aria-expanded="true"><span class="blind">패널 접기</span></button>
        </aside>
    )
}