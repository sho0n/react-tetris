import React from 'react';
import { styledCell, StyledCell} from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';


const Cell = ({ type }) => (
    <StyledCell type={'L'} color={TETROMINOS['L'].color}></StyledCell>
);

export default Cell;