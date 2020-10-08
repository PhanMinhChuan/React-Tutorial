import React from 'react';
import { render } from '@testing-library/react';

class Top extends React.Component {
    render() {
        //return <h1>asd</h1>;
        return (
            <form id="form">
                <h4>ĐĂNG KÝ NHẬN BÀI VIẾT MỚI</h4>
                <span>công nghệ đang thay đổi nhanh chóng. hãy cùng vươn ra thế giới với những bài viết chất lượng từ FullStack stadium bạn nhé</span>
                <input type="text" value="TÊN CỦA BẠN"></input>
                <input type="text" value="EMAIL CỦA BẠN"></input>
                <p size="20px">You will receive an informative email with new posts, I do not spam because I also hate it</p>
                <button>ĐĂNG KÝ</button>
                <p>Bạn sẽ nhận được email thông tin có bài viết mới, mình không spam vì mình cũng rất ghét :)</p>
            </form>
        );
    }
}


export default Top;