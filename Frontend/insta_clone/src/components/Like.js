import React from 'react';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators as likeActions} from '../redux/modules/like'

const Like = (props) => {
    const dispatch = useDispatch()
    const [nowLike,setLike] = React.useState(false)
    const user_info = useSelector(state => state.user)
    const like_data = useSelector(state => state.like.like)
    let like_user;
    for(let i = 0; i < like_data.length; i ++) {
        if(like_data[i].post_id === props.post_id){
            like_user = like_data[i].like_user
        }
    }
    const token = sessionStorage.getItem('token')

    let num = 0;
    if(user_info.user && like_user){
        for(let i = 0; i < like_user.length; i++){
            if(like_user[i] === user_info.user.name){
                num+=1
            }
        }
    }
    if(num >= 1 && !nowLike){
        setLike(true)
    }else if(num === 0 && nowLike){
        setLike(false)
    }
   
    // console.log(nowLike)

    if(nowLike){
        return (
            <React.Fragment>
                <FavoriteIcon onClick={()=>{dispatch(likeActions.changeLikeSV(props.post_id,token))}} color='secondary' fontSize='large'/>
            </React.Fragment>
        )
    } 
        return (
        <React.Fragment>
            <FavoriteBorderIcon onClick={()=>{dispatch(likeActions.changeLikeSV(props.post_id,token))}}fontSize='large'/>
        </React.Fragment>
        )
}



export default Like;