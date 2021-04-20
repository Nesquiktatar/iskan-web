import React, {useState} from 'react';
import * as s from './Users.styles';
import Paginator from '../../common/Paginator/Paginator';
import User from './User';
import {buildField, Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import {reduxForm} from 'redux-form';
import Button from "../../common/Button/Button";

const Users = React.memo(({
                              currentPage, onPageChanged, totalUsersCount, pageSize, usersData, followingInProgress,
                              unFollowThunk, followThunk, getFriendsThunkCreator, getUsersThunkCreator, getSearchUserThunk,
                              appPage, theme, ...props
                          }) => {

    const onSubmit = (formData) => {
        getSearchUserThunk(currentPage, pageSize, formData.term)
    }


    const [isFriendsList, setIsFriendsList] = useState(false);

    const onPageChangedALL = (currentPage, pageSize) => {
        getUsersThunkCreator(currentPage, pageSize);
        setIsFriendsList(true)
    }

    const onPageChangedFriends = (currentPage, pageSize) => {
        currentPage=1;
        getFriendsThunkCreator(currentPage, pageSize);
        setIsFriendsList(false)
    }
    return (

        <s.UsersWrapper appPage={appPage}>
            <s.Navbar appPage={appPage}>
                <s.Filter>
                    <Button onClick={() => {
                        onPageChangedALL(currentPage, pageSize)
                    }} btnText='ALL'/>
                    <Button onClick={() => {
                        onPageChangedFriends(currentPage, pageSize)
                    }} btnText='FOLLOWED'/>
                </s.Filter>
                <s.Paginator>
                    <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                               totalItemsCount={totalUsersCount} pageSize={pageSize}
                               getFriendsThunkCreator={getFriendsThunkCreator}
                               getUsersThunkCreator={getUsersThunkCreator}
                               isFriendsList={isFriendsList}
                               themes={appPage.themes}
                               theme={theme}
                    />
                </s.Paginator>
                    <UserSearchForm onSubmit={onSubmit}/>
            </s.Navbar>
            <s.UsersList>
                {
                    usersData.map(u => <User user={u} key={u.id} followingInProgress={followingInProgress}
                                             followThunk={followThunk} unFollowThunk={unFollowThunk}/>
                    )
                }
            </s.UsersList>
        </s.UsersWrapper>
    )
})

const SearchForm = ({handleSubmit}) => {
    return (

            <form onSubmit={handleSubmit}>
                <s.Search>
                {buildField('Enter user name', 'term', [required], Input)}
                <Button btnText='search'/>
                </s.Search>
            </form>

    )
}

const UserSearchForm = reduxForm({form: 'term'})(SearchForm)

export default Users;