import { AiOutlineSearch } from 'react-icons/ai';
import {BsBellFill} from 'react-icons/bs';
import {CiUser} from 'react-icons/ci';
import {CiMail} from 'react-icons/ci';
import {CiLocationOn} from 'react-icons/ci';
import {AiOutlineCloudDownload} from 'react-icons/ai';
import {AiOutlineDelete} from 'react-icons/ai';
import {BiCircle} from 'react-icons/bi';

import './App.css'

const App =()=>(
  <div className="background-container">  
    <div className='search-input-container'>
       <div className='searchicon_bg'>
       <AiOutlineSearch className='searchicon' />
      <input type='search' placeholder='Search' className="search-input" />
      </div>
      <div className='belll_and_smallimag_container'>
        <BsBellFill className='bsbellicon' />
        <img alt='logoimg' src='https://www.text-image.com/samples/per_normal_face.jpg' className='top_img' /> 
      </div>
    </div>
    <div className='middle_part_tabs_container'>
     <div className='middle_tabs_left_side'>
       <ul>
         <li className='activetab'>Account</li>
         <li>Business</li>
         <li>Plans</li>
       </ul>
     </div>
     <div className='middle_tabs_right_side_btn'>
       <button type='button' className='Nextbtn'>Next</button>
     </div>
    </div>
    <div className='Final_container'>
      <div className='input_filed_container'>
         <div className='input_spinner_container'>
         <label htmlFor='firstname'>First Name</label><br/>
         <div className='inputflexdiv'>
           <div className='icon_of_input'>
            <CiUser />
           </div>
           <input type='text' id='firstname' placeholder='Usman*' />
         </div>
         </div>
         <div className='input_spinner_container'>
         <label htmlFor='firstname'>Last Name</label><br/>
         <div className='inputflexdiv'>
           <div className='icon_of_input'>
            <CiUser />
           </div>
           <input type='text' id='firstname' placeholder='Ndako' />
         </div>
         </div>
         <div className='input_spinner_container'>
         <label htmlFor='firstname'>Email</label><br/>
         <div className='inputflexdiv'>
           <div className='icon_of_input'>
            <CiMail />
           </div>
           <input type='text' id='firstname' placeholder='usmannadako.com*' />
         </div>
         </div>
         <div className='input_spinner_container'>
          <label htmlFor='otpfiled'>OTP</label><br/>
            <div className='inputflexdiv'>
              <input type='text' id='otpfiled' placeholder='123456' />
            
          </div>
         <div className='input_spinner_container'>
         <label htmlFor='firstname'>Phone number</label><br/>
         <div className='inputflexdiv'>
           <div className='icon_of_input'>
            <img src='https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg' alt='nationFlag' className='nationFlag' />
           </div>
           <select>
              <option>+91</option>
           </select>
            <div className='inputflexdiv'>
              <input type='text' id='otpnumfiled' placeholder='123456' />
            </div>
         </div>
         </div>
         </div>
         <div className='input_spinner_container'>
         <label htmlFor='otpfiled'>OTP</label><br/>
            <div className='inputflexdiv'>
              <input type='text' id='otpfiled' placeholder='123456' />
            
          </div>
          </div>
          <div className='input_spinner_container'>
         <label htmlFor='firstname'>Address</label><br/>
         <div className='inputflexdiv'>
           <div className='icon_of_input'>
            <CiLocationOn />
           </div>
           <input type='text' id='firstname' placeholder='No.20,Bangalore' />
         </div>
         </div>
         <div className='input_spinner_container'>
         <label htmlFor='otpfiled'>Pincode</label><br/>
            <div className='inputflexdiv'>
              <input type='text' id='otpfiled' placeholder='123456' />
            
          </div>
          </div>
      </div>
      <div className='center_image_backgrouind'>
        <div className='icon_image'>
          <AiOutlineCloudDownload />
        </div>
        <div  className='icon_image'>
          <AiOutlineDelete />
        </div>
      </div>
      <div className='lfex'>
      <div>
        <p className='userpara'>User Card</p>
        <div className='lastcart'>
          <div>
            <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wucmv2fiuvrz6evnn1hm' className='orgapantimg' alt='img' />
          </div>
          <div>
            <div className='join_text'>
              <CiUser className='username' />
              <p>UsmanKumar</p>
            </div>
            <div className='join_text'>
              <CiMail />
              <p>Usmanadko@gamil.com</p>
            </div>
            <div className='join_text'>
              <CiLocationOn />
              <p>Bangalore</p>
            </div>
            <div className='join_text'>
              <BiCircle />
                <p>ID 34394</p> 
            </div>
          </div>
          <div className='qrhelp'>
          <div>
            <img src='https://lh3.googleusercontent.com/mCi98gKIA1sFmNajTlarMCzcF_Tfx5jQCkkh_jCGKbOSGxSNRPj4Y5ss-AJZBiJD3ZLk3Xtqx7Hhwq4PdZ-5QKn7owVWS3tgrn7_9pLG' className='qucode'  alt="qrcode"/>
          </div>
          </div>
          </div>
        <p className='userpara'>For v2</p>
        </div>
      </div>
      </div>
    </div>
  
)

export default App

