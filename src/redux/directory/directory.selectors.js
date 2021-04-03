import { createSelector } from 'reselect';

const directory = state => state.directory;

const selecDirectory = createSelector(
    [directory],
    (item) => item.sections
);

export {selecDirectory};