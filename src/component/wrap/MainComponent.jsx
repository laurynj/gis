export default function MainComponent() {    
    return(
        <main id="main">
            <section class="topBar">
                <div class="locationInfo">
                    <ul>
                        <li><button type="button" class="map active"><span class="blind">지도</span></button></li>
                        <li class="divider"><span class="wgs">경도</span><span>129°</span> <span>38’</span><span>31.071”</span><span>E</span></li>
                        <li class="divider"><span class="wgs">위도</span><span>35° </span> <span>21’</span><span>24.580”</span><span>N</span></li>
                        <li><span class="kst">KST</span><span>2024-07-01(화)</span> <span>12:00:00</span></li>
                        <li><button type="button" class="set"><span class="blind">설정</span></button></li>
                        <li><button type="button" class="ship"><span class="blind">선박</span></button></li>
                    </ul>
                </div>

                <div class="schBox">
                    <input type="text" class="sch" placeholder="선박 위치 검색" />
                    <button type="button" class="mainSchBtn">검색</button>
                </div>
            </section>
        </main>
    )
}