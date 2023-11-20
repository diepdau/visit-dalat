
import React from 'react';
import './style.css'; 

interface CommentProps {
  imgAccount: string;
  nameComment: string;
  time: string;
  contComment: string;
  AnsimgAcount?: string;
  Ansname?: string;
  Anstime?: string;
  AnscontComment?: string;
}


const CommentSection: React.FC<CommentProps> = ({
  imgAccount,
  nameComment,
  time,
  contComment,
  AnsimgAcount,
  Ansname,
  Anstime,
  AnscontComment,
}) => {
    // const getCurrentDateTime = (): string => {
    //     const currentDate = new Date();
    //     const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    //     return formattedDate;
    //   };
    //   const currentDateTime = getCurrentDateTime();
  return (
    <div>
      <div className="container">
        <div className="col-12 column">
          <div className="row rowcomment">
            <div className="col-2">
              <img className="imageComment" src={imgAccount} alt="User Avatar" />
            </div>
            <div className="col-8">
              <h5>{nameComment}</h5>
              <p className="timeComment">{time}</p>
              <p>{contComment}</p>
            </div>
            <div className="col-2">
                <button className="button button1 text-center">Trả lời</button>  
            </div>
          </div>
        </div>

        {Ansname && (
          <div className="col-12 column">
            <div className="row rowcomment">
              <div className="col-2"> </div>
              <div className="col-8">
                <div className="col-12 column">
                  <div className="row rowcomment">
                    <div className="col-3">
                      <img className="imageComment" src={AnsimgAcount} alt="" />
                    </div>
                    <div className="col-9">
                      <h5>{Ansname}</h5>
                      <p className="timeComment">{Anstime}</p>
                      <p>{AnscontComment}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <button className="button button1 text-center">Trả lời</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
