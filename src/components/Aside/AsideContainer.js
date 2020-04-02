import React from 'react';
import Aside from './Aside';

/**
 * @description navigation panel(left column)
 */
const AsideContainer = ({store, ...rest}) => {
    const {navigationState : {friendsInfo}} = store.getState();

    return <Aside friendsInfo={friendsInfo} {...rest}/>
};

export default AsideContainer;