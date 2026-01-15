import { useState } from 'react';
export default function Panel1Component({ isOpen, onToggle }) {
    const [activeTab, setActiveTab] = useState('ship01');

    const tabs = [
        { id: 'ship01', label: '선박검색' },
        { id: 'ship02', label: '허가선박' },
        { id: 'ship03', label: '제재단속' },
        { id: 'ship04', label: '침몰선박' },
        { id: 'ship05', label: '선박입출항' },
        { id: 'ship06', label: '관심선박' }
    ];
    return (
        <aside className={`slidePanel ${!isOpen ? 'is-closed' : ''}`}>
        {/* 탭 버튼 */}
        <div className="tabBox">
            <div className="tabDefault">
            {tabs.map(tab => (
                <button
                key={tab.id}
                type="button"
                className={activeTab === tab.id ? 'on' : ''}
                onClick={() => setActiveTab(tab.id)}
                >
                {tab.label}
                </button>
            ))}
            </div>
        </div>

        {/* 탭 콘텐츠 01 */}
        <div className={`tabWrap ${activeTab === 'ship01' ? 'is-active' : ''}`}>
            <div className="tabTop">
            <div className="title">의심선박 리스트</div>

            <div className="formGroup">
                <ul>
                <li>
                    <div className="col">
                    <select>
                        <option>신원 및 서류 위조</option>
                    </select>
                    </div>
                    <div className="col">
                    <select >
                        <option>신호 은폐 및 조작</option>
                    </select>
                    </div>
                </li>
                <li>
                    <div className="col">
                    <select>
                        <option>물리적 이상 행동</option>
                    </select>
                    </div>
                    <div className="col">
                    <select>
                        <option>경쟁 제재 및 블랙리스트</option>
                    </select>
                    </div>
                </li>
                </ul>
            </div>

            <div className="schbox mtb24">
                <ul>
                <li>
                    <input type="text" placeholder="대표검도" />
                </li>
                <li>
                    <button type="button" className="schBtn">검색</button>
                </li>
                </ul>
            </div>
            </div>

            <div className="tabBtm">
            <ul className="shipList">
                <li>
                <a href="#!" className="active">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </a>
                </li>
                <li>
                <a href="#!" className="">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </a>
                </li>
            </ul>
            </div>
        </div>

        {/* 탭 콘텐츠 02 */}
        <div className={`tabWrap ${activeTab === 'ship02' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">허가선박</div>
                <div className="formGroup">
                    <ul>
                        <li>
                            <label>
                                <span>타겟 ID</span>
                                <select>
                                    <option>전체</option>
                                </select>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>선박명</span>
                                <input type="text" placeholder="선박명" />
                            </label>
                        </li>
                        <li class="fgBtn">
                            <button type="button" className="schBtn">검색</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* 탭 콘텐츠 03 */}
        <div className={`tabWrap ${activeTab === 'ship03' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">제재단속</div>
                <div className="formGroup">
                    <ul>
                        <li>
                            <label>
                                <span>제재 유형</span>
                                <input type="text" placeholder="타겟 ID" />
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>선박명</span>
                                <input type="text" placeholder="선박명" />
                            </label>
                        </li>
                        <li class="fgBtn">
                            <button type="button" className="schBtn">검색</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm">
            <ul className="shipList">
                <li>
                <a href="#!" className="active">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </a>
                </li>
                <li>
                <a href="#!" className="">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </a>
                </li>
            </ul>
            </div>
        </div>
        {/* 탭 콘텐츠 04 */}
        <div className={`tabWrap ${activeTab === 'ship04' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">침몰선박</div>
                <div className="formGroup">
                    <ul>
                        <li>
                            <label>
                                <span>선박명</span>
                                <input type="text" placeholder="선박명" />
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>사고기간</span>
                                <input type="text" placeholder="사고기간" />
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>사고내용</span>
                                <input type="text" placeholder="사고내용" />
                            </label>
                        </li>
                        <li class="fgBtn">
                            <button type="button" className="schBtn">검색</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm">
            <ul className="shipList">
                <li>
                <a href="#!" className="active">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </a>
                </li>
                <li>
                <a href="#!" className="">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </a>
                </li>
            </ul>
            </div>
        </div>
        {/* 탭 콘텐츠 05 */}
        <div className={`tabWrap ${activeTab === 'ship05' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">선박입출항</div>
                <div className="formGroup">
                    <ul>
                        <li>
                            <label>
                                <span>출항일시</span>
                                <input type="text" placeholder="연도-월-일 - -:-" />
                            </label>
                            <label>
                                <span>~ 입항일시</span>
                                <input type="text" placeholder="연도-월-일 - -:-" />
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>PMS<br/>출항항구</span>
                                <select>
                                    <option>전체</option>
                                </select>
                            </label>
                            <label>
                                <span>PMS<br/>입항항구</span>
                                <select>
                                    <option>전체</option>
                                </select>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>SIE<br/>출항항구</span>
                                <select>
                                    <option>전체</option>
                                </select>
                            </label>
                            <label>
                                <span>SIE<br/>입항항구</span>
                                <select>
                                    <option>전체</option>
                                </select>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span>타겟ID</span>
                                <input type="text" placeholder="타겟ID" />
                            </label>
                            <label>
                                <span>선박명</span>
                                <input type="text" placeholder="선박명" />
                            </label>
                        </li>
                        <li class="fgBtn">
                            <button type="button" className="schBtn">검색</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tabBtm">
            <ul className="shipList">
                <li>
                <a href="#!" className="active">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </a>
                </li>
                <li>
                <a href="#!" className="">
                    <i className="cicle default"></i>
                    <span>0001</span>
                    <span>1511함A-05</span>
                    <span>
                    <img src="/images/flag_kor.svg" alt="대한민국" className="flagIcon" />
                    </span>
                    <span>(AIS)</span>
                    <span className="legend">
                    <img src="/images/legend_ship_pink.svg" alt="선박" className="legendShip" />
                    </span>
                </a>
                </li>
            </ul>
            </div>
        </div>
        {/* 탭 콘텐츠 06 */}
        <div className={`tabWrap ${activeTab === 'ship06' ? 'is-active' : ''}`}>
            <div className="tabTop">
                <div className="title">관심선박</div>
            </div>
        </div>
        {/* 사이드패널 토글버튼 */}
        <button
        type="button"
        className="toogle"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="blind">
          {isOpen ? '패널 접기' : '패널 열기'}
        </span>
      </button>
        </aside>
    );
}
