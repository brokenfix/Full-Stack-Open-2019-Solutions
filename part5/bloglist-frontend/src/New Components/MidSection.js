import {Container, Header, Input, Statistic} from "semantic-ui-react";
import React from "react";
import {connect} from "react-redux";
import {ac_setSearch_Text} from "../reducers/searchTextReducer";

const MidSection =(props)=>{

    if(props.loggedInUser){
        return <Container >
            <Input icon='search' placeholder='Search...' style={{width:'50%', marginTop:'1em'}} onChange={(event)=>props.setSearchText(event.target.value)}/>
        </Container>
    }
    return(
        <Container>
            <Header as={'h1'} style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop:'1em',
            }} inverted >Minimalistic Blogs</Header>

            <Header as={'h3'} style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '0.5em',
            }} inverted >by back_slash</Header>

            <Container>
                <Input icon='search' placeholder='Search...' style={{width:'50%', marginTop:'1em'}} onChange={(event)=>props.setSearchText(event.target.value)}/>
            </Container>
            <Container style={{marginTop:'2em'}}>
                <Statistic.Group inverted widths={3}>
                    <Statistic>
                        <Statistic.Value>{props.blogs.length}</Statistic.Value>
                        <Statistic.Label>Blogs</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>31,200</Statistic.Value>
                        <Statistic.Label>Page Views</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>{props.users.length}</Statistic.Value>
                        <Statistic.Label>Users</Statistic.Label>
                    </Statistic>
                </Statistic.Group>
            </Container>
        </Container>
    )
};

const mapStateToProps = (state)=>{
    return{
        blogs:state.blogs,
        loggedInUser:state.loggedInUser,
        notificationText:state.notificationText,
        users:state.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchText: (text) => dispatch(ac_setSearch_Text(text))
    }

};
export default connect(mapStateToProps, mapDispatchToProps)(MidSection);