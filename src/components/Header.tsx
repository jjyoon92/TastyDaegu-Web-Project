import '../css/Header.css'

function Header() {
    return (
        <header id="Header">
            <div className="inner">
                <h1>Tasty Daegu</h1>
                <nav id="nav">
                    <ul className="top-menu">
                        <li><a href="">홈</a></li>
                        <li><a href="">주문</a></li>
                        <li><a href="">매장찾기</a></li>
                        <li><a href="">이벤트</a></li>
                        <li><a href="">마이페이지</a></li>
                        <li><a href="">장바구니</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default Header