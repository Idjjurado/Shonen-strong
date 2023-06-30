const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Animechars, Workout, Rec_workout, Exercises, Goal_tracker } = require('../../models');

/***** READ - optional *****/
// Route to retrieve all posts
// GET method with endpoint '/api/posts/'
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User, attributes: ['username'] }],
      attributes: {
        include: [
          // Use plain SQL to get a count of the number of comments for each post
          [
            sequelize.literal(
              '(SELECT COUNT(*) FROM comment WHERE comment.postId = post.id)'
            ),
            'commentsCount',
          ],
        ],
      },
    });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - Internal Server Error
  }
});

// Route to retrieve a single post by id
// GET method with endpoint '/api/posts/:postId'
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.postId, {
      include: [
        { model: User, attributes: ['username'] },
        { model: Comment, include: { model: User, attributes: ['username'] } },
      ],
      attributes: {
        include: [
          // Use plain SQL to get a count of the number of comments for each post
          [
            sequelize.literal(
              '(SELECT COUNT(*) FROM comment WHERE comment.postId = post.id)'
            ),
            'commentsCount',
          ],
        ],
      },
    });
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - Internal Server Error
  }
});

/***** UPDATE *****/
// Route to update a post by id
// PUT method with endpoint '/api/posts/:postId'
// test with any and all of: {"title": "Updated test title for a new post", "text": "This is the updated text for the new post", "userId": 12}
// TODO: a user can update a post only if authenticated and the creator of the post
router.put('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.postId,
        // verify that post belongs to user attempting to update it
        // TODO: userId will come from req.session once we have set up our sessions
        userId: req.body.userId,
      },
    });

    if (!updatedPost[0]) {
      return res
        .status(406)
        .json({ message: 'This request cannot be completed.' });
    } // 406 - Not Acceptable

    res.status(202).json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - Internal Server Error
  }
});

/***** DELETE *****/
// Route to delete a post by id
// DELETE method with endpoint '/api/posts/:postId'
// TODO: only admin and authenticated users can delete their own posts
router.delete('/:postId', async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.postId,
        // verify that post belongs to user attempting to delete it
        // TODO: userId will come from req.session once we have set up our sessions
        // userId: req.session.userId,
      },
    });

    if (!deletedPost) {
      return res
        .status(406)
        .json({ message: 'This request cannot be completed.' });
    } // 406 - Not Acceptable

    res.status(202).json(deletedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
