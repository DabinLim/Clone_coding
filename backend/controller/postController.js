const postWrite = async (req, res) => {
  res.send('postWrite');
};

const getWrite = async (req, res) => {
  res.send('getWrite');
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