import {Button, Card, Icon, Image, Label} from "semantic-ui-react";
import React from "react";
import {ac_setNotification_Text} from "../reducers/notificationTextReducer";
import {ac_deleteBlog, ac_likeBlog} from "../reducers/blogsReducer";
import {connect} from "react-redux";

const OneBlog = (props)=>{

    const likeHandler= () => props.likeBlog(props.db, props.blog);

    const deleteHandler = async (event) => {
        const config = {
            headers: {
                Authorization: `bearer ${props.loggedInUser.webToken}`
            }
        };

        props.deleteBlog(props.db, config, props.blog.id);
    };

    return (
        <Card raised>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src={require('../resources/slash.png')}
                />
                <Card.Header><a href={'#'}>{props.blog.title}</a></Card.Header>
                <Card.Meta>by {props.blog.author.username}</Card.Meta>
                <Card.Description>
                    {props.blog.text}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as='div' labelPosition='right' onClick={likeHandler}>
                    <Button color='red'>
                        <Icon name='heart' />
                        Like
                    </Button>
                    <Label as='a' basic color='red' pointing='left'>
                        {props.blog.likes}
                    </Label>
                </Button>

                <Button animated floated={'right'}>
                    <Button.Content visible>Delete blog</Button.Content>
                    <Button.Content hidden>
                        <Icon name='delete' />
                    </Button.Content>
                </Button>

            </Card.Content>
        </Card>
    )
};

const mapStateToProps = (state)=>{
    return{
        loggedInUser:state.loggedInUser,
        notificationText:state.notificationText
    }
};

const mapDispatchToProps = (dispatch)=> {
    return{
        setNotificationText:(data) => dispatch(ac_setNotification_Text(data)),
        likeBlog: (db, blog) => dispatch(ac_likeBlog(db,blog)),
        deleteBlog: (db, config, id) => dispatch(ac_deleteBlog(db, config,id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OneBlog);