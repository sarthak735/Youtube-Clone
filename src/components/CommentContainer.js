import React from 'react'
// import { COMMENT_API } from '../utils/constants';

const CommentData = [
  {
    name: "Sarthak Singh",
    text: "Your content is really good",
    replies : [
      {
        name: "Sarthak Singh",
        text: "Your content is really good",
        replies : [
          
        ]
      },
      {
        name: "Sarthak Singh",
        text: "Your content is really good",
        replies : [
          
        ]
      },
      {
        name: "Sarthak Singh",
        text: "Your content is really good",
        replies : [
          {
            name: "Sarthak Singh",
            text: "Your content is really good",
            replies : [
              
            ]
          },
          {
            name: "Sarthak Singh",
            text: "Your content is really good",
            replies : [
              {
                name: "Sarthak Singh",
                text: "Your content is really good",
                replies : [
                  {
                    name: "Sarthak Singh",
                    text: "Your content is really good",
                    replies : [
                      
                    ]
                  },
                ]
              },
            ]
          },
        ]
      },
    ]
  },
  {
    name: "Sarthak Singh",
    text: "Your content is really good",
    replies : [
      
    ]
  },
  {
    name: "Sarthak Singh",
    text: "Your content is really good",
    replies : [
      
    ]
  },
  {
    name: "Sarthak Singh",
    text: "Your content is really good",
    replies : [
      
    ]
  },
]

const Comment = ({data}) =>{

  // const[viewComments, setViewComments] = useState([]);

  // useEffect(() => {
  //   getViewComments();
  // },[viewComments])

  // const getViewComments = async () =>{
  //   const data = await fetch (COMMENT_API);
  //   const json = await data.json();
  //   //console.log(json.items);

  //   setViewComments(json);
  // }


  const {name, text} = data;
  return (
  <div className=' flex shadow-sm bg-gray-100 p-2 rounded-lg my-2 '>
    <img 
        className=' m-2 h-12'
        alt="user"
        src='https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png'
        />
        <div className=' px-2 py-2'>
          <p className=' font-bold'>{name}</p>
          <p>{text}</p>
        </div>
  </div>
)
}
const CommentsList = ({comments}) =>{
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment}/>
      <div className='pl-10 border border-l-black ml-5'>
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ))
}


const CommentContainer = () => {
  

  return (
    <div className=' p-2 m-4'>
      <h1 className=' text-2xl font-bold'>Comments: </h1>
      <CommentsList comments={CommentData}/>
        </div>
  )
}

export default CommentContainer