const Post = require("../schemas/post");

// 글쓰기 
const postWrite = async (req, res) => {
  const {
    params: {id},
    body: { author, content, file }
  } = req;
  const newPost = await Post.create({
    author,
    content,
    file,
  })
  res.redirect(`detail/:${newPost.id}`)
};

const getWrite = async (req, res) => {
  res.render('view file 이름');
};

const detail = async (req, res) => {
  res.send('detail page');
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

module.exports = { getWrite, detail, getEditWrite, postEditWrite, deleteWrite }