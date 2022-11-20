/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {css} from '@emotion/react';

const styles = {
    root: css`
      height: 200px;
      background-color: red;
    `,
};

const TestButton: React.FC = () => <button
    css={styles.root}
>this is a button x</button>;

export default TestButton;