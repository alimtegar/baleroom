import React, {Children} from 'react';
import {withRouter} from 'next/router';
import Link from 'next/link';

const ActiveLink = ({router, children, ...props}) => {
    const child = Children.only(children);
    let className = child.props.className || null;
    
    let isActive = props.href !== '/' ? router.pathname.indexOf(props.href) > -1 : router.pathname === props.href;

    if (isActive && props.activeClassName) {
        className = `${className !== null ? className : ''} ${props.activeClassName}`.trim();
    }

    delete props.activeClassName;

    return (
        <Link {...props}>
            {React.cloneElement(child, {className})}
        </Link>
    );
};

export default withRouter(ActiveLink);