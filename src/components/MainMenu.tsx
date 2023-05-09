import '../css/MainMenu.css'

function MainMenu() {
    return (
        <div className="main-menu">
            {/*<div className="inner">*/}
                <ul className="menu-list">
                    <li>
                        <a href="">
                            <span>배달주문</span>
                            <span>등급별 최대 80%</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>포장주문</span>
                            <span>산책하는 기분으로~</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>선물하기</span>
                            <span>감사한 마음을 전해요</span>
                        </a>
                    </li>
                </ul>
            </div>
        // </div>
    )
}

export default MainMenu