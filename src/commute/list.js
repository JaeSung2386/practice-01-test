import React, {Component} from 'react';
import Search from '../Search';

class List extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="h3 mb-1 text-gray-800">
                    출퇴근 조회
                    <Search />
                    <div>
                        ㅇㅇㅇ님의 0000/00/00~0000/00/00 ㅁㅁ기록
                    </div>
                    <div>
                        <table border='1'>
                            <tr>
                                <th>이름</th>
                                <th>일자</th>
                                <th>요일</th>
                            </tr>
                            <tr>
                                <td>강재성</td>
                                <td>2019/04/22</td>
                                <td>월</td>
                            </tr>
                        </table>
                    </div>
                </h1>
            </div>
        )
    }
};

export default List;