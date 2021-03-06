import React from 'react';
import undo from '../images/undo.png';
import profileDefault from '../images/profile-user-default.png';
import searchIcon from '../images/search-icon.png';
import {Link} from "react-router-dom";

function ProfileContainer() {


    return (
        <div className='profile-screen'>
            <div className='app-top-menu'>
                <Link to='/Mypage'><img className='undo' src={undo} /></Link>
                
                <button><Link to='/Mypage'>저장</Link></button>
                
            </div>
            <div className='app-wrap'>
                <div className='app-box'>
                    <div>
                        <img className='profile-default' src={profileDefault} />
                        <div className='profile-picture-change'>사진 변경하기</div>
                    </div>
                    <div id='profile-user-name'>user name</div>
                    <label htmlFor='profile-user-name' className='profile-user-name-label'>이름 또는 사용자 이름을 설정할 수 있습니다.</label>
                    <div className='profile-address'><input type='text' placeholder='주소' />
                        <span className='icon'>
                            <img className='search-icon' src={searchIcon} />
                        </span>
                    </div>
                    <div><input type='number' placeholder="한끼 예산" /></div>
                    <Link to='/Password'><button>비밀번호 변경</button></Link>
                </div>
            </div>
        </div>
    );
}

export default ProfileContainer;