import '../css/PostSearch.css'

function PostSearch() {
    return (
        <div className="post-search">
            <label htmlFor="search-location">주소</label>
            <input id="search-location" type="text" placeholder="건물명, 도로명, 지번으로 검색해주세요." />
        </div>
    )
}




export default PostSearch
