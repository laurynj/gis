export default function NavComponent() {  
    return(
        <nav id="nav">
            <ul className="gnb">
                <li><a href="!#" className="gnb1 active" title="선박"><span className="blind">선박</span></a></li>
                <li><a href="!#" className="gnb2" title="기상"><span className="blind">기상</span></a></li>
                <li><a href="!#" className="gnb3" title="타임라인"><span className="blind">타임라인</span></a></li>
                <li><a href="!#" className="gnb4" title="챗봇"><span className="blind">챗봇</span></a></li>
                <li><a href="!#" className="gnb5" title="리플레이"><span className="blind">리플레이</span></a></li>
                <li><a href="!#" className="gnb6" title="항적조회"><span className="blind">항적조회</span></a></li>
            </ul>

            <ul className="side">
                <li><a href="#" className="side1" title="필터"><span className="blind">필터</span></a></li>
                <li><a href="#" className="side2" title="레이어"><span className="blind">레이어</span></a></li>
            </ul>
        </nav>
    )
}