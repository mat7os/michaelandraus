import React from "react";
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />

            <div className={`app__flex  ${idName == 'home' ? 'app__wrapper-header' : 'app__wrapper'}`}>
                <Component />
            </div>
            <NavigationDots active={idName} />
        </div>
    );
};

export default AppWrap;