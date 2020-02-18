import * as React from 'react';

import styles from '../Greeting.module.scss';

export interface IGreetingProps {
    name: string;
}

const Greeter = () => {
    return (
            <div className={ styles.greeter }>
                welcome teste...
            </div>
    );
}

export default Greeter;