const Post = require("../schemas/post");

// 글쓰기 
const postUpload = async (req, res) => {
  const {
    params: {id},
    body: { content, file }
  } = req;
  try{
      const newPost = await Post.create({
        author, //author는 로그인한 유저에게서 정보를 받아올 예정. 
        content,
        file,
      })
      res.redirect(`detail/:${newPost.id}`);
  } catch (error) {
    res.status(400).send({
      error : '업로드하는 중 오류가 발생했습니다.'
      });
    console.log( error );  
  };

// 글쓰기 화면 랜더링
const getUpload = async (req, res) => {
  res.render('view file 이름');
};

// 상세페이지 랜더링
const detail = async (req, res) => {
  const {
    params: {id},
  } = req;
//TODO: detail 페이지 랜더링 파일 수정해야함. 임의로 넣어놓은값임
  try {
    //post.comments.author 이런식으로 클라이언트에서 콜 해서 사용하시면 됩니다.
    const post = await Post.findById(id).populate('comments');
    res.render(`detail`, { post }); 
  } catch (error) {
    console.log(error);
    res.status(400).send({
      error : '상세페이지를 불러오는 중 오류가 발생했습니다.'
    });
  };
};

// 수정하기 화면 랜더링
const getEditWrite = async (req, res) => {
  res.send('getEdit write');
};

//수정하기 ( 쓴 글에 대해서만 수정하기 )
const postEditWrite = async (req, res) => {
  const {
    params: {id},
    body: { content }
  } = req;
  try{
    if( user === post.author ) {
      //TODO: frontend의 입력값..request받아와야함. 'content:입력받은값' 으로 수정 예정.
      await Post.findByIdAndUpdate(id, { content }) 
    } else{
      console.log( '유저 정보가 불일치하여 수정할 수 없습니다.')
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      error : '수정하기에서 오류가 발생했습니다.'
    });
  };
  res.send('post Edit write');
};

const deleteWrite = async (req, res) => {
  res.send('deltePage');
};

module.exports = { getUpload, postUpload, detail, getEditWrite, postEditWrite, deleteWrite }