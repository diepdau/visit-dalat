import React from 'react'
import './style.css';
export default function FormComment() {
  return (
    <div><form className="container">
    <h2 className="text-center comment"> Để lại bình luận của bạn</h2>
    <h5 className='namecomment'>Comment</h5>
    <textarea className="col-12" rows={8} cols={100}>
      Please a comment
    </textarea>
    <h5 className='namecomment'>
      Name<span style={{ color: 'red', fontWeight: 'bold' }}>*</span>
    </h5>
    <input className="col-12 text_comment inputcomment" type="text" id="name" name="name" /><br />

    <h5 className='namecomment'>
      Email<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
    </h5>
    <input className="col-12 inputcomment" type="email" id="email" name="email" /><br />
    <h5 className='namecomment'>Website</h5>
    <input className="col-12 inputcomment" type="text" id="website" name="website" /><br />


    <button className="button button2">Post Comment</button>
  </form></div>
  )
}
