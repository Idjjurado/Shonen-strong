const router = require('express').Router();
const { Comment, User, Post } = require('../../models');

/***** CREATE *****/
// Route to create a new comment
// POST method with endpoint '/api/comments/'
// test with: {"text": "This is the text for a new comment", "userId": 12, "postId": 22}
// TODO: only authenticated users can comment
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      text: req.body.text,
      postId: req.body.postId,
      // TODO: the userId will come from req.session once we have set up our sessions
      userId: req.body.userId,
    });
    res.status(201).json(newComment);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

/***** READ *****/
// Route to retrieve all comments
// GET method with endpoint '/api/comments/'
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.findAll({
      include: [
        { model: User, attributes: ['username'] },
        { model: Post, include: { model: User, attributes: ['username'] } },
      ],
    });
    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Route to retrieve a single comment by id
// GET method with endpoint '/api/comments/:commentId'
router.get('/:commentId', async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.commentId, {
      include: [
        { model: User, attributes: ['username'] },
        { model: Post, include: { model: User, attributes: ['username'] } },
      ],
    });
    res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

/***** UPDATE *****/
// Route to update a comment by id
// PUT method with endpoint '/api/comments/:commentId'
// test with: {"text": "This is the updated text for an existing comment"}
// TODO: only authenticated users can update their comments
router.put('/:commentId', async (req, res) => {
  try {
    const updatedComment = await Comment.update(req.body, {
      where: {
        id: req.params.commentId,
        // TODO: verify that comment belongs to user attempting o update it (userId will come from req.session once we have set up our sessions)
        // userId: req.session.userId
      },
    });

    if (!updatedComment[0]) {
      return res
        .status(406)
        .json({ message: 'This request cannot be completed.' });
    }

    res.status(202).json(updatedComment);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

/***** DELETE *****/
// Route to delete a comment by id
// DELETE method with endpoint '/api/comments/:commentId'
// TODO: only admin or authenticated users can delete their comments
router.delete('/:commentId', async (req, res) => {
  try {
    const deletedComment = await Comment.destroy({
      where: {
        id: req.params.commentId,
        // TODO: verify that comment belongs to user attempting o delete it (userId will come from req.session once we have set up our sessions)
        // userId: req.session.userId
      },
    });

    if (!deletedComment) {
      return res
        .status(406)
        .json({ message: 'This request cannot be completed.' });
    }

    res.status(202).json(deletedComment);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
