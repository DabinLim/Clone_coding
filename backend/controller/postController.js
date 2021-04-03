const Post = require("../schemas/post");

// 글쓰기 
const postUpload = async (req, res) => {
  const {
    params: {id},
    body: { author, content, file }
  } = req;
  try{
      const newPost = await Post.create({
        author,
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
    const post = await Post.findById(id).populate('comments');
    res.render(`detail`, { post }); 
  } catch (error) {
    console.log(error);
    res.status(400).send({
      error : '상세페이지를 불러오는 중 오류가 발생했습니다.'
    });
  };
};

const getEditWrite = async (req, res) => {
  res.send('getEdit write');
};

const postEditWrite = async (req, res) => {
  res.send('post Edit write');
};

const deleteWrite = async (req, res) => {
  res.send('deltePage');
};

module.exports = { getUpload, postUpload, detail, getEditWrite, postEditWrite, deleteWrite }