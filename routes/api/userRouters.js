const router = require('express').Router();

const {
    findAllUsers,
    addUser,
    deleteUser,
    updateUsers
    addFriends,
    deleteFriends,
    // get single user 
  
   
  
} = require('../../controllers/userController')

router.route('/').get(findAllUsers).post(addUser)
router.route('/:userId').delete(deleteUser);

router.route(`/api/users/:userId/friends/:friendId`).delete(deleteUser);

module.exports = router;