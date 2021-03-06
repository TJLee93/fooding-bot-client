import React from 'react';
import undo from '../images/undo.png';
import searchIcon from '../images/search-icon.png';
import warning from '../images/warning-sign-icon.png';
import {Link} from "react-router-dom";

function SignupContainer() {
    return (
        <div className='signup-screen'>
            <div className='app-top-menu'>
                <Link to='/'><img className='undo' src={undo} /></Link>
            </div>
            <div className='signup-title'>Create new Account</div>

            <div className='signup-input-wrap'>
                <div className='signup-input-box'>
                    <div><input type='text' placeholder="이름" maxLength="6" /></div>
                    <div>
                        <input type='email' placeholder="이메일" maxLength="20" />
                    </div>

                    <button className='signup-email-check-button' >중복확인</button>


                    <div><input id='pw' type='password' placeholder="비밀번호" maxLength="12" /></div>
                    <label htmlFor='pw'>비밀번호는 8자 이상으로 입력해주세요.</label>

                    <div><input id='pw-check' type='password' placeholder="비밀번호 확인" maxLength="12" /></div>
                    <label htmlFor='pw-check' className='pw-check'>
                        <img className='warning-icon' src={warning} />
                        <span className='warning-ment'>
                            입력하신 비밀번호가 다릅니다. 다시 확인해주세요.
                        </span>
                    </label>

                    <div className='signup-input-address'><input type='text' placeholder='주소' />
                        <span className='icon'>
                            <img className='search-icon' src={searchIcon} />
                        </span>
                    </div>
                    <div><input type='number' placeholder="한끼 예산" /></div>

                    <Link to='/'><button className='signup-submit-button' type='submit'>Create Account</button></Link>
                </div>
            </div>

        </div>
    );
}

export default SignupContainer;